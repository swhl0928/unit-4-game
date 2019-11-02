$("#crystalCollector").html("<h1>Crystals Collector!</h1>");
$("#intro").append("<h3> You will be given a random number at the start of the game. </h3>");
$("#intro").append("<h3> There are four crystals below. By Clicking on a crystal you will add a specific amount of points to your total score. </h3>");
$("#intro").append("<h3> You win the game by matching your total score to random number, you lose the game if your total score goes above the random number. </h3>");
$("#intro").append("<h3> The value of each crystal is hidden from you until you click on it. </h3>");
$("#intro").append("<h3> Each time when the game starts, the game will change the value of each crystal. </h3>");


var wins = 0
var losses = 0
var yellowcrystal
var redcrystal
var purplecrystal
var bluecrystal
var targetNumber
var totalscore = 0

function reset() {
    yellowcrystal = Math.floor(Math.random() * 12) + 1;
    redcrystal = Math.floor(Math.random() * 12) + 1;
    bluecrystal = Math.floor(Math.random() * 12) + 1;
    purplecrystal = Math.floor(Math.random() * 12) + 1;
    $("#yellowcrystal").attr("data-crystal", yellowcrystal);
    $("#redcrystal").attr("data-crystal", redcrystal);
    $("#bluecrystal").attr("data-crystal", bluecrystal);
    $("#purplecrystal").attr("data-crystal", purplecrystal);

    targetNumber = Math.floor(Math.random() * 100) + 19;
    console.log(targetNumber);
    $("#targetNumber").text(targetNumber)


    $("#wins").text("wins = 0");
    $("#losses").text("losses = 0");

    if (parseInt(totalscore) === targetNumber) {
        wins++;
        
    else if (parseInt(totalscore) > targetNumber) {
            losses++;
        }
    }

    reset()

    $("#yellowcrystal").on("click", function () {
        var crystalValue = ($(this).attr("data-crystal"));
        console.log(crystalValue)
        totalscore = totalscore + parseInt(crystalValue)
        console.log(totalscore)
        $("#totalscore").text(totalscore);


    })

    $("#redcrystal").on("click", function () {
        var crystalValue = ($(this).attr("data-crystal"));
        console.log(crystalValue)
        totalscore = totalscore + parseInt(crystalValue)
        console.log(totalscore)
        $("#totalscore").text(totalscore);
    })

    $("#bluecrystal").on("click", function () {
        var crystalValue = ($(this).attr("data-crystal"));
        console.log(crystalValue)
        totalscore = totalscore + parseInt(crystalValue)
        console.log(totalscore)
        $("#totalscore").text(totalscore);
    })

    $("#purplecrystal").on("click", function () {
        var crystalValue = ($(this).attr("data-crystal"));
        console.log(crystalValue)
        totalscore = totalscore + parseInt(crystalValue)
        console.log(totalscore)
        $("#totalscore").text(totalscore);
    })
