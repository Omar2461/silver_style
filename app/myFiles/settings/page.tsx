"use client";

import Container from "@/components/General/Container";
// import { useTranslation } from "react-i18next";
import { Fragment, useState } from "react";
// import Breadcrumb from "@/components/shared/Breadcrumb";

import { IoIosCloseCircle } from "react-icons/io";
import Input from "@/components/General/Input";
import Dropdown from "@/components/myFiles/Dropdown";

function Page() {
  const pageElem = [
    {
      data: [
        {
          title: "Organization Name",
          details: "Confiqure the name of your organization",
          outher: "Acme Co.",
        },
        {
          title: "Organization Domain",
          details: "Confiqure the domain of your organization",
          outher: "acme.com",
        },
      ],
      category: "General",
    },

    {
      data: [
        {
          title: "Password Policy",
          details: "Confiqure the password policy of your organization",
          outher: "Default",
        },
        {
          title: "Two-Factor Authentication",
          details:
            "Confiqure the two-factor authentication policy of your organization",
          outher: "Disabled",
        },
      ],
      category: "Security",
    },

    {
      data: [
        {
          title: "Integrations",
          details: "Confiqure the integrations of your organization",
          outher: "Default",
        },
      ],
      category: "Integrations",
    },
  ];

  const langOp = [
    { name: "English" },
    { name: "العربية (Arabic)" },
    { name: "Français (French)" },
    { name: "Español (Spanish)" },
    { name: "Deutsch (German)" },
    { name: "中文 (Chinese)" },
    { name: "日本語 (Japanese)" },
  ];

  const timezoneOp = [
    { name: "UTC (Coordinated Universal Time)" },
    { name: "Africa/Cairo (GMT+2)" },
    { name: "Europe/London (GMT+0)" },
    { name: "Europe/Paris (GMT+1)" },
    { name: "Asia/Dubai (GMT+4)" },
    { name: "Asia/Tokyo (GMT+9)" },
    { name: "America/New_York (GMT-5)" },
    { name: "America/Los_Angeles (GMT-8)" },
  ];

  const profileData = [
    { label: "Name" },
    { label: "Email" },
    { label: "Jop Title" },
    { label: "Company" },
  ];

  const prefData = [
    { label: "Language", options: langOp },
    { label: "Time Zone", options: timezoneOp },
  ];

  const [showEdit, setShowEdit] = useState(false);

  // const { t, i18n } = useTranslation();

  const pageElemRender = pageElem.map(({ data, category }, idx) => (
    <div key={idx} className="flex flex-col mt-5 gap-5">
      <h1 className="font-bold">category</h1>
      {data.map(({ title, details, outher }, idx) => (
        <div key={idx} className="flex flex-col">
          <h2>title</h2>
          <p className="text-gray-500 flex flex-wrap md:relative lg:relative xl:relative gap-2">
            details
            <span
              className={`md:absolute lg:absolute xl:absoluteF text-black`}
            >
              outher
            </span>
          </p>
        </div>
      ))}
    </div>
  ));

  const handleClick = () => {
    setShowEdit((prev) => !prev);
  };

  return (
    <Container>
      {/* <Breadcrumb /> */}
      {!showEdit ? (
        <>
          <h1 className=" text-xl font-bold lg:text-3xl lg:font-bold md:text-3xl md:font-bold transtion duration-400">
            Settings
          </h1>
          {pageElemRender}
          <button
            onClick={handleClick}
            className={`bg-blue-500 text-white rounded-4xl w-46 h-9   mt-20 p-2 hover:scale-110 transtion duration-400 ease-in-out`}
          >
            Edit Your Profile
          </button>
        </>
      ) : (
        <div>
          <div className="flex">
            <h1 className=" text-xl font-bold lg:text-3xl lg:font-bold md:text-3xl md:font-bold transtion duration-400">
              Settings
            </h1>
            <IoIosCloseCircle
              onClick={handleClick}
              className={`text-3xl `}
            />
          </div>
          <p className="text-gray-500 mt-3 mb-8">
            Manage your account settings snd prefernces
          </p>
          <div>
            <h1 className=" text-lg font-bold lg:text-2xl lg:font-bold md:text-2xl md:font-bold transtion duration-400">
              Profile
            </h1>
            <form className="flex flex-col mt-5 gap-6">
              {profileData.map(({ label }, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <label>label</label>
                  <Input
                    className={` bg-white border border-gray-300 hover:bg-gray-200 md:w-90 lg:w-90 rounded-xl lg:pl-3 pr-3`}
                  />
                </div>
              ))}

              <h1 className=" text-lg font-bold lg:text-2xl lg:font-bold md:text-2xl md:font-bold transtion duration-400">
                Preferences
              </h1>

              {prefData.map(({ label, options }, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <label>label</label>
                  <Dropdown
                    className="bg-white border border-gray-300"
                    options={options}
                  />
                </div>
              ))}

              <button
                onClick={handleClick}
                className={`bg-blue-500 text-white border rounded-3xl w-45 p-2 mt-5 mb-5 hover:scale-110 transtion duration-400 ease-in-out`}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Page;
