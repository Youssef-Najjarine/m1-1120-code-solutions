window.addEventListener('keydown', handleKeydown);

function handleKeydown(e) {
  // e is the event object
  // e.key is the key just pressed
  /// /////////////
  // 1. "get" the <span> with class of "next"
  const currentCharacter = document.querySelector('.current');
  // 2. read the textContent of that span (could be a space character)
  const expectedCharacter = currentCharacter.textContent;
  // 3. read the key just pressed
  const keyPressed = e.key;
  // 3.1 IF keyPressed is Shift, ignore and end this function
  if (keyPressed === 'Shift') return;
  // 4. compare the key to the textContent
  if (keyPressed === expectedCharacter) {
    // 5. IF they are equal...
    // 5.1 "get" the next <span>
    const next = currentCharacter.nextElementSibling; // the next <span>, if any
    // 5.2 Is there a next <span>? Is the typing done?
    if (!next) endGame();
    // 5.2.1 Not yet done, so ...
    // 5.3 remove "current" class from currentCharacter <span>
    currentCharacter.classList.remove('current');
    // 5.4 add "good" class to currentCharacter <span>
    currentCharacter.classList.add('good');
    // 5.5 remove "bad" class from currentCharacter <span> (if it exists)
    currentCharacter.classList.remove('bad');
    // 5.6 add "current" class to next <span>
    next.classList.add('current');
  } else {
    // 6. ELSE they aren't equal...
    // 6.1 add "bad" class to currentCharacter <span>
    currentCharacter.classList.add('bad');
  }
}

function endGame() {
  alert('Done!');
}
