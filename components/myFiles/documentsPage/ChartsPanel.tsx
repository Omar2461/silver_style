import { useSidebar } from "@/context/SidebarContext";
import Panel from "@/components/General/Panel";

import { ReactNode } from "react";

function ChartsPanel({ children }: { children: ReactNode }) {
  const { isOpen } = useSidebar();
  return (
    <Panel
      className={`h-75 ${isOpen ? "lg:w-75" : "lg:w-100 md:w-70 "} xl:w-92 bg-white border border-gray-300 rounded-xl p-5 transtion duration-400`}
    >
      {children}
    </Panel>
  );
}

export default ChartsPanel;
