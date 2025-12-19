import Panel from "@/components/General/Panel";
// import { t } from "i18next";

function InfoCards() {
  return (
    <div className="flex mt-5 gap-5 lg:gap-15">
      <Panel className="w-full bg-gray-300 lg:w-100 rounded-xl p-5">
        <h1>Total Disk Usage</h1>
        <p className="font-bold md:text-xl lg:text-xl mt-3 md:mt-0.5 lg:mt-0.5">
          500 GB / 1 TB
        </p>
      </Panel>

      <Panel className="w-full bg-gray-300 lg:w-100 rounded-xl p-5">
        <h1>Usage Per Person</h1>
        <p className="font-bold md:text-xl lg:text-xl mt-3 md:mt-0.5 lg:mt-0.5 ">
          500 GB / Person
        </p>
      </Panel>
    </div>
  );
}

export default InfoCards;
