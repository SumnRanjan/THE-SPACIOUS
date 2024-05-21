import Left from "./Left";
import Cards from "./Cards";
export default function Main({ img }) {
  return (
    <>
      <div className="w-[100vw] h-[90vh] p-[4vw] flex justify-center items-center flex-wrap gap-[5vw] max-sm:w-[100%] max-sm:h-[100%]"  id="Service">
        <div className="leading-12" >
          <Left />
        </div>
        <div className="text-center">
          <Cards></Cards>
        </div>
      </div>
    </>
  );
}
