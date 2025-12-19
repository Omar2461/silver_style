"use client";

import Table from "@/components/myFiles/Table";
// import Breadcrumb from "@/components/shared/Breadcrumb";
import Container from "@/components/General/Container";
// import { useTranslation } from "react-i18next";

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

  // const { t } = useTranslation();
  return (
    <Container>
      {/* <Breadcrumb /> */}
      <h1 className=" text-xl font-bold lg:text-3xl lg:font-bold md:text-3xl md:font-bold transtion duration-400">
        All Groups
      </h1>
      <Table className="pointer-events-none px-6 py-10 " data={data} th={th} />
    </Container>
  );
}

export default Page;
