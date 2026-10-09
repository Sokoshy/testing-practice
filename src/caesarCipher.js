function shiftLetter(char, shift, base) {
  const position = char.charCodeAt(0) - base;      // 0-25 within the alphabet
  const newPosition = (position + shift) % 26;     // wrap around after z
  return String.fromCharCode(newPosition + base);
}

export function caesarCipher(str, shift) {
  const normalizedShift = ((shift % 26) + 26) % 26; // handles big and negative shifts

  return str
    .split('')
    .map((char) => {
      if (char >= 'a' && char <= 'z') return shiftLetter(char, normalizedShift, 97);
      if (char >= 'A' && char <= 'Z') return shiftLetter(char, normalizedShift, 65);
      return char;                                  // punctuation, spaces, numbers
    })
    .join('');
}
