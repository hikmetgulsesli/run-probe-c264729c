// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Utility - Run Probe
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Gauge, RefreshCw, WifiOff } from "lucide-react";


export type StatusUtilityRunProbeActionId = "refresh-status-1";

export interface StatusUtilityRunProbeProps {
  actions?: Partial<Record<StatusUtilityRunProbeActionId, () => void>>;

}

export function StatusUtilityRunProbe({ actions }: StatusUtilityRunProbeProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface-container-lowest border-b border-outline-variant full-width top-0 docked z-50">
      <div className="flex justify-between items-center h-16 px-container-padding w-full max-w-7xl mx-auto">
      <div className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2">
      <Gauge  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Run Probe
                  </div>
      {/* Navigation Suppressed: Task-Focused Linear Flow */}
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center p-container-padding md:p-stack-lg w-full max-w-3xl mx-auto">
      {/* Offline Banner (Simulated State) */}
      <div className="hidden w-full bg-error-container text-on-error-container border border-error/20 p-stack-sm rounded mb-stack-md flex items-center justify-center gap-2 font-label-md text-label-md" id="offlineBanner">
      <WifiOff className="text-sm" aria-hidden={true} focusable="false" />
                  Local state check failed. Retrying...
              </div>
      <div className="w-full flex flex-col gap-stack-lg">
      {/* Status Section */}
      <section className="flex flex-col gap-stack-sm w-full">
      <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-unit">Current Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-sm">
      {/* System Heartbeat Card */}
      <div className="bg-surface-container-lowest border border-outline-variant p-stack-sm flex items-center justify-between rounded shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
      <span className="font-body-md text-body-md text-on-surface">Heartbeat</span>
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-secondary-container relative">
      <div className="absolute inset-0 rounded-full bg-secondary-container animate-ping opacity-75"></div>
      </div>
      <span className="font-mono-sm text-mono-sm text-secondary">Active</span>
      </div>
      </div>
      {/* Latency Card */}
      <div className="bg-surface-container-lowest border border-outline-variant p-stack-sm flex items-center justify-between rounded shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
      <span className="font-body-md text-body-md text-on-surface">Latency</span>
      <span className="font-mono-sm text-mono-sm text-on-surface-variant">12ms</span>
      </div>
      {/* Uptime Card */}
      <div className="bg-surface-container-lowest border border-outline-variant p-stack-sm flex items-center justify-between rounded shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
      <span className="font-body-md text-body-md text-on-surface">Uptime</span>
      <span className="font-mono-sm text-mono-sm text-on-surface-variant">99.98%</span>
      </div>
      </div>
      </section>
      {/* Control Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-surface-container-lowest border border-outline-variant p-stack-md rounded gap-stack-md w-full">
      <div className="flex flex-col gap-unit w-full md:w-auto">
      <button className="bg-primary text-on-primary font-label-md text-label-md py-2 px-4 rounded hover:bg-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2" id="refreshBtn" type="button" data-action-id="refresh-status-1" onClick={actions?.["refresh-status-1"]}>
      <RefreshCw  id="refreshIcon" className="text-sm transition-transform duration-500" aria-hidden={true} focusable="false" />
                              Refresh Status
                          </button>
      <span className="font-mono-sm text-mono-sm text-outline block text-center md:text-left mt-1" id="lastUpdatedStr">Last updated: Just now</span>
      </div>
      <div className="h-px w-full md:w-px md:h-12 bg-outline-variant/50 block"></div>
      <div className="flex items-center justify-between w-full md:w-auto gap-stack-sm">
      <span className="font-body-md text-body-md text-on-surface" id="systemStateLabel">System Ready</span>
      {/* Minimalist Toggle */}
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer" id="systemToggle" type="checkbox" defaultValue="" />
      <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      </section>
      </div>
      </main>
      
    </>
  );
}
