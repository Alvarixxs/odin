import Cactus from './cactus.jpg'

function createAbout() {
    let container = document.createElement('div');

    let p1 = document.createElement('p');
    p1.textContent = 'Founded in 2018 by visionary chef Alex Reynolds, our restaurant blends cutting-edge technology with sustainable practices to revolutionize the dining experience. Over two years, Alex and a team of top engineers and food scientists developed advanced cooking technologies and sustainable methods, leading to the 2020 construction of our downtown Metropolis location. Featuring interactive tables, a transparent kitchen, and a vertical garden, Futuristic Kitchen opened in 2021 to great acclaim. Our menu combines traditional flavors with modern techniques like molecular gastronomy and 3D-printed desserts, earning numerous awards for its groundbreaking approach. Join us at Futuristic Kitchen, where the future of food is now.'
    container.appendChild(p1)

    let p2 = document.createElement('p');
    p2.textContent = 'Telephone number: XXX XXX XXX. Contact email: example@example.com';
    container.appendChild(p2)

    const cactus = new Image(600)
    cactus.src = Cactus
    container.appendChild(cactus)

    return container
}

export {createAbout}