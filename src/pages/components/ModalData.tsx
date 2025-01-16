import ModalHeader from "./ModalHeader";
import ModalContainer from "./ModalContainer";
import ModalButtons from "./ModalButtons";
export default function ModalData({
  title,
  description,
  content,
  handleRestart,
}: IModalData) {
  return (
    <>
      <ModalHeader title={title} description={description} />
      <ModalContainer content={content} />
      <ModalButtons handleRestart={handleRestart} />
    </>
  );
}
