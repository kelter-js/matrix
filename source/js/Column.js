const CHARACTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "X",
  "Y",
  "Z",
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я"
];

class Column {
  constructor(x, context, canvasHeight, fontSize = 16) {
    this.y = 0;
    this.x = x;
    this.context = context;
    this.canvasHeight = canvasHeight;
    this.fontSize = fontSize;
  }

  drawCharacter() {
    if (this.shouldNotRender()) {
      return;
    }

    const currentCharacter = this.getCharacter();

    this.context.fillText(currentCharacter, this.x, this.y);

    this.increaseY();
  }

  shouldNotRender() {
    return this.y === 0 && Math.random() < 0.95;
  }

  getCharacter() {
    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }

  increaseY() {
    this.y = (this.y > this.canvasHeight) ? 0 : this.y + this.fontSize;
  }
}

export default Column;