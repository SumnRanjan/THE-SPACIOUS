export default function New() {
  return (
    <>
      <div className=" flex border-0 p-[6rem]" id="Contact">
        <div className="border borderd-2 flex h-[20vh] w-[90vw] gap-[8vw] max-sm:flex-wrap max-sm:border-0   max-sm:text-center max-sm:p-0 max-sm:h-[100%] max-sm:w-[100%] max-sm:justify-center max-sm:items-center">
          <div className="flex justify-center items-center border-2  h-[20vh] w-[20vw] max-sm:border-0 max-sm:h-[100%] max-sm:w-[100%]" >
            <h1 className="text-[60px]">NEWSLETTER</h1>
          </div>
          <div className="flex justify-center items-center gap-[4vw] flex-wrap">
            <div>
              <input className="border-2 p-[1rem] text-2xl" type="text" placeholder="Your Name" />
            </div>
            <div>
              <input className="border-2 p-[1rem] text-2xl" type="email" placeholder="Your Email ID" />
            </div>
            <div>
              <button className="border-0 p-[1rem]  text-2xl bg-blue-600 hover:bg-blue-400  text-white border-black rounded w-[10vw] max-sm:w-[50vw] max-sm:text-[18px]">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
