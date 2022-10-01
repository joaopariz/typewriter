function typeWriter(element) {
  const arrayText = element.innerHTML.split("");
  element.innerHTML = "";
  arrayText.forEach((letter, i) => {
    setTimeout(() => (element.innerHTML += letter), 75 * i);
  });
}

const tittle = document.querySelector("h1");
typeWriter(tittle);
