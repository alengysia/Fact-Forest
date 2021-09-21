const $submit = $('#test-fact');
const $form = $('form');
const $tree = $('.tree');
const $rock = $('.rock')
const $factDivS = $('.fact-div1');
const $squirrel = $('.squirrel');
const $factDivB = $('.fact-div2');
const $bunny = $('.bunny');

$tree.on('click', popSquirrel);
$rock.on('click', popBunny);

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
        getFact($factDivS)
    }, 2000);
};
function popBunny() {
    $bunny.fadeTo(2000, 1);
    setTimeout(function () {
        getFact($factDivB)
    }, 2000);
};