import Panel from "@/components/shared/Panel";
import { t } from "i18next";

import { MdOutlineFolderOpen } from "react-icons/md";

interface MostUsedFoldersProps {
  dir: string;
}

function MostUsedFolders({ dir }: MostUsedFoldersProps) {
  return (
    <div className="flex flex-wrap mt-5 gap-5">
      <div className="flex">
        <Panel className="rounded-xl bg-white border border-gray-300 w-63 p-3 relative pointer-events-none">
          <h1 className="ml-10">{t("Project Alpha")}</h1>
        </Panel>
        <MdOutlineFolderOpen
          className={`absolute mt-3.5 ml-4 text-xl ${dir == "rtl" ? "mr-52" : ""}`}
        />
      </div>

      <div className="flex">
        <Panel className="rounded-xl bg-white border border-gray-300 w-63 p-3 relative pointer-events-none">
          <h1 className="ml-10">{t("Project Alpha")}</h1>
        </Panel>
        <MdOutlineFolderOpen
          className={`absolute mt-3.5 ml-4 text-xl ${dir == "rtl" ? "mr-52" : ""}`}
        />
      </div>

      <div className="flex">
        <Panel className="rounded-xl bg-white border border-gray-300 w-63 p-3 relative pointer-events-none">
          <h1 className="ml-10">{t("Project Alpha")}</h1>
        </Panel>
        <MdOutlineFolderOpen
          className={`absolute mt-3.5 ml-4 text-xl ${dir == "rtl" ? "mr-52" : ""}`}
        />
      </div>
    </div>
  );
}

export default MostUsedFolders;
