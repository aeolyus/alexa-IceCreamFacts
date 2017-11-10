'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.19510eeb-db70-4ae1-8116-45bf572fb000"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Ice Cream Facts';

/**
 * Array containing ice cream facts.
 */
var FACTS = [
    "The cone didn't appear until 1904, when a Syrian waffle maker at the St. Louis World's Fair began rolling his pastries into horns to help an ice cream vendor who had run out of dishes.",
    "Today the average American eats about 20 quarts of ice cream a year―the world's highest per capita consumption, according to the International Dairy Foods Association.",
    "Top-selling ice cream flavors are: vanilla, with 33 percent of the market, and chocolate, with 19 percent.",
    "It takes 5.8 pounds of whole milk and one pound of cream to make one gallon of ice cream",
    "The largest ice cream cone measured 2.81 m (9 ft 2.63 in) in height and was achieved by Mirco Della Vecchia and Andrea Andrighetti of Italy.",
    "June is the month that the most ice cream is produced.",
    "California produces the most ice cream in America.",
    "87% of Americans have ice cream in their freezer at any given time.",
    "It takes about 50 licks to finish a single scoop ice cream cone.",
    "“Brain Freeze” occurs when ice cream touches the roof of your mouth.",
    "1 out of 5 people share ice cream with their pet.",
    "The U.S. celebrates National Ice Cream Month in July.",
    "Hawaii has a fruit known as the ice cream bean or the monkey tamarind that actually tastes like vanilla ice cream!",
    "Ice cream became available to the general population in France in 1660.",
    "Americans celebrated the victory of WWII with ice cream. In 1946, they ate more than 20 quarts of ice cream per person.",
    "19% of Americans say they eat ice cream in bed.",
    "French ice cream is enriched with egg yolks.",
    "Ice cream testers use gold spoons to be able to taste the product 100% without a slight percentage of ‘after-taste’ from typical spoons.",
    "February 4th is the National Ice Cream for Breakfast Day.",
    "Sorbet is like ice cream but contains no milk.",
    "About 9 percent of all the milk produced by U.S. dairy farmers is used to produce ice cream.",
    "Former British Prime Minister Margaret Thatcher was part of the team that first invented the method of making soft serve ice cream.",
    "In 1985, the biggest ice cream sundae was made in California. It stood twelve feet tall and was made with 4,667 gallons of ice Cream.",
    "Some weird flavors of ice cream include maple bacon, beer flavored, and pepperoni pizza."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random ice cream fact from the ice cream facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a ice cream fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};