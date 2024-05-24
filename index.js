var fouad = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Maya Angelou', 
     'quote': 'Ive learned that people will forget what you said   , '
    },
    {'author': 'Albert Einstein', 
     'quote': 'Strive not to be a success, but rather to be of value.'
    },
    {'author': 'Eleanor Roosevelt', 
     'quote': 'No one can make you feel inferior without your consent.'
    },
    {'author': 'Mark Twain', 
     'quote': 'The secret of getting ahead is getting started.'
    },
    {'author': 'Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
];

function newQuote() {
    var random = Math.floor(Math.random() * fouad.length);
    document.getElementById('quote').textContent = `"${fouad[random].quote}"`;
    document.getElementById('author').textContent = `--${fouad[random].author}`;
}
