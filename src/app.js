document.addEventListener('DOMContentLoad', () => {

    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ]

    cardsArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []


    //Create Your Board....

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }


    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You Found A Match')
            cards[OptionOneId].setAttribute('src', 'images/white.png')
            cards[OptionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } 
        else {
            cards[optionOneId].setAttribute('src' ,'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert ('Sorry! Try Again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent =cardsWon.length
        if (cardsWon.length === cardsArray.length/2) {
            resultDisplay.textContent = 'Congratulation! You Won........!!!!'
        }
    }


    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[carId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
})