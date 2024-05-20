import { Pic } from "../utils";
export default function Cards() {
  return (
    <>
      <div className="grid grid-cols-3 gap-[7rem] w-[100%] max-sm:grid-cols-1 max-sm:gap-20">
        {Pic.map((el) => {
          return (
            <div >
              <div className="relative left-[15.8vw] bottom-[-8.6vh] max-sm:hidden">
                <img src="src\Container4\Carts.png" alt="" />
              </div>
              {/* <Img src ={el.img}></Img> */}
              <img src={el.img} height="400" width="400" />
              <h1 className="mt-[-3rem] font-bold ml-5 text-white">
                {el.text}
              </h1>             
            </div>
          );
        })}
      </div>
    </>
  );
}
