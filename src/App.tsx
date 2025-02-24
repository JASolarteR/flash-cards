import "./App.css";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { useCards } from "./hooks/useCards";

function App() {
  const {
    cardIndex,
    flashcardData,
    showAnswer,
    toggleShowAnswer,
    updateCardIndex,
  } = useCards();
  return (
    <>
      <Header cardIndex={cardIndex} />
      <Card
        flashcardData={flashcardData}
        showAnswer={showAnswer}
        toggleShowAnswer={toggleShowAnswer}
        updateCardIndex={updateCardIndex}
      />
    </>
  );
}

export default App;
