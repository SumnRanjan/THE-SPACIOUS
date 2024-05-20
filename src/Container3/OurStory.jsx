import Left from "./Left";
import Right from "./Right";
export default function OurStory() {
  return (
    <>
      <div className="story max-sm:h-[60vh]" id="Portfolio" >
        <div className="line flex justify-end items-center flex-wrap gap-[8vw] max-sm:h-[100%] max-sm:w-[100%] max-sm:text-black">
          <div>
            <Left></Left>
          </div>
          <div className="text-[28px] text-black bg-white opacity-65 w-[65vw] mt-[-10px] h-[65vh] text-right flex flex-row justify-evenly items-center max-sm:hidden">
            <Right></Right>
          </div>
        </div>
      </div>
    </>
  );
}
