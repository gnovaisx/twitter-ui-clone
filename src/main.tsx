import React from "react";
import ReactDOM from "react-dom/client";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Tweet } from "./components/Tweet";
import { Separator } from "./components/Separator";

import "./global.css";

const tweets = ["Meu primeiro tweet", "Teste", "Deu certo tweetar!"];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Header title="Home" />
        <main className="timeline">
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img
                src="https://github.com/gnovaisx.png"
                alt="Guilherme Novais"
              />
              <textarea id="tweet" placeholder="What's happening?"></textarea>
            </label>
            <button type="submit">Tweet</button>
          </form>

          <Separator />

          <Tweet content="tweet1" />
          <Tweet content="tweet2" />
        </main>
      </div>
    </div>
  </React.StrictMode>
);
