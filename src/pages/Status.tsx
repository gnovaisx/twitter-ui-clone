import "./Status.css";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { FormEvent, KeyboardEvent, useState } from "react";
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  // Estado
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Olha, faz sentido!",
    "Parabéns pelo progresso",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();
    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      //submit
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, qui possimus voluptas odio nam repellendus dolor quis eveniet doloremque!" />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/gnovaisx.png" alt="Guilherme Novais" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          ></textarea>
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      <Separator />

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
