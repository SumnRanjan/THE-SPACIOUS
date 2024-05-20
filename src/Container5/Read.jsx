import Left from "./left";
import Cards from "../Container5/Cards";
export default function Read() {
  return (
    <>
      <div className="read brightness-100" id="Read">
        <div className="read1 p-[10rem] flex gap-[10vw] max-sm:h-[100%] max-sm:w-[100%] max-sm:flex-wrap max-sm:p-10 max-sm:text-center">
          <div>
            <Left />
          </div>
          <div>
            <Cards/>
          </div>
        </div>
      </div>
    </>
  );
}
