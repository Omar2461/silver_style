"use client";

import Dropdown from "@/components/myFiles/Dropdown";
// import Breadcrumb from "@/components/shared/Breadcrumb";
import Container from "@/components/General/Container";
import Input from "@/components/General/Input";
import Panel from "@/components/General/Panel";

// import { useTranslation } from "react-i18next";

function Page() {
  const fileTypes = [{ name: "PDF" }, { name: "DOCX" }, { name: "TXT" }];
  const folders = [
    { name: "Projects" },
    { name: "Work" },
    { name: "Personal" },
  ];
  const visibility = [
    { name: "Private" },
    { name: "Public" },
    { name: "Restricted" },
  ];
  // const { t } = useTranslation();

  return (
    <Container>
      {/* <Breadcrumb /> */}
      <h1 className=" text-xl font-bold lg:text-3xl lg:font-bold md:text-3xl md:font-bold transtion duration-400">
       Upload new file
      </h1>

      <form className="flex flex-col mt-5 gap-5">
        <div className="flex flex-col gap-2">
          <label>File name</label>
          <Input
            className={`bg-gray-200 text-black md:w-90 lg:w-90 rounded-xl lg:pl-3 pr-3`}
            placeholder="Enter file name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>File type</label>
          <Dropdown className="bg-gray-200 p-5" options={fileTypes} />
        </div>

        <div className="flex flex-col gap-2">
          <label>Folder</label>
          <Dropdown className="bg-gray-200 p-5" options={folders} />
        </div>

        <div className="flex flex-col gap-2">
          <label>Visibility</label>
          <Dropdown className="bg-gray-200 p-5" options={visibility} />
        </div>

        <div className="flex flex-col gap-2">
          <label>Description</label>
          <Panel className="bg-gray-200 text-black md:w-90 lg:w-90 rounded-xl">
            <textarea
              className="w-full h-30 p-4 transtion duration-400"
              placeholder="Enter file description"
              name=""
              id=""
            ></textarea>
          </Panel>
        </div>
      </form>
    </Container>
  );
}

export default Page;
