function randomDice(): number
{
    return Math.floor(Math.random() * 6) + 1;
}

// Typing the 'getElementById response using the parenthesis
(<HTMLImageElement>document.getElementById('img1')).src = `images/dice${randomDice()}.png`;
(<HTMLImageElement>document.getElementById('img2')).src = `images/dice${randomDice()}.png`;