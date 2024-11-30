import IconStateDown from "@/assets/icon/icon-state_down.svg";
import IconStateNone from "@/assets/icon/icon-state_none.svg";
import IconStateUp from "@/assets/icon/icon-state_up.svg";

type TProps = {
  able: boolean;
  filterType: "up" | "down" | "none";
  onClick: () => void;
};

const FilterState = ({ able, filterType = "none", onClick }: TProps) => {
  const renderState = () => {
    if (!able) return <IconStateNone className="w-4 h-4" />;
    if (filterType === "up") return <IconStateUp className="w-4 h-4" />;
    if (filterType === "down") return <IconStateDown className="w-4 h-4" />;
    return <IconStateNone className="w-4 h-4" />;
  };

  return (
    <div className={`cursor-pointer`} onClick={onClick}>
      {renderState()}
    </div>
  );
};

export default FilterState;
