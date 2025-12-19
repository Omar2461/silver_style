import Panel from "../General/Panel";
// import { t } from "i18next";
import { ReactNode } from "react";

type TableCell = string | number | boolean | null | ReactNode;

interface TableProps {
  data: Record<string, TableCell>[];
  th: string[];
  className?: string;
}

function Table({ data, th, className }: TableProps) {
  return (
    <Panel
      className={`bg-white border border-gray-300 rounded-xl p-3 mt-5 ${
        className?.includes("pointer-events-none") ? "pointer-events-none" : ""
      }`}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              {th.map((el, idx) => (
                <th key={idx} className="pb-2">
                  {el}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((file, idx) => {
              return (
                <tr
                  key={idx}
                  className="border-b last:border-0 hover:bg-gray-50 transition"
                >
                  {th.map((header) => {
                    return (
                      <td
                        key={header}
                        className={`py-2 font-medium text-gray-900 ${className}`}
                      >
                        {file[header]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

export default Table;
