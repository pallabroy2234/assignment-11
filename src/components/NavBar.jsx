import Link from "next/link";

import {usePathname} from "next/navigation";
const NavBar = () => {
  const currentPath = usePathname();
  return (
    <>
      <div className='py-4 shadow'>
        <div className='container flex items-center justify-center space-x-10 font-semibold text-black transition-all duration-150 felx-col'>
          <Link href={"/"} className={currentPath == "/" ? "text-orange-500" : "black"}>
            Home
          </Link>
          <Link href={"/blog"} className={currentPath == "/blog" ? "text-orange-500" : "black"}>
            Blog
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
