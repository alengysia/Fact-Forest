const $submit = $('#test-fact');
const $form = $('form');
const $tree = $('.tree');
const $factDiv = $('.fact-div1');
const $squirrel = $('.squirrel')

$tree.on('click', popSquirrel);

//fact generator function
function getFact(div) {


    $.ajax(`https://uselessfacts.jsph.pl//random.json?language=en`).then(function (fact) {

        console.log(fact)
        hotFact = fact;
        render(div);

    }, function (error) {
        console.log(error);
    });

}

function render(div) {
    div.append(`<p>${hotFact.text}</p>`);
    //end fact generator function


};

function popSquirrel() {
    $squirrel.fadeTo(2000, 1);
    setTimeout(function () {
        getFact($factDiv)
    }, 2000);
};