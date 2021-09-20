const $pTag = $('#test');
const $submit = $('#test-fact');
const $form = $('form');

$form.on('submit', getFact)

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