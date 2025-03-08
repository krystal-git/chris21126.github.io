var terminalWrapper: HTMLDivElement;
var terminalInput: HTMLInputElement;
var terminalOutput: HTMLDivElement;

// LIST OF COMMANDS
let helpCommand: Object = {
  socials: "see where you can contact and/or stalk the author.",
  petthecat: "minigame, compete against other cat petters.",
  thoughts: "guestbook, express yourself and share your thoughts with others.",
  settings:
    "tinker with in-built terminal settings to customize your command line experience.",
  clear: "clears contents of terminal",
  help: "shows all available commands to use.",
  exit: "shuts down terminal, returns to home page.",
};

// OTHER VARIABLES
var isCMDDown = true;

// EXECUTEABLE COMMANDS (functions)
function inputDynamicSizeModifier() {
  terminalInput.style.width = terminalInput.value.length + "ch";
}

function terminalRedirectionMessage(message: string) {
  var howMany: number = 1;
  setInterval(() => {
    howMany = (howMany + 1) % 4;
    terminalOutput.textContent =
      `Redirecting to ${message}` + ".".repeat(howMany);
  }, 1000);
}
function runCommand(
  event: KeyboardEvent,
  cliInput: string = terminalInput.value
) {
  if (event.code == "Enter") {
    switch (cliInput) {
      case "socials":
        terminalOutput.textContent = "Coming soon...";
        break;
      case "petthecat":
        terminalRedirectionMessage("petthecat");
        window.open("./src/petthecat.html", "_blank");
        break;
      case "thoughts":
        terminalRedirectionMessage("thoughts book");
        window.open("./src/thoughtspage.html", "_blank");
        break;
      case "settings":
        terminalOutput.textContent = "Coming soon...";
        break;
      case "help":
        terminalOutput.innerText = "";
        var helpCommandLine = document.createElement("ol") as HTMLOListElement;

        terminalOutput.appendChild(helpCommandLine);

        for (const [key, value] of Object.entries(helpCommand)) {
          var helpCommandLinePair = document.createElement(
            "li"
          ) as HTMLLIElement;
          helpCommandLinePair.innerText += `${key}: ${value}`;
          helpCommandLinePair.style.listStyleType = "none";
          helpCommandLine.appendChild(helpCommandLinePair);
        }
        break;
      case "clear":
        terminalOutput.innerText = "";
        break;
      case "exit":
        document.body.removeChild(terminalWrapper.parentNode!);
        isCMDDown = true;
        console.log("Command line removed.");
        break;
      default:
        terminalOutput.innerText = `Command "${cliInput}" does not exist.`;
        break;
    }
    terminalInput.value = "";
    terminalInput.style.width = 1 + "ch";
  }
}

export function triggerOnCombination(event: KeyboardEvent) {
  if (isCMDDown && event.shiftKey && event.key == "T") {
    console.log("Combination pressed: Shift +", event.key);

    var createTerminalSectionElement = document.createElement(
      "section"
    ) as HTMLElement;
    createTerminalSectionElement.setAttribute("class", "terminal");
    createTerminalSectionElement.innerHTML = `<div id="terminalWrapper">
      <code id="cmd">
        <p id="help-line">Type "help" for a list of supported commands.</p>
        <p id="cli-input-paragraph">
          <input type="text" id="cli-input">
        </p>
        <div id="cli-output"></div>
      </code>
    </div>`;

    document.body.insertBefore(
      createTerminalSectionElement,
      document.body.children[1]
    );
    terminalWrapper = document.getElementById(
      "terminalWrapper"
    ) as HTMLDivElement;
    terminalInput = document.getElementById("cli-input") as HTMLInputElement;
    terminalOutput = document.getElementById("cli-output") as HTMLDivElement;

    terminalInput.addEventListener("input", inputDynamicSizeModifier);
    terminalInput.addEventListener("keydown", runCommand);

    isCMDDown = false;
  }
}
