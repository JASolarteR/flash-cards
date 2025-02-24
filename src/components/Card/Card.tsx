import { FlascardType } from "../../constants/flashcards";
import { CardFooter } from "./CardFooter";
import "./card-style.css";

type CardProps = {
  flashcardData: FlascardType;
  showAnswer: boolean;
  toggleShowAnswer: () => void;
  updateCardIndex: (type: "next" | "previous") => void;
};

export const Card = ({
  flashcardData,
  showAnswer,
  toggleShowAnswer,
  updateCardIndex,
}: CardProps) => {
  return (
    <article id={flashcardData.id} className="card">
      <section className="card-content">
        {!showAnswer ? (
          <h3 className="card-content__text">{flashcardData.question}</h3>
        ) : (
          <p className="card-content__text">{flashcardData.answer}</p>
        )}
      </section>

      <CardFooter
        answerState={showAnswer}
        toggleAnswer={toggleShowAnswer}
        btnAction={updateCardIndex}
      />
    </article>
  );
};
