import Wallet from "@/components/template/Wallet";
import Modal from "./Modal";

type TProps = {
  data: string;
  onClose: () => void;
};
const ModalWallet = ({ data, onClose }: TProps) => {
  return (
    <Modal width="350px" height="80vh" onClose={onClose}>
      <Wallet data={data} />
    </Modal>
  );
};

export default ModalWallet;
