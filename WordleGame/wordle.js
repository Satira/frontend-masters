const letters = document.querySelectorAll('.scoreboard-letter');
const loadingDiv = document.querySelector('.info-bar');
const ANSWER_LENGTH = 5;
const ROUNDS = 6;

async function init () {
  let currentGuess = '';
  let currentRow = 0;
  let isLoading = true;

  res = await fetch('https://words.dev-apis.com/word-of-the-day');
  const data = await res.json();
  const word = data.word.toUpperCase();
  const wordParts = word.split('');
  let isWin = false;

  setLoading(false);
  isLoading = false;

  function addLetter (letter) {
    if (currentGuess.length < ANSWER_LENGTH) {
      currentGuess += letter;
    } else {
      currentGuess = currentGuess.substring(0, currentGuess.length - 1) + letter;
    }

    letters[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText = letter;
  }

  async function commitWord() {
    if (currentGuess.length !== ANSWER_LENGTH) {
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`https://words.dev-apis.com/validate-word`, {
        method: 'POST',
        body: JSON.stringify({ word: currentGuess }),
      });

      const data = await res.json();
      const { validWord } = data;

      if (!validWord) {
        markInvalidWord();
        return;
      }

      const guessParts = currentGuess.split('');
      const map = lettersMap(wordParts);

      for (let i = 0; i < ANSWER_LENGTH; i++) {
        if (guessParts[i] === wordParts[i]) {
          letters[ANSWER_LENGTH * currentRow + i].classList.add('correct');
          map[guessParts[i]]--;
        } else if (
          wordParts.includes(guessParts[i]) &&
          map[guessParts[i]] > 0
        ) {
          letters[ANSWER_LENGTH * currentRow + i].classList.add('close');
          map[guessParts[i]]--;
        } else {
          letters[ANSWER_LENGTH * currentRow + i].classList.add('wrong');
        }
      }

      currentRow++;

      if (currentGuess === word) {
        isWin = true;
        document.querySelector('.brand').classList.add('winner');
        alert('You win!');
      } else if (currentRow === ROUNDS) {
        alert(`You lose!. The word was ${word}`);
        isWin = true;
      }

      currentGuess = '';
    } catch (error) {
      console.error(error);
      markInvalidWord();
    } finally {
      setLoading(false);
    }
  }


  function removeLetter () {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
    letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = '';
  }

  function markInvalidWord () {
    for (let i = 0; i < currentGuess.length; i++) {
      letters[ANSWER_LENGTH * currentRow + i].classList.remove('invalid');

      setTimeout(() => {
        letters[ANSWER_LENGTH * currentRow + i].classList.add('invalid');
      }, 100);
    }
  }

  document.addEventListener('keydown', handleKeyPress = (e) => {
    if (isWin || isLoading) {
      return;
    }

    const action = e.key;

    if (action === 'Enter') {
      commitWord();
    } else if (action === 'Backspace') {
      removeLetter();
    } else if (isLetter(action)) {
    addLetter(action.toUpperCase());
    }
  });
}

function isLetter (str) {
  return /^[A-Z]$/i.test(str);
}

function setLoading(isLoading) {
  loadingDiv.classList.toggle('hidden', !isLoading);
}

function lettersMap(array) {
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    const letter = array[i];
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }

  return obj;
}

init();

