const navButtons = document.querySelectorAll('.nav-option');
const header = document.querySelector('.header');
const experience = document.querySelector('.experience');
const cases = document.querySelector('.cases');
const brands = document.querySelector('.brands');

let scrollpos = window.scrollY;
let eflag = true;
let cflag = false;
let bflag = false;

const windowHeight = window.innerHeight;

const expbtn = document.querySelector('.nav-option[data-id="experience"]');
const casbtn = document.querySelector('.nav-option[data-id="cases"]');
const brabtn = document.querySelector('.nav-option[data-id="brands"]');


function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
}


const eOffset = offset(experience).top - (windowHeight - 200);
const cOffset = offset(cases).top - (windowHeight - 200);
const bOffset = offset(brands).top - (windowHeight - 200);


function runOnScroll() {
  scrollpos = window.scrollY;

  if (scrollpos >= 200) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }

  if (scrollpos >= eOffset && scrollpos <= cOffset) {
    
    if (eflag) {
      navButtons.forEach((navButton) => navButton.classList.remove('selected'));
      expbtn.classList.add('selected');
    }
    eflag = false;
    cflag = true;
  
  } else if (scrollpos > cOffset && scrollpos <= bOffset) {
    
    if (cflag) {
      navButtons.forEach((navButton) => navButton.classList.remove('selected'));
      casbtn.classList.add('selected');
    }
    cflag = false;
    bflag = true;
    eflag = true;

  } else if (scrollpos > bOffset) {
    
    if (bflag) {
      navButtons.forEach((navButton) => navButton.classList.remove('selected'));
      brabtn.classList.add('selected');
    }

    bflag = false;
    cflag = true;
    eflag = true;
  } else {
    navButtons.forEach((navButton) => navButton.classList.remove('selected'));
    eflag = true;
  }
}


function scrollToSection() {
  const id = this.getAttribute('data-id');
  const section = `.${id}`;
  document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
}


navButtons.forEach((navButton) => navButton.addEventListener('click', scrollToSection));
window.addEventListener('scroll', runOnScroll);
