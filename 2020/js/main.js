const navButtons = document.querySelectorAll('.nav-option')
const header = document.querySelector('.header')
const experience = document.querySelector('.experience')
const skills = document.querySelector('.skills')
const products = document.querySelector('.products')
const brands = document.querySelector('.brands')

let scrollpos = window.scrollY
let eflag = true
let sflag = false
let pflag = false
let bflag = false

const windowHeight = window.innerHeight
const docHeight = document.documentElement.scrollHeight

const eOffset = offset(experience).top - (windowHeight - 200)
const sOffset = offset(skills).top - (windowHeight - 200)
const pOffset = offset(products).top - (windowHeight - 200)
const bOffset = offset(brands).top - (windowHeight - 200)
const bottom = docHeight - windowHeight

const expbtn = document.querySelector(`.nav-option[data-id="experience"]`)
const skibtn = document.querySelector(`.nav-option[data-id="skills"]`)
const probtn = document.querySelector(`.nav-option[data-id="products"]`)
const brabtn = document.querySelector(`.nav-option[data-id="brands"]`)


// Functions

function offset(el) {

    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop }
}


function runOnScroll() {

    scrollpos = window.scrollY;

    if (scrollpos >= 200) {
        header.classList.add('show')
    } else {
        header.classList.remove('show')
    }

    if ( scrollpos >= eOffset && scrollpos <= sOffset) {

        if (eflag) {
            navButtons.forEach(navButton => navButton.classList.remove('selected'))
            expbtn.classList.add('selected')
        }

        eflag = false;
        sflag = true;

    } else if ( scrollpos >= sOffset && scrollpos <= pOffset ) {

        if (sflag) {
            navButtons.forEach(navButton => navButton.classList.remove('selected'))
            skibtn.classList.add('selected')
        }

        sflag = false;
        pflag = true;
        eflag = true;

    } else if ( scrollpos >= pOffset && scrollpos <= bOffset ) {

        if (pflag) {
            navButtons.forEach(navButton => navButton.classList.remove('selected'))
            probtn.classList.add('selected')
        }

        pflag = false;
        bflag = true;
        sflag = true;

    } else if ( scrollpos >= bOffset ) {

        if (bflag) {
            navButtons.forEach(navButton => navButton.classList.remove('selected'))
            brabtn.classList.add('selected')
        }

        bflag = false;
        pflag = true;

    } else {

        navButtons.forEach(navButton => navButton.classList.remove('selected'))
        eflag = true;
        sflag = false;
    }
};


function scrollToSection () {

    const id = this.getAttribute('data-id')
    const section = '.'+id
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' })
}


navButtons.forEach(navButton => navButton.addEventListener('click', scrollToSection))
window.addEventListener("scroll", runOnScroll);
