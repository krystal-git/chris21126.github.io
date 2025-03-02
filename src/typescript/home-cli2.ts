// HTML Elements
var terminalInput = document.getElementById("cli-input") as HTMLInputElement;
var terminalOutput = document.getElementById("cli-output") as HTMLDivElement

// Variables

var commandHistoryList: string[] = [] // Model

// Functions



const inputDynamicSizeModifier = () => {
    terminalInput.style.width = terminalInput.value.length + "ch"
}

// const saveterminalInputHistory = (e: KeyboardEvent) => {
//     if (e.code == 'Enter') {
        
//         console.log("before push: ", commandHistoryList);
//         var textContent = ''
//         commandHistoryList.push(terminalInput.value)
//             commandHistoryList.forEach(function(value) {
//             textContent += `<li>${value}</li>` 
//         })
//         commandHistory.innerHTML = textContent as string
//         console.log("after push: ", commandHistoryList);

//         terminalInput.value = ""
//         terminalInput.style.width = 1 + "ch"
//     }
// }

const saveterminalInputHistory2 = (e: KeyboardEvent) => {
    if (e.code == 'Enter') {
        
        console.log("before push: ", commandHistoryList);
        var textContent = ''
        commandHistoryList.push(terminalInput.value)
        
        commandHistoryList.forEach(function(value, index) {
             
            if (index < commandHistory.children.length) {
                var liElement = commandHistory.children[index] as HTMLLIElement
                liElement.innerText = value
            } else {
                var liElement = document.createElement('li') as HTMLLIElement
                liElement.innerText = value
                commandHistory.insertAdjacentElement("beforeend", liElement)
            }
        })
          console.log("after push: ", commandHistoryList);

        terminalInput.value = ""
        terminalInput.style.width = 1 + "ch"
    }
}


terminalInput.focus()
terminalInput.addEventListener('input', inputDynamicSizeModifier)
terminalInput.addEventListener('keydown', saveterminalInputHistory2)
