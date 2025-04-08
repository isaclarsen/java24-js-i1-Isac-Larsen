const nameInput = document.querySelector("input")
const nameButton = document.querySelector("#nameButton")
const throwButton = document.querySelector("#throwDice")
const playerName = document.querySelector("#playerName")
const diceResult = document.querySelector("#diceResult")
const instructionsButton = document.querySelector("#viewInstructions")
const instructionsSection = document.querySelector("#instructions")
const infoSection = document.querySelector("#info")
const gameSection = document.querySelector(".gameSection")
const totalPointsElement = document.querySelector("#totalPoints")
const formElement = document.querySelector("form")
const roundPointsElement = document.querySelector("#roundPoints")
const lockPointsBtn = document.querySelector("#lockPoints")
const restartBtn = document.querySelector("#restart")
const roundElement = document.querySelector("#rounds")

let roundPoint = 0
let totalPoints = 0;
let rounds = 0

console.log(gameSection);


nameButton.addEventListener("click", ()=>{
    playerName.innerText = nameInput.value;
    formElement.classList = "hidden"
    
})

//Eventlistener för att slå ett slag.
throwButton.addEventListener("click", ()=>{
    instructionsButton.classList = "hidden"
    infoSection.innerText = ""
    roundElement.innerText = rounds
    if(nameInput.value === ""){
        alert("Vänligen fyll i ett namn!")
    }else{
        const randomNum = Math.ceil(Math.random() * 6)
        roundPointsElement.innerText = roundPoint;
        diceResult.innerText = randomNum;
        if(randomNum > 1){
            diceResult.style.color = "green";
            roundPoint += randomNum;
        }else{
            roundPoint = 0;
            rounds++
            diceResult.style.color = "red";
            infoSection.innerText = "Tyvärr du slog en etta!";
        }
    }
})
//Låsa in poängen
lockPointsBtn.addEventListener("click", ()=>{
    totalPoints += roundPoint
    if(totalPoints >= 100){
        infoSection.innerText = `Grattis ${nameInput.value}! Du vann spelet på ${rounds} omgångar!`;
        infoSection.style.color = "Green"
        restartBtn.classList = ""
        gameSection.classList = "hidden"
        formElement.classList = "hidden"
        instructionsButton.classList = "hidden"
    }
    rounds++
    totalPointsElement.innerText = totalPoints
    roundPoint = 0
    totalPointsElement.innerText = totalPoints
})

//Eventlistener som visar/döljer instruktioner
instructionsButton.addEventListener("click", ()=>{
    if(instructionsSection.classList.contains("hidden")){
        instructionsSection.className = ""
        instructionsButton.innerText = "Göm instruktioner"
    }else{
        instructionsSection.className = "hidden"
        instructionsButton.innerText = "Visa instruktioner"
    }
})

//Starta om knapp
restartBtn.addEventListener("click", ()=> {
    location.reload();
})