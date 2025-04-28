async function closeWindow() {
    window.close();
    await delay(1);
    alert('We are encountering an issue with your browser. Please try again later.');
}

function shakeButton() {
    let button = document.getElementById("shakeBtn");
    button.classList.add("shake");
    setTimeout(() => button.classList.remove("shake"), 500);
}