import Link from "next/link";

function SideBarEl() {
  const links = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];
  const renderLinks = links.map((link, idx) => (
    <Link key={idx} href={link.href} className="p-3">
      <li className="hover:text-gray-300 cursor-pointer">{link.title}</li>
    </Link>
  ));

  return (
    <ul className="flex flex-col space-y-2 px-4 py-5 text-xl">{renderLinks}</ul>
  );
}

export default SideBarEl;
