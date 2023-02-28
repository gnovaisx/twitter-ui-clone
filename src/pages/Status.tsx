import "./Status.css";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

const answers = [
  "Concordo...",
  "Olha, faz sentido!",
  "Parabéns pelo progresso",
];

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, qui possimus voluptas odio nam repellendus dolor quis eveniet doloremque!" />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/gnovaisx.png" alt="Guilherme Novais" />
          <textarea id="tweet" placeholder="Tweet your answer"></textarea>
        </label>
        <button type="submit">Answer</button>
      </form>

      <Separator />

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
