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
    const preTitleElement = document.querySelector('.pre-title');
    const preTextElement = document.querySelector('.pre-text');
    
    setTimeout(() => {
        preTitleElement.innerHTML = 'Loading.'
        setTimeout(() => {
            preTitleElement.innerHTML = 'Loading..'
            setTimeout(() => {
                preTitleElement.innerHTML = 'Loading...'
            }, 1000);
        }, 700);
    }, 1);
    
    preTextElement.style.opacity = "0";
    setTimeout(() => {
        preTextElement.innerHTML = `${newText}`;
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

updateTextLoading()
updateTextInterval = setInterval(updateTextLoading, 3000);
window.addEventListener("load", () => {
    setTimeout(hidePreloader, 8000);
});


// ________[Button Snap]________
const ids = ['#homepage', '#section2', '#section3', '#ari', '#dimas', '#hamzah', '#rangga', '#tamara', '#yabsir', '#footer']
let currentSectionIndex = 0;

document.querySelector('#snap-link').addEventListener('click', () => {
    snapToNextSection(currentSectionIndex)
})

snapToNextSection(currentSectionIndex)
function snapToNextSection(sectionIds) {
    document.querySelector('#snap-link').href = ids[sectionIds]
    if (currentSectionIndex > 8) {
        currentSectionIndex = 0
        return
    }
    currentSectionIndex++
}

// ______[Parallax]______
document.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    console.log(scrollValue);
    
    // section 1
    if (scrollValue > 0 && scrollValue < 1300) {
        const divider = scrollValue
        
        const heroSec = document.querySelector('#homepage .div');
        const heroRect = document.querySelector('#homepage .div .overlap .rectangle');
        const heroImg = document.querySelector('#homepage .div .overlap-2');
        
        heroSec.style.transform = `translate3d(${divider * 0.5}px, ${divider * 0.5}px, 0)`;
        if (divider > 750) {
            heroSec.style.opacity = '0'
        } else if (divider < 750) {
            heroSec.style.opacity = '1'
        }
        heroRect.style.transform = `translate3d(-${divider * 0.9}px, ${divider * 0.5}px, 0) rotate(10deg)`;
        heroImg.style.transform = `translate3d(-${divider * 0.7}px, -${divider * 0.3}px, 0)`;
    }

});