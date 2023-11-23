// ________[Preloader]________
const textLoadingList = [
    "Sip your coffee, brew your dreams.",
    "Ignite creativity, one pixel at a time.",
    "Crafting concepts over coffee.",
    "Awaiting the surge of a creative blend.",
    "Brewing brilliance, just a heartbeat away.",
    "Savor the creative process, ideas are on the rise.",
    "In the realm of pixels and caffeine, magic is brewing.",
    "Coffee: checked. Creativity: loading.",
    "Infusing innovation into your screen.",
    "Pouring ideas into the cauldron of creation."
];

let updateTextInterval;
let isPreloaderVisible = true;

function updateTextLoading() {
    if (!isPreloaderVisible) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * textLoadingList.length);
    const newText = textLoadingList[randomIndex];
    const preTextElement = document.querySelector('.pre-text');
    
    preTextElement.style.opacity = "0";

    setTimeout(() => {
        preTextElement.innerHTML = `Loading: ${newText}`;
        preTextElement.style.opacity = "1";
    }, 500);
}

function hidePreloader() {
    isPreloaderVisible = false;
    clearInterval(updateTextInterval);

    const preloaderElement = document.querySelector(".preloader");
    preloaderElement.style.opacity = "0";

    setTimeout(() => {
        preloaderElement.style.display = "none";
    }, 2000);
}

window.addEventListener("load", function () {
    updateTextLoading()
    updateTextInterval = setInterval(updateTextLoading, 3000);
    setTimeout(hidePreloader, 8000);
});