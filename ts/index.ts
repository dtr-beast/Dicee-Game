function randomDice(): number {
    return Math.floor(Math.random() * 6) + 1;
}

let img1 = randomDice();
let img2 = randomDice();
// Typing the 'getElementById response using the parenthesis
(<HTMLImageElement>document.getElementById('img1')).src = `images/dice${img1}.png`;
(<HTMLImageElement>document.getElementById('img2')).src = `images/dice${img2}.png`;

if (img1 > img2) {
    document.getElementById('heading').innerHTML = '⛳ Player 1 Wins';
} else if (img1 < img2) {
    document.getElementById('heading').innerHTML = 'Player 2 Wins ⛳';
} else {
    document.getElementById('heading').innerHTML = 'Draw !';
}