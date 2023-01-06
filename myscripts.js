function getComputerChoice(compchoice) {
    compchoice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * compchoice.length);
    return (random, compchoice[random]);
}
getComputerChoice();
 console.log(getComputerChoice())