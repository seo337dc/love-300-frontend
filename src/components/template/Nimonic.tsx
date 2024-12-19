import { styled } from "styled-components";
import { Colors } from "@/common/constant";
import useNimonicStore from "@/store/nimonicStore";

const Nimonic = () => {
  const { nimonic, setNimonic } = useNimonicStore();

  return (
    <section className="grid grid-cols-3 gap-4 p-4">
      {nimonic.map((value, index) => (
        <Card
          key={index}
          value={value}
          onChange={(e) => setNimonic(index, e.target.value)}
        />
      ))}
    </section>
  );
};

export default Nimonic;

const Card = styled.input`
  width: 90px;
  height: 49px;
  top: 222px;
  left: 32px;
  padding: 12px;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid ${Colors.NeutralE};
  opacity: 0px;
`;
