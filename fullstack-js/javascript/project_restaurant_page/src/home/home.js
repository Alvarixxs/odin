import Knives from "./knives.jpg";
import Kettles from "./kettles.jpg";

function createHome() {
    let container = document.createElement('div');

    let p1 = document.createElement('p');
    p1.textContent = 'Step into the future of culinary innovation with our cutting-edge kitchen restaurant, where gastronomy meets technology in a harmonious blend of flavor and efficiency. Nestled amidst the sleek contours of tomorrow\'s architecture, our restaurant beckons you into a world where the boundaries of culinary exploration are continuously pushed beyond the ordinary.'
    container.appendChild(p1)

    let p2 = document.createElement('p');
    p2.textContent = 'Upon entering, you are greeted by an atmosphere of sophistication and warmth, where modern design elements seamlessly integrate with sustainable practices. The interior, bathed in soft, ambient lighting, exudes an inviting aura that sets the stage for a culinary journey unlike any other.'
    container.appendChild(p2)

    const knives = new Image(600)
    knives.src = Knives
    container.appendChild(knives)

    let p3 = document.createElement('p');
    p3.textContent = 'At the heart of our restaurant lies the kitchen of tomorrow, a marvel of state-of-the-art technology and culinary craftsmanship. Equipped with the latest advancements in smart appliances and automated cooking systems, our kitchen is a hub of creativity and precision, where chefs orchestrate culinary masterpieces with unparalleled finesse.'
    container.appendChild(p3)

    let p4 = document.createElement('p')
    p4.textContent = 'Experience the future of dining with our innovative menu, curated to tantalize the senses and ignite the imagination. From molecular gastronomy to plant-based creations, each dish is a work of art, meticulously crafted to showcase the finest ingredients and techniques from around the globe.'
    container.appendChild(p4)

    const kettles = new Image(600)
    kettles.src = Kettles
    container.appendChild(kettles)

    let p5 = document.createElement('p')
    p5.textContent = 'But our commitment to innovation doesn\'t stop there. Embracing sustainable practices, we strive to minimize our environmental footprint at every turn. From sourcing locally grown produce to implementing energy-efficient systems, we are dedicated to creating a dining experience that is both exquisite and eco-conscious.'
    container.appendChild(p5)

    let p6 = document.createElement('p')
    p6.textContent = 'Whether you\'re a culinary enthusiast or simply seeking an unforgettable dining experience, our futuristic kitchen restaurant invites you to embark on a culinary adventure like no other. Join us and discover the flavors of tomorrow, today. Welcome to the future of dining.'
    container.appendChild(p6)

    return container
}

export {createHome}