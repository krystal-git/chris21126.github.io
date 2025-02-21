// HTML Elements
var terminalInput = document.getElementById("cli-input") as HTMLInputElement;
var commandHistory = document.getElementById("command-history") as HTMLOListElement

// Variables

// var commandHistoryList: string[] = []

// Functions



// const inputDynamicSizeModifier = () => {
//     terminalInput.style.width = terminalInput.value.length + "ch"
// }

// const saveterminalInputHistory = (e: KeyboardEvent) => {
//     if (e.code == 'Enter') {
        
//         console.log("before push: ", commandHistoryList);
        
//         commandHistoryList.push(terminalInput.value)
//         commandHistory.innerHTML = ''
//         commandHistoryList.forEach(function(value) {
//             commandHistory.textContent = `${value} \n` 
//             commandHistory.appendChild(document.createElement("li"))
//         })

//         console.log("after push: ", commandHistoryList);

//         terminalInput.value = ""
//         terminalInput.style.width = 1 + "ch"
//     }
// }


terminalInput.focus()
terminalInput.addEventListener('input', inputDynamicSizeModifier)
terminalInput.addEventListener('keydown', saveterminalInputHistory)
