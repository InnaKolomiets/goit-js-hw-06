const fontSizeControl = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

fontSizeControl.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    text.style.fontSize = `${inputValue}px`;

 })