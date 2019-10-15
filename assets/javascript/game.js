//Function to be executed when te page loads
$(document).ready(function(){
    var scoreSoFar = 200
    var pointsLost = 0
    var chipsValue, coffeeValue, cigarValue, beerValue
function foodValue(){
    chipsValue = chips(),
    coffeeValue = coffee();
    cigarValue= cigar();
    beerValue= beer();
        console.log(chipsValue);
        console.log(coffeeValue);
        console.log(cigarValue);
        console.log(beerValue);
}
foodValue();
    function chips(){
        return Math.floor(Math.random()*41)+10
    }
    function coffee(){
        return Math.floor(Math.random()*31)+10
    }
    function cigar(){
        return Math.floor(Math.random()*21)+10
    }
    function beer(){
        return Math.floor(Math.random()*11)+10

    }

$("#chips").attr('data-value', chipsValue);
$("#coffee").attr('data-value', coffeeValue);
$("#cigar").attr('data-value', cigarValue);
$("#beer").attr('data-value', beerValue);

$(".food").on("click", function(event){
        pointsLost += parseInt($(this).attr('data-value'));
        console.log(scoreSoFar);
       scoreSoFar -= parseInt($(this).attr('data-value'));
    $("#lostPoints").text(pointsLost);
    $("#scoreSoFar").text(scoreSoFar);
    if (pointsLost > 200){
        alert("You are out of points")
    }
});

});