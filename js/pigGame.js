const nameInput = document.querySelector("input")
const nameButton = document.querySelector("#nameButton")
const playerName = document.querySelector("#playerName")

nameButton.addEventListener("click", ()=>{
    playerName.innerText = nameInput.value 
})
