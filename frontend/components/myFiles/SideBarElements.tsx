import { MdOutlineFolderOpen } from "react-icons/md";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import SidebarLink from "../General/SidebarLink";

function SideBarElements() {
  const elements = [
    {
      name: "My Files",
      href: "/myFiles",
      icon: <MdOutlineFolderOpen size={20} />,
    },

    {
      name: "New",
      href: "/myFiles/new",
      icon: <MdOutlineCreateNewFolder size={20} />,
    },
  ];

  return (
    <div>
      <nav className="flex flex-col space-y-2 px-4">
        {elements.map(({ name, href, icon }, idx) => (
          <SidebarLink key={idx} href={href}>
            {icon}
            {name}
          </SidebarLink>
        ))}
      </nav>
    </div>
  );
}

export default SideBarElements;
