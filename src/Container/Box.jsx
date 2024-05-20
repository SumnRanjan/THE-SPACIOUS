import search from "../Container/image_3.png";
import twit from "../Container/te.png";
import fb from "../Container/fb.png";
import ig from "../Container/ig.png";
import yt from "../Container/yt.png";

export default function Box() {
  return (
    <div className="flex flex-wrap justify-center items-center mt-10 h-[40vh] gap-[24vw] max-sm:h-[60vh] max-sm:w-[100%]" id="Home">
      <div className="text-star mt-[-12em] max-sm:text-center max-sm:mt-[-2rem] ">
        <h1 className="text-gray-500 text-[48px] font-bold max-sm:text-[40px]">
          THE <span className="text-blue-800">SPACIOUS</span>
        </h1>
        <p className="text-gray-500 text-[20px] max-sm:mt-10">
          ONE OF THE BEST AND CLEANIEST <br />
          WORDPRESS THEME FOR AGENCIES AND <br />
          ONLINE PORTFOLIOS
        </p>  
      </div>

      <div className="flex justify-center flex-col flex-wrap items-center mt-[-18vh] max-sm:mb-[8vh]">
        <div className="border-2 border-blue-700">
          <form className="flex justify-center items-center">
            <input
              className="example w-[24vw] h-[6vh] max-sm:w-[40vw]"
              type="text"
              placeholder=" Search for products"
              name="search"
            />
            <span className="w-10">
              {" "}
              <img src={search} alt="" height="25" width="25" />
            </span>
          </form>
        </div>

        <div className="flex mt-10 gap-5 ml-[6vw]">
          <h1 className="text-gray-500 text-[17px] italic">
            Follow us on Social Media
          </h1>
          <div className="flex gap-2">
            <span className="h-8 w-8">
              <img src={twit} alt="" height="25" width="25" />
            </span>
            <span className="h-8 w-8">
              <img src={fb} alt="" height="25" width="25" />
            </span>
            <span className="h-8 w-8">
              <img src={ig} alt="" height="25" width="25" />
            </span>
            <span className="h-8 w-8">
              <img src={yt} alt="" height="25" width="25" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
