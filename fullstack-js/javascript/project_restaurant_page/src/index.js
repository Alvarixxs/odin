import './style.css';
import {createHome} from "./home/home";
import {createAbout} from "./about/about";
import {createMenu} from "./menu/menu";

const content = document.getElementById('content')

const home = createHome()
content.appendChild(home)

const homeButton = document.getElementById('home')
homeButton.addEventListener('click', () => {
    content.removeChild(content.firstChild)
    content.appendChild(createHome())
})

const menuButton = document.getElementById('menu')
menuButton.addEventListener('click', () => {
    content.removeChild(content.firstChild)
    content.appendChild(createMenu())
})

const aboutButton = document.getElementById('about')
aboutButton.addEventListener('click', () => {
    content.removeChild(content.firstChild)
    content.appendChild(createAbout())
})