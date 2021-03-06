const tiles = document.querySelectorAll('.tile')
const wrapper = document.querySelector('.wrapper')
const overlay = document.querySelector('.overlay')
const closeOver = document.querySelector('.close-overlay')
const logo = document.querySelector('.logo')
const contentSections = document.querySelectorAll('.content')
const menuItems = document.querySelectorAll('.menu-item')
const letters = document.querySelectorAll('.letter')

window.onload = function () { wrapper.classList.add('loaded') }

function toggleTilesOpen () {
    overlay.classList.add('show')

    var elem = this.getAttribute('data-sect')
    const section = document.querySelector(`.content[data-sect="${elem}"]`)
    const menuItem = document.querySelector(`.menu-item[data-sect="${elem}"]`)
    const letter = document.querySelector(`.letter[data-sect="${elem}"]`)

    setTimeout (function () {
        section.classList.add('active')
        letter.classList.add('active')
    }, 400)

    setTimeout (function () {
        logo.classList.add('section_active')
    }, 200)

    menuItems.forEach(menuItem => menuItem.classList.remove('active'))
    menuItem.classList.add('active')
}

function changeSection () {
    var item = this.getAttribute('data-sect')
    menuItems.forEach(menuItem => menuItem.classList.remove('active'))
    const section = document.querySelector(`.content[data-sect="${item}"]`)
    const menuItem = document.querySelector(`.menu-item[data-sect="${item}"]`)
    const letter = document.querySelector(`.letter[data-sect="${item}"]`)
    contentSections.forEach(section => section.classList.remove('active'))
    letters.forEach(letter => letter.classList.remove('active'))
    menuItem.classList.add('active')
    section.classList.add('active')
    letter.classList.add('active')
}

function closeOverlay () {
    contentSections.forEach(section => section.classList.remove('active'))
    letters.forEach(letter => letter.classList.remove('active'))
    menuItems.forEach(menuItem => menuItem.classList.remove('active'))

    setTimeout(function () {
        overlay.classList.remove('show')
        logo.classList.remove('section_active')
    }, 400)
}

tiles.forEach(tile => tile.addEventListener('click', toggleTilesOpen))
menuItems.forEach(menuItem => menuItem.addEventListener('click', changeSection))
closeOver.addEventListener('click', closeOverlay)
