"use client";

import Container from "@/components/myFiles/Container";
import Table from "@/components/myFiles/Table";
import Breadcrumb from "@/components/shared/Breadcrumb";

import { useTranslation } from "react-i18next";

import { PiFinnTheHumanDuotone } from "react-icons/pi";

function Page() {
  const data = [
    {
      Version: "Version 5",
      Date: "July 26, 2024",
      Size: "2.5 MB",
      "Uploaded By": <PiFinnTheHumanDuotone className="text-3xl" />,
      Actions: "view",
    },
    {
      Version: "Version 5",
      Date: "July 26, 2024",
      Size: "2.5 MB",
      "Uploaded By": <PiFinnTheHumanDuotone className="text-3xl" />,
      Actions: "view",
    },
    {
      Version: "Version 5",
      Date: "July 26, 2024",
      Size: "2.5 MB",
      "Uploaded By": <PiFinnTheHumanDuotone className="text-3xl" />,
      Actions: "view",
    },
    {
      Version: "Version 5",
      Date: "July 26, 2024",
      Size: "2.5 MB",
      "Uploaded By": <PiFinnTheHumanDuotone className="text-3xl" />,
      Actions: "view",
    },
    {
      Version: "Version 5",
      Date: "July 26, 2024",
      Size: "2.5 MB",
      "Uploaded By": <PiFinnTheHumanDuotone className="text-3xl" />,
      Actions: "view",
    },
    {
      Version: "Version 5",
      Date: "July 26, 2024",
      Size: "2.5 MB",
      "Uploaded By": <PiFinnTheHumanDuotone className="text-3xl" />,
      Actions: "view",
    },
    {
      Version: "Version 5",
      Date: "July 26, 2024",
      Size: "2.5 MB",
      "Uploaded By": <PiFinnTheHumanDuotone className="text-3xl" />,
      Actions: "view",
    },
  ];

  const { t } = useTranslation();

  const th = Object.keys(data[0]);

  return (
    <Container>
      <Breadcrumb />
      <div>
        <h1 className=" text-xl font-bold lg:text-3xl lg:font-bold md:text-3xl md:font-bold transtion duration-400">
          {t("Version History")}
        </h1>
        <p className="text-gray-500 mt-3">
          {t("View and manage previous versions of this document")}.
        </p>
      </div>
      <Table
        className="pointer-events-none px-6 py-10"
        data={data}
        th={th}
      ></Table>
    </Container>
  );
}
export default Page;
