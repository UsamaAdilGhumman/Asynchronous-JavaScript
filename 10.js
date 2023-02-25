// use promise instead of callback hell

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");
const heading11 = document.querySelector(".heading11");
const heading12 = document.querySelector(".heading12");
const heading13 = document.querySelector(".heading13");

function change(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve("Element Changed");
      } else {
        reject("Element not Exisit");
      }
    }, time);
  });
}

change(heading1, "one", "red", 1000)
  .then(() => change(heading2, "two", "blue", 1000))
  .then(() => change(heading3, "three", "purple", 1000))
  .then(() => change(heading4, "four", "grey", 1000))
  .then(() => change(heading5, "five", "yellow", 1000))
  .then(() => change(heading6, "six", "green", 1000))
  .then(() => change(heading7, "seven", "Orange", 1000))
  .then(() => change(heading8, "eight", "MediumSeaGreen", 1000))
  .then(() => change(heading9, "nine", "Violet", 1000))
  .then(() => change(heading10, "ten", "DodgerBlue", 1000))
  .then(() => change(heading11, "eleven", "Tomato", 1000))
  .then(() => change(heading12, "tweleve", "SlateBlue", 1000))
  .then(() => change(heading13, "thirteen", "LightGray", 1000))
  .catch(error=>alert(error))