const body = document.querySelector('body')
const IMG_NUMBER = 1

function paintImage(imageNumber) {
    const image = new Image()
    //image.src = `images/${imageNumber + 1}.jpg`
    image.src = `https://raw.githubusercontent.com/oshosh/chrome-momentum.github.io/master/Images/1.jpg`
    // image.src = `https://source.unsplash.com/random`

    image.classList.add('bgImage')
    body.prepend(image)
    // image.addEventListener('loadend',)

    const myImage = document.querySelector(".bgImage");
    myImage.onerror = function () {
        this.src = "http://placehold.it/150x150";
    }
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number;
}

function init() {
    const randomNumber = getRandom()
    paintImage(randomNumber)
}

init()