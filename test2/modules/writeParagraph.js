const pContainer = document.getElementById("paragraph");

export function writeParagraph (words) {
    pContainer.textContent = words;
    console.log("B");
};