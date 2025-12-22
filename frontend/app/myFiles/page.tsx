"use client";

// import "../i18n";
// import Breadcrumb from "@/components/shared/Breadcrumb";
import Input from "@/components/General/Input";

// import { useTranslation } from "react-i18next";

import { CiSearch } from "react-icons/ci";

import Table from "@/components/myFiles/Table";
// import MostUsedFolders from "@/components/myFiles/documentsPage/MostUsedFolders";
import InfoCards from "@/components/myFiles/documentsPage/InfoCards";
import StatChart from "@/components/myFiles/documentsPage/StatChart";
import Container from "@/components/General/Container";

function Page() {
  const data = [
    {
      name: "Project Proposal",
      owner: "Liam Bennett",
      date: "2023-08-15",
      size: "2.5 MB",
    },
    {
      name: "Meeting Notes",
      owner: "Olivia Hayes",
      date: "2023-08-14",
      size: "1.2 MB",
    },
    {
      name: "Client Contract",
      owner: "Ethan Wong",
      date: "2023-08-12",
      size: "3.8 MB",
    },
    {
      name: "Marketing Plan",
      owner: "Sophia Clark",
      date: "2023-08-10",
      size: "4.1 MB",
    },
    {
      name: "Financial Report",
      owner: "Nathan Patel",
      date: "2023-08-08",
      size: "5.3 MB",
    },
  ];

  const th = Object.keys(data[0]);
  // const { t, i18n } = useTranslation();

  // const direction = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <Container className="bg-white">
      {/* <Breadcrumb /> */}
      <h1 className=" text-xl font-bold lg:text-3xl lg:font-bold md:text-3xl md:font-bold transtion duration-400">
        Documents
      </h1>
      <div className="relative mt-5">
        <Input className={`bg-gray-300 text-black `} />
        <CiSearch
          className={`absolute left-2 top-4 md:left-5 md:top-[13px] md:text-xl lg:top-[13px] lg:left-5 lg:text-xl `}
        />
      </div>

      {/* <InfoCards /> */}

      <StatChart />

      <h1 className="font-bold mt-5">Most Used Folders</h1>
      {/* <MostUsedFolders /> */}

      <h1 className="font-bold mt-5">Quick Access</h1>
      <Table data={data} th={th} />
    </Container>
  );
}

export default Page;
