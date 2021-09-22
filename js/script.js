
const $fakeFact = [
    "Bulls get angry when they see the color red.",
     "Goldfish only have a three-second memory.",
    "We only use 10 percent of our brains.", 
    "George Washington had wooden teeth.",
    "Women accused of witchcraft were burned at the stake during the Salem Witch Trials.",
    "You need to drink at least eight glasses of water every day.", 
    "You'll get cramps if you go swimming right after you eat.",
    "In the days of Christopher Columbus, everyone thought the world was flat.", 
    "Dogs only see in black and white.", 
    "Adding salt to water makes it boil faster.", 
    "It takes seven years for your body to digest gum.", 
    "You swallow eight spiders a year while sleeping.", 
    "The Great Wall of China is the only man-made structure visible from space.",
    "Marie Antoinette said 'let them eat cake' to spite the poor.", 
    "Napoleon Bonaparte was extremely short.", 
    "A penny dropped from the top of the Empire State Building could kill someone.", 
    "Albert Einstein failed math class.", 
    "You have to wait 24 hours before submitting a missing person's report.", 
    "Touching a toad will give you warts.", 
    "Your hair and fingernails continue to grow after you die.",
    "If you touch a baby bird with your bare hands, its mother will reject it.", 
    "Drinking alcohol raises your body temperature.", 
    "Cracking your knuckles too much will cause arthritis.",
    "Georgia produces the most peaches of any state in the U.S.", 
    "Sugar causes hyperactivity in children.", 
    "Bats are blind.", 
    "Lightning never strikes twice.",
    "Humans only have five senses.", 
    "Shaving your hair makes it grow back thicker.", 
    "Chameleons change colors to blend in with their surroundings.", 
    "The Declaration of Independence was signed on July 4th.", 
    "Bananas grow on trees.", 
    "Dogs sweat through their tongues.", 
    "It's safe to eat food that's been on the floor for five seconds or less.", 
    "All deserts are hot.", 
    "Fortune cookies originated in China.", 
    "The sun is yellow.", 
    "Cinco de Mayo is Mexico's independence day.", 
    "You should urinate on someone if they get stung by a jellyfish.",
    "President Richard Nixon was successfully impeached.",
    "Brown eggs are more nutritious than white eggs.",
    "Going outside with wet hair makes you sick.",
    "Peanuts are a type of nut.",
    "Twinkies have no expiration date.", 
    "There is one universal sign language.",
    "Sugar causes headaches.", 
    "Putting your laptop on your lap will cause infertility.", 
    "The odds are always 50-50 in a coin toss.", 
    "Every living thing dies.", 
    ]

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

$factDivS.on('click', 'p', function(){
    $(this).remove();
    $squirrel.fadeTo(1000, 0);
})

$factDivB.on('click', 'p', function(){
    $(this).remove();
    $bunny.fadeTo(1000, 0);
})