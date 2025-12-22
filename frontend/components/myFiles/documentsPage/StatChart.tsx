// import { t } from "i18next";
import ChartsPanel from "./ChartsPanel";
// import UsageChart from "./UsageChart";

function StatChart() {
  return (
    <div className="flex flex-wrap mt-5 gap-10 lg:gap-15 2xl:gap-23">
      <ChartsPanel>
        <h1>Necklaces </h1>
        <p className="font-bold lg:text-2xl md:text-xl mb-2 mt-0.5">
          500 
        </p>

        <h1>Rings</h1>
        <p className="font-bold lg:text-2xl md:text-xl mb-2 mt-0.5">
          500
        </p>
      </ChartsPanel>

      {/* <ChartsPanel>
        <h1>Usage Per Person</h1>
        <p className="font-bold lg:text-2xl md:text-xl mb-2 mt-0.5">
          500 GB / Person
        </p>
        <UsageChart />
      </ChartsPanel> */}
    </div>
  );
}

export default StatChart;
