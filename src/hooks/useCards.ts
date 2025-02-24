import { useState } from "react";
import { FLASHCARDS } from "../constants/flashcards";

export const useCards = () => {
    const [cardIndex, setCardIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
  
    const isFirstCard = FLASHCARDS.length > cardIndex + 1
    const isLastCard =  FLASHCARDS.length < cardIndex
  
    const updateCardIndex = (type: "next" | "previous") => {
      if (type === "next" && isFirstCard) {
        setCardIndex((prevState) => ++prevState);
        setShowAnswer(false)
      } else if (type === "previous" && isLastCard) {
        setCardIndex((prevState) => --prevState);
        setShowAnswer(false)
      } else {
        setCardIndex(0);
      }
    };
  
    const toggleShowAnswer = () => {
      setShowAnswer((prevState) => !prevState);
    };
  
    const flashcardData = FLASHCARDS[cardIndex]

    return{
        cardIndex,
        showAnswer,
        updateCardIndex,
        toggleShowAnswer,
        flashcardData,
        isLastCard
    }
}