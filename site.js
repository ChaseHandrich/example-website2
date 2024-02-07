const previousButton = document.querySelector('button.previous')
const nextButton = document.querySelector('button.next')

const products = [
    
    {

        "title": "Nike",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        "color": "#deaf01"
    }
    ,
    {

        "title": "Independent",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg",
        "color": "#554a33"
    }
    ,
    {

        "title": "Michael Kors",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
        "color": "#01322f"
    },
    {
        "title" : "Champion",
        "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image" : "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
        "color" : "#ff0000"
    }
    ,
    {
        "title" : "",
        "text" : "",
        "image" : "",
        "color" : ""
    }
    ,
    {
        "title" : "",
        "text" : "",
        "image" : "",
        "color" : ""
    }
    
]


// add things to dom
const container= document.querySelector('#container')

container.removeChild(nextButton.parentNode)

const newCard = document.createElement('div')
newCard.id = 'card-4'
newCard.classList.add('card')
container.append(newCard)

const infoDiv = document.createElement('div')
newCard.append(infoDiv)

const header = document.createElement('h1')
infoDiv.append(header)

const paragraph = document.createElement('p')
infoDiv.append(paragraph)

container.append(nextButton.parentNode)
//console.log(cardInfo4)
//function bla(text) {
//    console.log(text || "ghaslhg")
//    return 5
//}
//
//console.log(bla("hi"))

const displayProduct = (card, { image, title, text, color }) => {

    card.style.backgroundImage = `url(${image}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
    card.style.color = color

    const h1 = card.querySelector('h1')
    h1.textContent = title

    const p = card.querySelector('p')
    p.textContent = text
}



const cards = document.querySelectorAll('.card')
//for (let i = 0; i < cards.length; i++)
  //  createCard(cards[i], products[i])

let offset = 0
const updateCards = shift => {
    offset += shift
    
    cards.forEach((card, index) => {
        const productIndex =  (index + offset) % products.length
        displayProduct(card, products[productIndex])})
}
updateCards(0)



nextButton.addEventListener('click', () => {updateCards(1)})
 previousButton.addEventListener('click', () => {updateCards(-1)})
// const greetings = name => `Hello ${name}!`

// console.log(greetings("Chase"))

// const names = [ "sade", "ryan", "marek", "aidan", "ashton"]
// const names2 = [...names, "Tevin"]
// console.log(names[names.length -1])

// const uppercase = text => `${text.at(0).toUpperCase()}${text.slice(1).toLowerCase()}`
// console.log(uppercase("ashton"))

// names2.forEach(name => console.log(uppercase(name)))

// const input = "Valentines Day"
// if( ['Christmas','Halloween',"St.Patrick's Day", "Valentines"] .includes(input)) console.log("Found")

// const [fav1, leastFav, fav2] = names
// console.log({fav1, leastFav, fav2})

// const sentence = "This is a bunch of words."
// const [first] = sentence.split(" ")
// console.log({first})

// const printNames = (name1, name2) => {
//     console.log(name1)
//     console.log(name2)
// }

// printNames(...names)