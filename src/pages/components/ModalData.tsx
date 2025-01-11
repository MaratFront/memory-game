import Button from "../../UI/Button";
import { useTypedSelector } from "../../customHooks/TypedUseSelector";
interface IModalData {
  title: string;
  description: string;
  content: Map<string, string | number>;
  handleRestart: () => void;
}
export default function ModalData({
  title,
  description,
  content,
  handleRestart,
}: IModalData) {
  const flippedCardFlag = useTypedSelector(
    (state) => state.flippedCard.cardFlag
  );
  return (
    <>
      <h1 className="modal__title">{title}</h1>
      <p className="modal__description">{description}</p>
      <div className="modal__container">
        {Array.from(content.entries()).map(([key, value]) => (
          <div className="modal__item" key={key}>
            <p className="modal__item--key">{key}</p>
            <p className="modal__item--value">{value}</p>
          </div>
        ))}
        <div className="modal__buttons">
          <button
            onClickCapture={() => {
              console.log("Button clicked");
              handleRestart();
            }}
          >
            Restart
          </button>
        </div>
      </div>
    </>
  );
}
