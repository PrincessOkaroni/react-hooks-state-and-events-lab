import React from "react";

function App() {
const [isDarkMode, setIsDarkMode] = React.useState(false);

// use isDarkMode to determine the app class for dark/light mode
const appClass = isDarkMode ? "App dark" : "App light";

function handleDarkModeClick() {
  setIsDarkMode((prevMode) => !prevMode);
}

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
    </div>
  );
}

export default App;
