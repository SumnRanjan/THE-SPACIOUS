import { Pics } from "../utils";

export default function Cards() {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 max-sm:grid-cols-1 max-sm:h-[100%] max-sm:w-[100%]">
        {Pics.map((el) => (
          <div className="flex  gap-10 flex-wrap">
            <img  src={el.img} alt="" height="600" width="500" />
            <h1 className="text-[24px]">{el.text}</h1>
            
            <button className="bg-blue-600 hover:bg-blue-400 border-0 text-white border-black rounded text-[24px] p-4 w-[8vw] max-sm:w-[30vw] max-sm:text-[18px] max-sm:ml-[26vw] ">
              + More
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
