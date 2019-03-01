function poof()
{
    var highScore = 0;
    var idx = 0;
    while(idx < 1000000000000)
    {
         var gameScore = game();
         if(gameScore > highScore)
         {
             highScore=gameScore
         }
        idx++;
    }

     var highscrCtrl = document.getElementById("HIGHSCORE")
     highscrCtrl.innerText = highScore
}


function game()
{
    var total= 0;
    var roll = rollIt()
    while (roll != 1)
    {
        total += roll;

        roll = rollIt();
    }
    return total;

}
function rollIt()
{
    return Math.floor(Math.random()*6) +1;
}