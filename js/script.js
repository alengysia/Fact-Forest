const $pTag = $('#test');
const $submit = $('#test-fact');
const $form = $('form');
const $tree = $('.tree');
const $squirrelDiv = $('.squirrel-div');
const $squirrel = $('.squirrel')

$tree.on('click', popSquirrel);

//fact generator function
function getFact(evt) {
    evt.preventDefault();

$.ajax(`https://uselessfacts.jsph.pl//random.json?language=en`).then(function(fact){

console.log(fact)
hotFact = fact;
render();

}, function(error) {
    console.log(error);
});

}

function render(){
    $pTag.text(hotFact.text);
}
//end fact generator function


function popSquirrel(){
    $squirrel.fadeTo(2000, 1);
    
    }

