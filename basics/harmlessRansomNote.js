// Linear Search O(m+n)

harmlessRansomNote = (noteText, magazineText) => {
  let noteText1 = noteText.split(" ");
  let magazineText1 = magazineText.split(" ");
  let magazine = {};
  magazineText1.forEach((element) => {
    if (!magazine[element]) {
      magazine[element] = 0;
    } else {
      magazine[element] += 1;
    }
  });
  var canbeformed = true;
  noteText1.forEach((element) => {
    if (magazine[element] <= 0) {
      canbeformed = false;
    } else if (magazine[element]) {
      magazine[element] -= 1;
    } else {
      canbeformed = false;
    }
  });

  return canbeformed;
};

const noteText = "my name is  saurabh like";
const magazineText =
  "my pubg is codermaniac name not yes puerto rico brazil saurabh ";
console.log(harmlessRansomNote(noteText, magazineText));
