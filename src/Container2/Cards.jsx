import { items } from "../utils";
import Images from "./Images";

export default function Cards() {
  return (
    <div className="grid grid-cols-3 gap-[3vw] max-sm:grid-cols-1 max-sm:gap-4">
      {items.map((el) => {
        return (
            <div className="flex flex-col gap-4">
              <Images src={el.img}></Images>
              <h1 className="text-[20px]">{el.text}</h1>
          </div>
        );
      })}
    </div>
  );
}
