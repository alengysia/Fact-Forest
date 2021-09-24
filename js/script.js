//fake fact array
const $fakeFact = [{
        text: "Bulls get angry when they see the color red."
    },
    {
        text: "Goldfish only have a three-second memory."
    },
    {
        text: "We only use 10 percent of our brains."
    },
    {
        text: "George Washington had wooden teeth."
    },
    {
        text: "Women accused of witchcraft were burned at the stake during the Salem Witch Trials."
    },
    {
        text: "You need to drink at least eight glasses of water every day."
    },
    {
        text: "You'll get cramps if you go swimming right after you eat."
    },
    {
        text: "In the days of Christopher Columbus, everyone thought the world was flat."
    },
    {
        text: "Dogs only see in black and white."
    },
    {
        text: "Adding salt to water makes it boil faster."
    },
    {
        text: "It takes seven years for your body to digest gum."
    },
    {
        text: "You swallow eight spiders a year while sleeping."
    },
    {
        text: "The Great Wall of China is the only man-made structure visible from space."
    },
    {
        text: "Marie Antoinette said 'let them eat cake' to spite the poor."
    },
    {
        text: "Napoleon Bonaparte was extremely short."
    },
    {
        text: "A penny dropped from the top of the Empire State Building could kill someone."
    },
    {
        text: "Albert Einstein failed math class."
    },
    {
        text: "You have to wait 24 hours before submitting a missing person's report."
    },
    {
        text: "Touching a toad will give you warts."
    },
    {
        text: "Your hair and fingernails continue to grow after you die."
    },
    {
        text: "If you touch a baby bird with your bare hands, its mother will reject it."
    },
    {
        text: "Drinking alcohol raises your body temperature."
    },
    {
        text: "Cracking your knuckles too much will cause arthritis."
    },
    {
        text: "Georgia produces the most peaches of any state in the U.S."
    },
    {
        text: "Sugar causes hyperactivity in children."
    },
    {
        text: "Bats are blind."
    },
    {
        text: "Lightning never strikes twice."
    },
    {
        text: "Humans only have five senses."
    },
    {
        text: "Shaving your hair makes it grow back thicker."
    },
    {
        text: "Chameleons change colors to blend in with their surroundings."
    },
    {
        text: "The Declaration of Independence was signed on July 4th."
    },
    {
        text: "Bananas grow on trees."
    },
    {
        text: "Dogs sweat through their tongues."
    },
    {
        text: "It's safe to eat food that's been on the floor for five seconds or less."
    },
    {
        text: "All deserts are hot."
    },
    {
        text: "Fortune cookies originated in China."
    },
    {
        text: "The sun is yellow."
    },
    {
        text: "Cinco de Mayo is Mexico's independence day."
    },
    {
        text: "You should urinate on someone if they get stung by a jellyfish."
    },
    {
        text: "President Richard Nixon was successfully impeached."
    },
    {
        text: "Brown eggs are more nutritious than white eggs."
    },
    {
        text: "Going outside with wet hair makes you sick."
    },
    {
        text: "Peanuts are a type of nut."
    },
    {
        text: "Twinkies have no expiration date."
    },
    {
        text: "There is one universal sign language."
    },
    {
        text: "Sugar causes headaches."
    },
    {
        text: "Putting your laptop on your lap will cause infertility."
    },
    {
        text: "The odds are always 50-50 in a coin toss."
    },
    {
        text: "Every living thing dies."
    },
];


//global variables

const $tree = $('.tree');
const $rock = $('.rock')
const $factDivS = $('.fact-div1');
const $squirrel = $('.squirrel');
const $factDivB = $('.fact-div2');
const $bunny = $('.bunny');
const $keepOut = $('.ko-sign');
const $troll = $('.troll');
const $fakeFactDiv = $('.fake-fact');

//onclick events

$tree.on('click', popSquirrel);
$rock.on('click', popBunny);
$keepOut.on('click', popTroll);




//fact generator function

function getFact(div) {


    $.ajax(`https://uselessfacts.jsph.pl//random.json?language=en`).then(function (fact) {

        console.log(fact)
        hotFact = fact;
        render(div);

    }, function (error) {
        console.log(error);
    });

};
//troll random bad fact generator from fake fact array
function getBadFact(div) {
    const getRandNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const randomIndex = getRandNum(0, 49);
    bad = $fakeFact[randomIndex].text
    renderBad(div);
};

//render fact functions

function renderBad(div) {
    div.append(`<p>${bad}</p>`);
};

function render(div) {
    div.append(`<p>${hotFact.text}</p>`);
};
//end fact generator function

//animal appear functions
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

function popTroll() {
    $troll.fadeTo(2000, 1);
    setTimeout(function () {
        getBadFact($fakeFactDiv)
    }, 2000);
};

//animal dissapear functions
$factDivS.on('click', 'p', function () {
    $(this).remove();
    $squirrel.fadeTo(1000, 0);
});

$factDivB.on('click', 'p', function () {
    $(this).remove();
    $bunny.fadeTo(1000, 0);
});

$fakeFactDiv.on('click', 'p', function () {
    $(this).remove();
    $troll.fadeTo(1000, 0)
});