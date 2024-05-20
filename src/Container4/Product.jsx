import Cards from "./Cards";
export default function Product() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100%] w-[100%] p-[8rem] gap-[3rem] max-sm:w-[100%] max-sm:h-[100%] max-sm:p-[2rem]">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-[40px] text-blue-700 max-sm:text-[30px]">
            LATEST INTERIOR PRODUCTS ADDED
          </h1>
          <p className="text-[24px] text-gray-500 max-sm:text-[20px]">
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry. Lorem Ipsum has been the industry's...
          </p>
        </div>
        <div>
          <Cards />
        </div>
        <div>
          <button className="bg-blue-600 hover:bg-blue-400 border-0 text-white border-black rounded-full text-[24px] p-4 w-[10vw] mt-16 max-sm:mt-2 max-sm:w-[50vw] max-sm:text-[18px]">
            VIEW MORE
          </button>
        </div>
      </div>
    </>
  );
}
