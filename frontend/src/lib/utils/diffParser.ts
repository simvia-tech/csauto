/**
 * Unified diff parser — converts unified diff text into paired side-by-side display items.
 *
 * Pure function with no UI dependencies. Handles hunk headers, del+add pairing,
 * and context collapsing.
 */

export interface DiffRow {
  type: "equal" | "add" | "del";
  leftNum: number | null;
  rightNum: number | null;
  leftContent: string;
  rightContent: string;
}

export interface DisplayItem {
  kind: "line" | "separator";
  row?: DiffRow;
  skipped?: number;
  hunkStart?: boolean;
}

/**
 * Parse unified diff text into a list of display items with context collapsing.
 *
 * @param text - Unified diff output from the backend
 * @param contextLines - Number of context lines to show around diffs
 */
export function parseDiff(text: string, contextLines = 3): DisplayItem[] {
  const lines = text.split("\n");
  const rows: DiffRow[] = [];
  let leftNum = 0;
  let rightNum = 0;
  let inHunk = false;

  for (const line of lines) {
    if (
      line.startsWith("===") ||
      line.startsWith("---") ||
      line.startsWith("+++")
    )
      continue;

    const hunkMatch = line.match(/^@@ -(\d+),?\d* \+(\d+),?\d* @@/);
    if (hunkMatch) {
      leftNum = parseInt(hunkMatch[1], 10) - 1;
      rightNum = parseInt(hunkMatch[2], 10) - 1;
      inHunk = true;
      continue;
    }

    if (!inHunk) continue;

    if (line.startsWith("-")) {
      leftNum++;
      rows.push({
        type: "del",
        leftNum,
        rightNum: null,
        leftContent: line.slice(1),
        rightContent: "",
      });
    } else if (line.startsWith("+")) {
      rightNum++;
      rows.push({
        type: "add",
        leftNum: null,
        rightNum,
        leftContent: "",
        rightContent: line.slice(1),
      });
    } else {
      leftNum++;
      rightNum++;
      const content = line.startsWith(" ") ? line.slice(1) : line;
      rows.push({
        type: "equal",
        leftNum,
        rightNum,
        leftContent: content,
        rightContent: content,
      });
    }
  }

  /* Pair adjacent del+add into side-by-side changed lines */
  const paired: DiffRow[] = [];
  let i = 0;
  while (i < rows.length) {
    if (rows[i].type === "del") {
      const dels: DiffRow[] = [];
      while (i < rows.length && rows[i].type === "del") {
        dels.push(rows[i]);
        i++;
      }
      const adds: DiffRow[] = [];
      while (i < rows.length && rows[i].type === "add") {
        adds.push(rows[i]);
        i++;
      }

      const maxLen = Math.max(dels.length, adds.length);
      for (let j = 0; j < maxLen; j++) {
        const del = dels[j];
        const add = adds[j];
        if (del && add) {
          paired.push({
            type: "del",
            leftNum: del.leftNum,
            rightNum: add.rightNum,
            leftContent: del.leftContent,
            rightContent: add.rightContent,
          });
        } else if (del) {
          paired.push(del);
        } else if (add) {
          paired.push(add);
        }
      }
    } else {
      paired.push(rows[i]);
      i++;
    }
  }

  /* Collapse unchanged regions, keeping contextLines around diffs */
  const show = new Set<number>();
  for (let k = 0; k < paired.length; k++) {
    if (paired[k].type !== "equal") {
      for (
        let j = Math.max(0, k - contextLines);
        j <= Math.min(paired.length - 1, k + contextLines);
        j++
      ) {
        show.add(j);
      }
    }
  }

  if (show.size === 0) return [];

  const items: DisplayItem[] = [];
  let lastShown = -1;
  let prevWasDiff = false;

  for (let k = 0; k < paired.length; k++) {
    if (show.has(k)) {
      if (lastShown >= 0 && k - lastShown > 1) {
        items.push({ kind: "separator", skipped: k - lastShown - 1 });
      }
      const isDiff = paired[k].type !== "equal";
      const isHunkStart = isDiff && !prevWasDiff;
      items.push({ kind: "line", row: paired[k], hunkStart: isHunkStart });
      prevWasDiff = isDiff;
      lastShown = k;
    }
  }

  if (lastShown < paired.length - 1 && lastShown >= 0) {
    items.push({ kind: "separator", skipped: paired.length - 1 - lastShown });
  }

  if (items.length > 0 && items[0].kind === "line") {
    const firstLeft = items[0].row?.leftNum ?? 0;
    const firstRight = items[0].row?.rightNum ?? 0;
    const skipped = Math.max(firstLeft, firstRight) - 1;
    if (skipped > 0) items.unshift({ kind: "separator", skipped });
  }

  return items;
}
