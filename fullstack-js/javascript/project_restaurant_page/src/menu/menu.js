import Salad from './salad.jpg'
import Steak from './steak.jpg'
import Fries from './fries.jpg'
import Mousse from './mousse.jpg'

function createMenu() {
    let container = document.createElement("div");

    let intro = document.createElement("p");
    intro.textContent = 'Welcome to Futuristic Kitchen! Today\'s menu offers a blend of traditional flavors and modern techniques, ensuring a unique and memorable dining experience.'
    container.appendChild(intro)

    // starters

    let starters = document.createElement('p')
    container.appendChild(starters)

    let starterTitle = document.createElement('b')
    starterTitle.textContent = 'Starter'
    starters.appendChild(starterTitle)

    let starterContent = document.createElement('ol')
    starters.appendChild(starterContent)

    let starter1 = document.createElement('li')
    starter1.textContent = 'Molecular Caprese Salad: Spherified mozzarella, heirloom tomato gel, basil foam, and balsamic pearls.'
    starters.appendChild(starter1)

    let starter2 = document.createElement('li')
    starter2.textContent = '3D-Printed Beet Tartare: Seasoned with truffle oil, microgreens, and citrus zest.'
    starters.appendChild(starter2)

    const salad = new Image(400)
    salad.src = Salad
    container.appendChild(salad)

    // main courses

    let main = document.createElement('p')
    container.appendChild(main)

    let mainTitle = document.createElement('b')
    mainTitle.textContent = 'Main Courses'
    main.appendChild(mainTitle)

    let mainContent = document.createElement('ol')
    main.appendChild(mainContent)

    let main1 = document.createElement('li')
    main1.textContent = 'Sous-Vide Herb-Crusted Salmon: Accompanied by quinoa risotto, roasted asparagus, and a lemon-dill emulsion.'
    main.appendChild(main1)

    let main2 = document.createElement('li')
    main2.textContent = 'AI-Predicted Perfect Steak: Grass-fed ribeye, precision-cooked to your desired doneness, served with truffle mashed potatoes, caramelized Brussels sprouts, and a red wine reduction.'
    main.appendChild(main2)

    let main3 = document.createElement('li')
    main3.textContent = 'Vegan Mushroom and Truffle Ravioli: Handmade ravioli filled with a blend of wild mushrooms and truffles, served with a cashew cream sauce and garnished with fresh herbs.'
    main.appendChild(main3)

    const steak = new Image(300)
    steak.src = Steak
    container.appendChild(steak)

    // side dishes

    let side = document.createElement('p')
    container.appendChild(side)

    let sideTitle = document.createElement('b')
    sideTitle.textContent = 'Side Dishes'
    side.appendChild(sideTitle)

    let sideContent = document.createElement('ol')
    side.appendChild(sideContent)

    let side1 = document.createElement('li')
    side1.textContent = 'Smart Roasted Vegetables: A medley of seasonal vegetables, perfectly roasted using AI temperature control, drizzled with a balsamic glaze.'
    side.appendChild(side1)

    let side2 = document.createElement('li')
    side2.textContent = 'Future Fries: Crispy sweet potato and parsnip fries, served with aioli trio: garlic, sriracha, and truffle.'
    side.appendChild(side2)

    const fries = new Image(400)
    fries.src = Fries
    container.appendChild(fries)

    // desserts

    let desserts = document.createElement('p')
    container.appendChild(desserts)

    let dessertsTitle = document.createElement('b')
    dessertsTitle.textContent = 'Desserts'
    desserts.appendChild(dessertsTitle)

    let dessertContent = document.createElement('ol')
    desserts.appendChild(dessertContent)

    let dessert1 = document.createElement('li')
    dessert1.textContent = '3D-Printed Chocolate Mousse: Layers of rich chocolate mousse, raspberry coulis, and edible gold flakes.'
    desserts.appendChild(dessert1)

    let dessert2 = document.createElement('li')
    dessert2.textContent = 'Nitro-Frozen Berry Sorbet: Mixed berry sorbet flash-frozen with liquid nitrogen, served with fresh mint and a honey drizzle.'
    desserts.appendChild(dessert2)

    const mousse = new Image(400)
    mousse.src = Mousse
    container.appendChild(mousse)

    // beverages

    let beverages = document.createElement('p')
    container.appendChild(beverages)

    let beveragesTitle = document.createElement('b')
    beveragesTitle.textContent = 'Beverages'
    beverages.appendChild(beveragesTitle)

    let beveragesContent = document.createElement('ol')
    beverages.appendChild(beveragesContent)

    let beverage1 = document.createElement('li')
    beverage1.textContent = 'Tech-Tini: Gin, elderflower liqueur, and lavender bitters, garnished with an edible flower.'
    beverages.appendChild(beverage1)

    let beverage2 = document.createElement('li')
    beverage2.textContent = 'Organic Herbal Teas: Selection of teas sourced from our vertical garden, served with locally sourced honey.'
    beverages.appendChild(beverage2)

    let beverage3 = document.createElement('li')
    beverage3.textContent = 'Smart Brewed Coffee: Single-origin beans brewed to perfection using precision temperature control.'
    beverages.appendChild(beverage3)

    let final = document.createElement('p')
    final.textContent = 'Enjoy your futuristic dining experience at Futuristic Kitchen!'
    container.appendChild(final)

    return container;
}

export {createMenu}