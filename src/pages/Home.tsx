import reactLogo from "../logo-react.svg";
import jestLogo from "../logo-jest.svg";
import testingLibLogo from "../logo-testing-library.svg";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const flexCenteredSx: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <header>
      <div style={{ ...flexCenteredSx, gap: 28 }}>
        <img src={reactLogo} className="App-logo" alt="logo" />
        <img src={jestLogo} className="App-logo" alt="logo" />
        <img src={testingLibLogo} className="App-logo" alt="logo" />
      </div>
      <p>
        Testing React apps with{" "}
        <a
          className="App-link"
          href="https://jestjs.io/"
          target="_blank"
          rel="noreferrer"
        >
          Jest
        </a>{" "}
        and{" "}
        <a
          className="App-link"
          href="https://testing-library.com/docs/react-testing-library/intro"
          target="_blank"
          rel="noreferrer"
        >
          React Testing Library
        </a>
      </p>
      <h3>
        Check out 👉:{" "}
        <Link to="/counter" className="App-link">
          Counter
        </Link>
      </h3>
      <small style={{ background: "rgb(0,0,0,0.2)", padding: 8, fontSize: 16 }}>
        Note 💡: We've also written Tests for small components which are not
        mounted in the UI.
        <br /> Just browse through the <code>/components</code> folder to see
        those tests.
      </small>
    </header>
  );
};
