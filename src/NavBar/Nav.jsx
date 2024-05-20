export default function Nav() {
  return (
    <>
      <nav className="bg-blue-900 text-white flex justify-around items-center h-[8vh] w-full m-0 p-2 text-[18px] ">
        <div>
          <h1 className="ml-[-2vw] ">www.elitedesignstudio.com</h1>
        </div>
        <div className="max-sm:hidden max-md:hidden max-lg:hidden">
          <ul className="flex justify-evenly items-center ml-[15vw]">
            <li>
              <a href="#Home">HOME &nbsp;+</a>
            </li>
            <li>
              <a href="#Service">&nbsp;&nbsp; SERVICE &nbsp;+</a>
            </li>
            <li>
              <a href="#Portfolio">&nbsp;&nbsp; PORTFOLIO &nbsp; +</a>
            </li>
            <li>
              <a href="#Read">&nbsp;&nbsp; READ BLOG &nbsp; +</a>
            </li>
            <li>
              <a href="#Contact">&nbsp;&nbsp; CONTACT &nbsp;+</a>
            </li>
            <li>
              <a href="#Support">&nbsp;&nbsp; SUPPORT</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
