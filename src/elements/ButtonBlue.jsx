// icons 
import { RiArrowRightUpLine } from "react-icons/ri";
const ButtonBlue = ({text}) => {
  return (
    <button className="flex items-center gap-2 bg-gradient-to-t from-blue-700 to-blue-500 h-10 px-5 rounded-lg text-white font-semibold text-base shadow-lg hover:bg-gradient-to-b duration-500 ease-in-out">
      {text}
      <RiArrowRightUpLine className="text-2xl relative top-[1px]"/>
    </button>
  );
};

export default ButtonBlue;
