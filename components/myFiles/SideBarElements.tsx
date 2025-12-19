import { MdOutlineFolderOpen } from "react-icons/md";
import { RiUserSharedLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { IoLayersOutline } from "react-icons/io5";
import { MdOutlineGroups } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineHelpCenter } from "react-icons/md";

import SidebarLink from "../General/SidebarLink";
// import LangBtn from "../shared/LangBtn";
// import { useTranslation } from "react-i18next";

function SideBarElements() {
  const elements = [
    {
      name: "My Files",
      href: "/myFiles",
      icon: <MdOutlineFolderOpen size={20} />,
    },
    // {
    //   name: "Shared",
    //   href: "/myFiles/Shared",
    //   icon: <RiUserSharedLine size={20} />,
    // },
    // {
    //   name: "Project Proposal",
    //   href: "/myFiles/projectProposal",
    //   icon: <IoDocumentOutline size={20} />,
    // },
    {
      name: "New",
      href: "/myFiles/new",
      icon: <MdOutlineCreateNewFolder size={20} />,
    },
    // {
    //   name: "Activity",
    //   href: "/myFiles/Activity",
    //   icon: <MdOutlinePublishedWithChanges size={20} />,
    // },
    // {
    //   name: "Templates",
    //   href: "/myFiles/Templates",
    //   icon: <IoLayersOutline size={20} />,
    // },

    {
      name: "All Groups",
      href: "/myFiles/allGroups",
      icon: <MdOutlineGroups size={20} />,
    },
    // {
    //   name: "Version History",
    //   href: "/myFiles/version_history",
    //   icon: <FaHistory size={20} />,
    // },
    // {
    //   name: "Help",
    //   href: "/myFiles/help",
    //   icon: <MdOutlineHelpCenter size={20} />,
    // },
    // {
    //   name: "Trash",
    //   href: "/myFiles/Trash",
    //   icon: <FaRegTrashAlt size={20} />,
    // },
    {
      name: "Settings",
      href: "/myFiles/settings",
      icon: <IoIosSettings size={20} />,
    },
  ];

  // const { t } = useTranslation();
  return (
    <div>
      <nav className="flex flex-col space-y-2 px-4">
        {elements.map(({ name, href, icon }, idx) => (
          <SidebarLink key={idx} href={href}>
            {icon}
            {name}
          </SidebarLink>
        ))}

        {/* <LangBtn className="ml-50 mt-5" /> */}
      </nav>
    </div>
  );
}

export default SideBarElements;
