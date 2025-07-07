
// variables
var getQuoteButton = document.getElementById('getQuoteButton');
var deleteQuoteButton = document.getElementById('deleteQuoteButton');
var quoteParagraph = document.getElementById('quote');
var authorParagraph = document.getElementById('author');
var input_addQuote = document.getElementById('addquote');
var input_addAuthor = document.getElementById('addauthor');
var addbutton = document.getElementById('addButton');
var input_updateQuote = document.getElementById('updatequote');
var updatebutton = document.getElementById('updateButton');
var randomQuote = '';
var lastRandomQuote = '';
var indx = 0;

var quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
];

// event listener
getQuoteButton.addEventListener('click', getRandomQuote);
deleteQuoteButton.addEventListener('click', deleteQuote);
addbutton.addEventListener('click', addQuote);
updatebutton.addEventListener('click', updateQuote);

// functions
function getRandomQuote() {
    indx = Math.floor(Math.random() * quotes.length)
    randomQuote = quotes[indx];
    while (lastRandomQuote.quote === randomQuote.quote && quotes.length > 1) {
        indx = Math.floor(Math.random() * quotes.length)
        randomQuote = quotes[indx];
    }
    lastRandomQuote = randomQuote;
    viewQuote(randomQuote);
}

function addQuote() {
    if (input_addQuote.value === '' || input_addAuthor.value === '') {
        return;
    }

    var newQuote = {
        quote: input_addQuote.value,
        author: input_addAuthor.value
    };

    quotes.push(newQuote);
    input_addQuote.value = '';
    input_addAuthor.value = '';
    viewQuote(quotes[quotes.length - 1]);
}

function updateQuote() {
    if (input_updateQuote.value === '') {
        return;
    }

    quotes[indx].quote = input_updateQuote.value;
    input_updateQuote.value = '';
    viewQuote(quotes[indx]);
}

function viewQuote(quote) {
    quoteParagraph.textContent = `"${quote.quote}"`;
    authorParagraph.textContent = `--${quote.author}`;
}

function clearQuote() {
    quoteParagraph.textContent = '';
    authorParagraph.textContent = '';
}

function deleteQuote() {
    quotes.splice(indx, 1);
    clearQuote();
}



