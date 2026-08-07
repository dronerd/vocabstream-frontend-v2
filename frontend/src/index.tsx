import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const NEW_SITE = "https://projectfluence.vercel.app";

function App() {
  const [secondsRemaining, setSecondsRemaining] = React.useState(20);

  React.useEffect(() => {
    const countdown = window.setInterval(() => {
      setSecondsRemaining((seconds) => Math.max(0, seconds - 1));
    }, 1000);
    const redirect = window.setTimeout(() => window.location.replace(NEW_SITE), 20000);

    return () => {
      window.clearInterval(countdown);
      window.clearTimeout(redirect);
    };
  }, []);

  return (
    <main>
      <section className="card" aria-labelledby="archive-title">
        <div className="mark" aria-hidden="true">V</div>
        <p className="eyebrow">VocabStream</p>
        <h1 id="archive-title">新しいサイトへ移転しました</h1>
        <p className="lead">
          VocabStreamはアーカイブされ、ProjectFluenceへ移転しました。
          <span className="countdown" aria-live="polite">
            あと{secondsRemaining}秒で新しいサイトへ自動的に移動します。
          </span>
        </p>
        <div className="divider" aria-hidden="true" />
        <h2>We&apos;ve moved to a new home</h2>
        <p>
          VocabStream has been archived and moved to ProjectFluence.
          <span className="countdown" aria-live="polite">
            Redirecting to the new website in {secondsRemaining} seconds.
          </span>
        </p>
        <a className="button" href={NEW_SITE}>
          ProjectFluenceへ移動 / Visit ProjectFluence
          <span aria-hidden="true">→</span>
        </a>
        <p className="url">projectfluence.vercel.app</p>
      </section>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
