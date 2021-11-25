let timer
let deleteFirstPhotoDelay


async function start() {
    try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedList(data.message) 
    } catch (e) {
        console.log("There was a problem")
    }
}

start()


function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
    
    <select onchange="loadByBreed(this.value)">
    <option>Choose a dog breed</option>
    ${Object.keys(breedList).map(function(breed) {
        return `<option>${breed}</option>`
    }).join('')}
    </select>`
}


async function loadByBreed(breed) {
    if (breed !="Choose a dog breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        createSlideshow(data.message)
    }
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function createSlideshow(images) {
    clearInterval(timer)
    timer = setInterval(function(){ 
        let choseRandomImage = randomIntFromInterval(0, images.length)
        document.getElementById("slideImage").style = `background-image: url('${images[choseRandomImage]}')`

    }, 3000)

}
