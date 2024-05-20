export default function Cont() {
  return (
    <>
      <div className="main flex justify-between items-center max-sm:h-[80vh] max-sm:w-[100%]">
        <div className="h-[10vh] w-[5vw] bg-neutral-600 rounded p-7  flex items-center max-sm:hidden">
          <img src="src\Container1\image.png" alt="" height="25" width="25" />
        </div>
        <div className="flex justify-center items-center flex-col max-sm:text-center max-md:p-[1rem]">
          <div>
            <h1 className="text-[70px]  text-gray-700 max-sm:text-[50px] ">
              Welcome to the thespacious
            </h1>
          </div>
          <div>
            <h2 className="text-[50px]  text-gray-700 mb-12 max-sm:text-[40px] ">
              a furniture and interiors agency
            </h2>
          </div>

          <div className="flex gap-20 max-sm:flex-col max-sm:gap-8">
            <div>
              <button className="border-0 bg-white hover:bg-slate-200 border-black rounded-full text-[24px] p-4 w-[10vw] max-sm:w-[30vw] max-sm:text-[18px]">
                ABOUT
              </button>
            </div>
            <div>
              <button className="bg-blue-600 hover:bg-blue-400  border-0 text-white border-black rounded-full text-[24px] p-4 w-[10vw] max-sm:w-[30vw] max-sm:text-[18px]">
                GO SHOP
              </button>
            </div>
          </div>
        </div>
        <div className="h-[10vh] w-[6vw] bg-neutral-600 rounded p-9 flex items-center max-sm:hidden">
          <img src="src\Container1\copy_2.png" alt="" height="25" width="25" />
        </div>
      </div>
    </>
  );
}
