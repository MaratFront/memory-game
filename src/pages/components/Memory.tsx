import useMemoryLogic from "../../utils/useMemoryLogic";
import "../components/game.css";
import Modal from "./Modal";
import ModalData from "./ModalData";
import Header from "./Header/Header";
import MemoryCards from "./MemoryCards/MemoryCards";
import Players from "./Players";
export default function Memory() {
  const {
    isModalOpenFlag,
    handleRestart,
    cards,
    flippedCards,
    handleCardClick,
    matchedCards,
    matchedIndexes,
    currentPlayer,
    onePlayerWinModalData,
    players,
  } = useMemoryLogic();
  return (
    <>
      <Header handleRestart={handleRestart} />
      <div
        className={
          cards.length === 36 ? "memory-section__6x6" : "memory-section"
        }
      >
        <MemoryCards
          cards={cards}
          flippedCards={flippedCards}
          handleCardClick={handleCardClick}
          matchedCards={matchedCards}
          matchedIndexes={matchedIndexes}
        />
      </div>
      <Players currentPlayer={currentPlayer} />
      {isModalOpenFlag && (
        <Modal>
          <ModalData
            title={players === 1 ? "You did it!" : "It’s a tie!"}
            description={
              players === 1
                ? "Game over! Here’s how you got on…"
                : "Game over! Here are the results…"
            }
            content={onePlayerWinModalData}
            handleRestart={handleRestart}
          />
        </Modal>
      )}
    </>
  );
}
