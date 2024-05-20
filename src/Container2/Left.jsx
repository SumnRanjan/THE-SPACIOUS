export default function Left() {
  return (
    <>
      <div className="flex flex-col  gap-10 text-gray-500 mt-[-14vh] max-sm:mt-[2vh] max-sm:text-center max-sm:items-center">
        <h1 className="text-blue-800 text-[35px] font-bold">
          FEATURED CATEGORIES
        </h1>
        <p className="w-[20vw] text-[24px]  leading-10 max-sm:w-[100%] max-sm:h-[100%] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          <br />
          <br />
          ever since the 1500s, when an unknown printer took a galley ...
        </p>
        <button className="bg-blue-600 hover:bg-blue-400 border-0 text-white border-black rounded-full text-[22px] p-4 w-[15vw] mt-6 max-sm:w-[50vw] max-sm:text-[16px]">
          VIEW ALL CATEGORIES
        </button>
        <br />
      </div>
    </>
  );
}
