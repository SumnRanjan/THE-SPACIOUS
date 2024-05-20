export default function Left() {
  return (
    <>
      {" "}
      <div className="flex flex-col gap-[2rem] ">
        <h1 className="text-black text-[50px] font-bold w-[23vw] max-sm:w-[100%] max-sm:h-[100%]">
          READ OUR BLOG
        </h1>
        <p className="w-[20vw] text-[24px] max-sm:w-[100%] max-sm:h-[100%]">
          ONE OF THE BEST AND CLEANIEST WORDPRESS THEME FOR AGENCIES AND ONLINE
          PORTFOLIOS
        </p>
        <div className="flex gap-4 mt-4 max-sm:hidden">
          <div className="h-20 w-20 bg-gray-400 rounded-full p-7">
            <img src="src/Container5/image.png" alt="" height="25" width="15" />
          </div>
          <div className="h-20 w-20 bg-pink-950 rounded-full p-7">
            <img src="src/Container5/copy_2.png" alt="" height="25" width="15" />
          </div>
        </div>
      </div>
    </>
  );
}
