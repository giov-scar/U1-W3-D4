
// Creo 76 celle
const cartellone = function () {
    const container = document.getElementById('cartellone')
    for (let i = 0; i < 76; i++) {
        let cells = document.createElement ('span')
        cells.classList.add('cella')
        cells.innerHTML = (i+1)

        container.appendChild (cells)
    
    
    }
    
}
cartellone() 

// numeri random

const randomNum = function () {
    let rndm = Math.floor(Math.random()*75)+1
    document.getElementById('play').value = rndm
    console.log(rndm);
    
    document.getElementById('extract').innerHTML = rndm


    const newLi = document.createElement('li')
    newLi.innerText = rndm
    

}

randomNum()

