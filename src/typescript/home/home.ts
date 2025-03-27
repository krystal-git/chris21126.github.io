import { triggerOnCombination } from "./home-cli"
import "./wallpaper-animation"

// HTML Elements
var steamSocial = document.querySelector(".steam") as HTMLButtonElement
var discordSocial = document.querySelector(".discord") as HTMLButtonElement
var githubSocial = document.querySelector(".github") as HTMLButtonElement

// Functions
function openSteamInNewTab() { window.open('https://steamcommunity.com/profiles/76561199495386999/', '_blank')?.focus() }
function openGithubInNewTab() { window.open('https://github.com/chris21126', '_blank')?.focus() }
function copyDiscordToClipboard() {
    navigator.clipboard.writeText("whoschris").then((discordHandle) => { 
        console.log("Copied to clipboard")
     }).catch(() => console.log("Error in copying to clipboard."))
    
        navigator.clipboard.readText()
            .then((clipText) => clipText)
 }

// Event listeners
window.addEventListener('keypress', triggerOnCombination)
steamSocial.addEventListener("click", openSteamInNewTab)
discordSocial.addEventListener("click", copyDiscordToClipboard)
githubSocial.addEventListener("click", openGithubInNewTab)
