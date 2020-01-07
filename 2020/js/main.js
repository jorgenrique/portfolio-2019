const navButtons = document.querySelectorAll('.nav-option')
const header = document.querySelector('.header')
const experience = document.querySelector('.experience')
const skills = document.querySelector('.skills')
const skillsGrid = document.querySelector('.skills .grid')
const products = document.querySelector('.products')
const productsGrid = document.querySelector('.products .grid')
const brands = document.querySelector('.brands')
const brandsGrid = document.querySelector('.brands .grid')

const test1 = document.querySelector('.test-1')
const test2 = document.querySelector('.test-2')
const test3 = document.querySelector('.test-3')

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


// EXPERIENCE CONTENT

const jobs = [
    {title: 'Senior product designer & Squad lead', company: '<a href="https://www.actimo.com/" target="_blank">Actimo</a> | Copenhagen, Denmark', time: 'August 2017 - January 2020'},
    {title: 'Product lead', company: '<a href="https://www.beethedata.com/" target="_blank">Bee the Data</a> | Barcelona, Spain', time: 'November 2016 - July 2017'},
    {title: 'UX & front end development consultant', company: '<a href="https://shargo.io/" target="_blank">Shargo</a> | Barcelona, Spain', time: 'March 2016 - August 2016'},
    {title: 'Senior front end developer & SCRUM master', company: '<a href="https://www.runroom.com/en" target="_blank">Runroom</a> | Barcelona, Spain', time: 'October 2015 - March 2017'},
    {title: 'Master in web design and project management', company: '<a href="https://www.elisava.net/en/masters-postgraduates/master-web-design-and-internet-projects-management" target="_blank">ELISAVA</a> | Barcelona, Spain', time: 'July 2015 - July 2016'},
    {title: 'Founder & Chief Design Officer', company: '<a href="https://www.mawesi.net/" target="_blank">Mawesi</a> | Cali, Colombia', time: 'July 2014 - July 2015'},
    {title: 'Senior front end developer', company: '<a href="https://en.wikipedia.org/wiki/Razorfish_(company)" target="_blank">Razorfish</a> | New York, USA & Remote', time: 'April 2011 - February 2015'},
    {title: 'Bachelor on Interaction Design', company: 'ICESI | Cali, colombia', time: 'July 2006 - June 2013'},
    {title: 'Founder & Designer & Developer', company: 'Pixel Power Media | Cali, colombia', time: 'November 2009 - April 2011'}
]

const jobMarkup = `
    ${jobs.map(job => `
        <div class="job">
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.time}</p>
        </div>
    `).join('')}`

experience.innerHTML += jobMarkup


// SKILLS CONTENT

const skillz = [
    'Agile methodologies',
    'Data driven design',
    'Data visualization',
    'Design systems',
    'Design thinking',
    'Front end development',
    'Roadmap prioritization',
    'User research'
]

const skillsMarkup = `${skillz.map(skill => `<p class="skill">${skill}</p>`).join('')}`

skillsGrid.innerHTML += skillsMarkup


// PRODUCTS CONTENT

const prods = [
    {link: 'https://www.actimo.com/', image: 'img/actimo.jpg', alt: 'Actimo', title: 'Senior product designer & squad lead'},
    {link: 'https://www.beethedata.com/', image: 'img/beethedata.jpg', alt: 'Bee the Data', title: 'Product lead'},
    {link: 'https://shargo.io/', image: 'img/shargo.jpg', alt: 'Shargo', title: 'UX & front end consultant'}
]

const prodsMarkup = `
    ${prods.map(prod => `
        <a href="${prod.link}" target="_blank" class="product">
            <img src="${prod.image}" alt="${prod.alt}">
            <div class="content"><h4>${prod.title}</h4></div>
        </a>
    `).join('')}`

productsGrid.innerHTML += prodsMarkup


// BRANDS CONTENT

const brandz = [
    {logo: 'img/aviall.jpg', alt: 'Aviall'},
    {logo: 'img/bobbibrown.jpg', alt: 'Bobbi Brown'},
    {logo: 'img/effie.jpg', alt: 'Effie awards'},
    {logo: 'img/keurig.jpg', alt: 'Keurig'},
    {logo: 'img/lamer.jpg', alt: 'LAMER'},
    {logo: 'img/mackweldon.jpg', alt: 'Mack Weldon'},
    {logo: 'img/markjacobs.jpg', alt: 'Mark Jacobs'},
    {logo: 'img/mesoestetic.jpg', alt: 'Mesoestetic'},
    {logo: 'img/moroccan.jpg', alt: 'Moroccan Oil'},
    {logo: 'img/pfizer.jpg', alt: 'Pfizer'},
    {logo: 'img/sjd.jpg', alt: 'San Joan de Deu'},
    {logo: 'img/utc.jpg', alt: 'United Technologies'}
]

const brandsMarkup = `${brandz.map(brand => `<div class="logo"><img src="${brand.logo}" alt="${brand.alt}"></div>`).join('')}`

brandsGrid.innerHTML += brandsMarkup


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
