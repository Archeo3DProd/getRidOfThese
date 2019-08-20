const myText = document.getElementById("myText");
const buttonDisplay = document.getElementById("buttonDisplay");


function displayText () {
  const paragraph = document.createElement("p");
  paragraph.innerText = myText.value;
  content.appendChild(paragraph);
  paragraph.className = "paragraphText";
}

function removeFirstParagraph() {
  const paragraphs = document.getElementsByClassName("paragraphText");
  if (paragraphs.length > 0) {
    content.removeChild(paragraphs[0]);
  }
}

function removeLastParagraph() {
  const paragraphs = document.getElementsByClassName("paragraphText");
  if (paragraphs.length > 0) {
    content.removeChild(paragraphs[paragraphs.length - 1]);
  }
}

buttonDisplay.addEventListener("click", displayText);
buttonRemoveFirst.addEventListener("click", removeFirstParagraph);
buttonRemoveLast.addEventListener("click", removeLastParagraph);
