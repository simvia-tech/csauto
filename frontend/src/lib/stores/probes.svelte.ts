/**
 * Probe plot store — handles both time probes and profile probes.
 *
 * Each tab (time / profile) has independent state for cases, files,
 * columns, start mode, and rendered SVG.
 */

export interface ProbeTabState {
  selectedCases: string[];
  file: string;
  files: string[];
  columns: string[];
  selectedColumns: string[];
  axis: string;
  startFrom: "zero" | "restart" | "custom";
  xMin: number;
  positionText: string;
  svgHtml: string;
  autoRefresh: boolean;
}

function defaultTab(): ProbeTabState {
  return {
    selectedCases: [],
    file: "",
    files: [],
    columns: [],
    selectedColumns: [],
    axis: "time",
    startFrom: "zero",
    xMin: 0,
    positionText: "",
    svgHtml: "",
    autoRefresh: true,
  };
}

let activeTab = $state<"time" | "profile">("time");
let time = $state<ProbeTabState>(defaultTab());
let profile = $state<ProbeTabState>({ ...defaultTab(), axis: "" });
let cardVisible = $state(true);
let timeHasData = $state(false);
let profileHasData = $state(false);

export function getActiveTab(): "time" | "profile" {
  return activeTab;
}
export function setActiveTab(t: "time" | "profile") {
  activeTab = t;
}

export function getTimeHasData(): boolean {
  return timeHasData;
}
export function setTimeHasData(v: boolean) {
  timeHasData = v;
}
export function getProfileHasData(): boolean {
  return profileHasData;
}
export function setProfileHasData(v: boolean) {
  profileHasData = v;
}

/** Auto-switch to the tab that has data if current doesn't */
export function autoSelectTab() {
  if (activeTab === "time" && !timeHasData && profileHasData)
    activeTab = "profile";
  else if (activeTab === "profile" && !profileHasData && timeHasData)
    activeTab = "time";
}

export function getTimeState(): ProbeTabState {
  return time;
}
export function getProfileState(): ProbeTabState {
  return profile;
}

export function setTimeState(partial: Partial<ProbeTabState>) {
  time = { ...time, ...partial };
}
export function setProfileState(partial: Partial<ProbeTabState>) {
  profile = { ...profile, ...partial };
}

export function getProbeCardVisible(): boolean {
  return cardVisible;
}
export function setProbeCardVisible(v: boolean) {
  cardVisible = v;
}
