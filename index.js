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

// ________[Parallax]________
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
    
    // section 2
    if (scrollValue > 628 && scrollValue < 2160) {
        const divider = scrollValue - 628

        const sec2 = document.querySelector('#section2 .div');
        const sec2RectOrange = document.querySelector('#section2 .overlap .rectangle');
        const sec2Overlap2 = document.querySelector('#section2 .div .overlap-2');
        const sec2Overlap3 = document.querySelector('#section2 .div .overlap-group-2');
        const sec2Overlap4 = document.querySelector('#section2 .div .overlap-group');

        if (divider > 1200) {
            sec2.style.opacity = '0'
        } else if (divider < 1200) {
            sec2.style.opacity = '1'
        }
        sec2RectOrange.style.transform = `translate3d(-${divider * 2}px , ${divider * 1.3}px, 0) rotate(${divider * 0.3}deg)`;
        if (divider > 100 && divider < 452) {
            sec2Overlap2.style.transform = `translate3d( 0, ${divider * 0.5}px, 0)`;
        }
        if (divider > 100 && divider < 517) {
            sec2Overlap4.style.transform = `translate3d( 0, -${divider * 0.2}px, 0)`;
        }
        if (divider > 378 && divider < 724) {
            sec2Overlap3.style.transform = `translate3d( 0, ${divider * 0.5 - 378}px, 0)`;
        }
    }

    // section 3
    if (scrollValue > 1860 && scrollValue < 2900) {
        const divider = scrollValue - 1860

        const sec3 = document.querySelector('#section3 .overlap-wrapper');
        const sec3RectOrange = document.querySelector('#section3 .overlap .rectangle');
        const sec3Img = document.querySelector('#section3 .overlap .img');
        const sec3Title = document.querySelector('#section3 .overlap .text-wrapper');
        const sec3Member = document.querySelector('#section3 .overlap .member');
        const sec3Num = document.querySelector('#section3 .overlap .element');

        sec3RectOrange.style.transform = `translate3d(${divider * 0.3}px , ${divider * 0.3}px, 0) rotate(${divider * 0.1 + 110}deg)`;
        sec3Img.style.transform = `translate3d(-${divider * 0.1}px , -${divider * 0.1}px, 0)`;
        sec3Title.style.transform = `translate3d( ${divider * 0.3}px, ${divider * 0.1}px, 0)`;
        sec3Member.style.transform = `translate3d( ${divider * 0.1}px, ${divider * 0.2}px, 0)`;
        sec3Num.style.transform = `translate3d( ${divider * 0.1}px, ${divider * 0.2}px, 0)`;
    }
    
    // profile
    if (scrollValue > 2512 && scrollValue < 3739) {
        const divider = scrollValue - 2512
        document.querySelector('#section3 .overlap-wrapper').style.transform = `translate3d( 0, ${divider * 0.8}px, 0)`;
    }
    if (scrollValue > 2836) {
        document.querySelector('#section3 .overlap-wrapper').style.filter = `blur(9px)`;
    } else {
        document.querySelector('#section3 .overlap-wrapper').style.filter = `blur(0)`;
    }

    if (scrollValue > 3740 && scrollValue < 4819) {
        const divider = scrollValue - 3740
        document.querySelector('#ari .overlap-wrapper').style.transform = `translate3d( 0, ${divider * 0.8}px, 0)`;
        document.querySelector('#ari .overlap-wrapper').style.filter = `blur(9px)`;
    } else {
        document.querySelector('#ari .overlap-wrapper').style.filter = `blur(0)`;
    }

    if (scrollValue > 4820 && scrollValue < 5899) {
        const divider = scrollValue - 4820
        document.querySelector('#dimas .overlap-wrapper').style.transform = `translate3d( 0, ${divider * 0.9}px, 0)`;
        document.querySelector('#dimas .overlap-wrapper').style.filter = `blur(9px)`;
    } else {
        document.querySelector('#dimas .overlap-wrapper').style.filter = `blur(0)`;
    }

    if (scrollValue > 5900 && scrollValue < 6979) {
        const divider = scrollValue - 5900
        document.querySelector('#hamzah .overlap-wrapper').style.transform = `translate3d( 0, ${divider * 0.9}px, 0)`;
        document.querySelector('#hamzah .overlap-wrapper').style.filter = `blur(9px)`;
    } else {
        document.querySelector('#hamzah .overlap-wrapper').style.filter = `blur(0)`;
    }

    if (scrollValue > 6980 && scrollValue < 8059) {
        const divider = scrollValue - 6980
        document.querySelector('#rangga .overlap-wrapper').style.transform = `translate3d( 0, ${divider * 0.9}px, 0)`;
        document.querySelector('#rangga .overlap-wrapper').style.filter = `blur(9px)`;
    } else {
        document.querySelector('#rangga .overlap-wrapper').style.filter = `blur(0)`;
    }

    if (scrollValue > 8060 && scrollValue < 9139) {
        const divider = scrollValue - 8060
        document.querySelector('#tamara .overlap-wrapper').style.transform = `translate3d( 0, ${divider * 0.9}px, 0)`;
        document.querySelector('#tamara .overlap-wrapper').style.filter = `blur(9px)`;
    } else {
        document.querySelector('#tamara .overlap-wrapper').style.filter = `blur(0)`;
    }

    if (scrollValue > 9140 && scrollValue < 10219) {
        const divider = scrollValue - 9140
        document.querySelector('#yabsir .overlap-wrapper').style.transform = `translate3d( 0, ${divider * 0.9}px, 0)`;
        document.querySelector('#yabsir .overlap-wrapper').style.filter = `blur(9px)`;
    } else {
        document.querySelector('#yabsir .overlap-wrapper').style.filter = `blur(0)`;
    }

      // footer
      if (scrollValue > 9999) {
        const divider = scrollValue - 9999
        document.querySelector('#footer .thank-you').style.transform = `translate3d( 0, ${divider * 0.5}px, 0)`;
    }
    
});