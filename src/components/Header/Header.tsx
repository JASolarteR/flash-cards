import { FLASHCARDS } from "../../constants/flashcards";
import "./header-style.css";

type HeaderProps = {
    cardIndex: number
}

export const Header = ({cardIndex} : HeaderProps) => {

  const progressPercetage = ((cardIndex + 1) / FLASHCARDS.length) * 100;

  return (
    <header className="header">
      <h1 className="header__title">Flash Cards JavaScript</h1>
      <section className="progress-section">
        <div className="progress-section__wrapper">
          <span
            className="progress-section__wrapper__bar"
            role="progressbar"
            style={{
              width: `${progressPercetage}%`,
            }}
          ></span>
          <p>{progressPercetage}%</p>
        </div>
      </section>
        <p className="header__card-counter">
          {cardIndex + 1} of {FLASHCARDS.length}
        </p>
    </header>
  );
};
