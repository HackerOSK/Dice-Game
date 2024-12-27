let result = document.getElementById('result');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');




function rollDice()
{
    let player1 = Math.floor(Math.random() * 6) + 1;
    let player2 = Math.floor(Math.random() * 6) + 1;

    
    img1.src = `images/dice${player1}.png`;
    img2.src = `images/dice${player2}.png`;

    console.log(img1.src);

    console.log(player1);
    console.log(player2);
    if(player1 > player2)
    {
        result.innerHTML = 'Player 1 wins';
    }else if(player1 < player2)
    {
        result.innerHTML = 'Player 2 wins';
    }else
    {
        result.innerHTML = 'Draw 🤝';
    }
}

