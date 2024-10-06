"use strict"; /* for at undgå en masse fejlmeddelelser som jeg ikke gider at se på :) */

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};


function updateTexts(locale) {
  const languageData = texts[locale];
  if (!languageData) return; 

  languageData.texts.forEach(({ text, location }) => {
    const element = document.querySelector(location);
    if (element) {
      element.textContent = text; 
    }
  });
}


let locale = "da";
updateTexts(locale);


document.getElementById("language").addEventListener("change", (e) => {
  locale = e.target.value; 
  updateTexts(locale);     
});
