let switchContainer = document.querySelector("#switchContainer");
let switchButtons = document.querySelectorAll(".switch__button");
let lightMode = document.querySelector("#lightMode");
let darkMode = document.querySelector("#darkMode");
let root = document.documentElement;

function changeMode(e) {
  e.cancelBubble = true;
  let target = e.currentTarget;
  let targetId = target.id;
  switchClasses(targetId);
}

function switchClasses(mode) {
  let oldMode = mode === "lightMode" ? "dark" : "light";
  let newMode = mode === "lightMode" ? "light" : "dark";
  let newModeButton = mode === "lightMode" ? lightMode : darkMode;
  let oldModeButton = mode === "lightMode" ? darkMode : lightMode;
  let newModeClass = `switch--${newMode}`;
  let oldModeClass = `switch--${oldMode}`;
  let NewModeColor = mode === "lightMode" ? "#fff" : "#1a1a1a";
  let oldModeColor = mode === "lightMode" ? "#1a1a1a" : "#fff";
  let newFadedMode = mode === "lightMode" ? "#eeeeee57" : "#1d1d1d";

  switchContainer.classList.add(newModeClass);
  switchContainer.classList.remove(oldModeClass);
  newModeButton.classList.add(`switch__button--${newMode}--active`);

  setTimeout(() => {
    newModeButton.classList.add(`switch__button--${newMode}--hidden`);
    newModeButton.classList.add(`switch__button--${newMode}`);
    newModeButton.classList.remove(`switch__button--${newMode}--active`);

    oldModeButton.classList.remove(`switch__button--${oldMode}--hidden`);
  }, 510);
  root.style.setProperty("--color", oldModeColor);
  root.style.setProperty("--background--color", NewModeColor);
  root.style.setProperty("--faded", newFadedMode);
}

switchButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    changeMode(e);
  });
});
