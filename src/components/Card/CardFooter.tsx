import "./card-style.css";

type CardFooterProps = {
  toggleAnswer: () => void;
  answerState: boolean;
  btnAction: (type: "next" | "previous") => void;
};

export const CardFooter = ({
  toggleAnswer,
  answerState,
  btnAction,
}: CardFooterProps) => {
  return (
    <footer className="card-footer">
      <button
        className="card-footer__btn"
        onClick={() => btnAction("previous")}
      >
        Previous
      </button>
      <button className="card-footer__btn" onClick={toggleAnswer}>
        {!answerState ? "Show answer" : "Hide answer"}
      </button>
      <button className="card-footer__btn" onClick={() => btnAction("next")}>
        Next
      </button>
    </footer>
  );
};
