export type FlascardType = {
  id: string,
  question: string,
  answer: string
}

export const FLASHCARDS: FlascardType[] = [
  {
    id: crypto.randomUUID(),
    question: "What is the difference between `let`, `const`, and `var`?",
    answer:
      "`var` is function-scoped, while `let` and `const` are block-scoped. `const` cannot be reassigned, whereas `let` can.",
  },
  {
    id: crypto.randomUUID(),
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
  },
  {
    id: crypto.randomUUID(),
    question: "What is the purpose of the `this` keyword in JavaScript?",
    answer:
      "`this` refers to the context in which a function is executed. It can point to different objects depending on how the function is called.",
  },
  {
    id: crypto.randomUUID(),
    question: "What are JavaScript Promises?",
    answer:
      "Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.",
  },
  {
    id: crypto.randomUUID(),
    question:
      "What is the difference between synchronous and asynchronous code?",
    answer:
      "Synchronous code is executed sequentially, blocking further execution until the current operation completes. Asynchronous code allows operations to run in the background, freeing up the main thread.",
  },
  {
    id: crypto.randomUUID(),
    question:
      "What are arrow functions and how do they differ from regular functions?",
    answer:
      "Arrow functions are a shorter syntax for writing function expressions. They do not have their own `this`, which means they inherit `this` from the parent scope.",
  },
  {
    id: crypto.randomUUID(),
    question: "What is the event loop in JavaScript?",
    answer:
      "The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the browser's Web APIs and handling callbacks in a queue.",
  },
  {
    id: crypto.randomUUID(),
    question: "What is the difference between `==` and `===` in JavaScript?",
    answer:
      "`==` checks for value equality with type coercion, while `===` checks for both value and type equality without coercion.",
  },
  {
    id: crypto.randomUUID(),
    question: "What is the purpose of `JSON.stringify()` and `JSON.parse()`?",
    answer:
      "`JSON.stringify()` converts a JavaScript object into a JSON string, while `JSON.parse()` converts a JSON string back into a JavaScript object.",
  },
  {
    id: crypto.randomUUID(),
    question: "How do you create a JavaScript object?",
    answer:
      "You can create an object using object literals (e.g., `const obj = { key: 'value' };`), the `new Object()` syntax, or by using constructor functions or classes.",
  },
];
