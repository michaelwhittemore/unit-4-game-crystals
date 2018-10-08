var wins = 0;
var losses = 0;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var target;
var score;

//intialize the random values
function reset() {
    crystal1 = Math.floor((Math.random() * 12) + 1);
    crystal2 = Math.floor((Math.random() * 12) + 1);
    crystal3 = Math.floor((Math.random() * 12) + 1);
    crystal4 = Math.floor((Math.random() * 12) + 1);
    target = Math.floor((Math.random() * 101) + 19);
    score = 0;
    $('#target').text(target);
    $('#score').text(score);
    $('#wins').text(wins);
    $('#losses').text(losses);
    
}
reset();
$("#gameresult").text('');

$("#crystal-1").on('click', function () {
    onClick(1);
})
$("#crystal-2").on('click', function () {
    onClick(2);
})
$("#crystal-3").on('click', function () {
    onClick(3);
})
$("#crystal-4").on('click', function () {
    onClick(4);
})
//runs when we click a button and updates all fields
function onClick(crystalNum) {
    //incremnets by crystal value
    if (crystalNum === 1) {
        score += crystal1;
    }
    else if (crystalNum === 2) {
        score += crystal2;
    }
    else if (crystalNum === 3) {
        score += crystal3;
    }
    else if (crystalNum === 4) {
        score += crystal4;
    }
    //updates all text fields
    $('#target').text(target);
    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#score').text(score);
    // checks if we won or lost
    if (target===score){
        wins++;
        reset();
        $(gameresult).text("You Won!");
    }
    else if (score>target){
        losses++
        reset();
        $(gameresult).text("You Lost!");
    }
}