import './command-list'
import { helpCommand } from './command-list';

// HTML Elements
var terminalWrapper = document.getElementById("terminalWrapper") as HTMLDivElement;
var terminalInput = document.getElementById("cli-input") as HTMLInputElement;
var terminalOutput = document.getElementById("cli-output") as HTMLDivElement;

function inputDynamicSizeModifier() {
    terminalInput.style.width = terminalInput.value.length + "ch"
}
function runCommand(event: KeyboardEvent, cliInput: string = terminalInput.value){
    if (event.code == "Enter") {
        switch(cliInput){
            case "help":
                terminalOutput.innerText = ""
                var helpCommandLine = document.createElement("ol") as HTMLOListElement
                
                terminalOutput.appendChild(helpCommandLine)

                for (const [key, value] of Object.entries(helpCommand)) {
                    var helpCommandLinePair = document.createElement("li") as HTMLLIElement
                    helpCommandLinePair.innerText += `${key}: ${value}`
                    helpCommandLine.appendChild(helpCommandLinePair)
                }
            break;
            case "clear":
                terminalOutput.innerText = ""
            break;
            case "exit":
                console.log(terminalWrapper)
                document.body.removeChild(terminalWrapper.parentNode!)
                break;
            default:
                terminalOutput.innerText = `Command "${cliInput}" does not exist.`
                break;
        }
        terminalInput.value = "" 
        terminalInput.style.width = 1 + "ch" 
    }
    
}

terminalInput.focus()
terminalInput.addEventListener('input', inputDynamicSizeModifier)
terminalInput.addEventListener('keydown', runCommand)
