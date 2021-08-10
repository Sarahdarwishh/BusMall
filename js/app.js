'use strict';

let allBusMall = [];
let namesArr = [];
let votesArr = [];
let shownArr = [];
let numbers = [];
let maxAttempts = 25;
let userAttemptCounter = 0;

let firstImageIndex;
let secondImageIndex;
let thirdImageIndex;

let firstImageElement = document.getElementById('firstImage');
let secondImageElement = document.getElementById('secondImage');
let thirdImageElement = document.getElementById('thirdImage');

function BusMall(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shown = 0
    allBusMall.push(this);
    // namesArr.push(this.name);
    // shownArr.push(this.shown);
    // votesArr.push(this.votes);
}

new BusMall('bag', 'images/bag.jpg');
new BusMall('banana', 'images/banana.jpg');
new BusMall('bathroom', 'images/bathroom.jpg');
new BusMall('boots', 'images/boots.jpg');
new BusMall('breakfast', 'images/breakfast.jpg');
new BusMall('bubblegum', 'images/bubblegum.jpg');
new BusMall('chair', 'images/chair.jpg');
new BusMall('cthulhu', 'images/cthulhu.jpg');
new BusMall('dog-duck', 'images/dog-duck.jpg');
new BusMall('dragon', 'images/dragon.jpg');
new BusMall('pen', 'images/pen.jpg');
new BusMall('pet-sweep', 'images/pet-sweep.jpg');
new BusMall('scissors', 'images/scissors.jpg');
new BusMall('shark', 'images/shark.jpg');
new BusMall('sweep', 'images/sweep.png');
new BusMall('tauntaun', 'images/tauntaun.jpg');
new BusMall('unicorn', 'images/unicorn.jpg');
new BusMall('water-can', 'images/water-can.jpg');
new BusMall('wine-glass', 'images/wine-glass.jpg');

// console.log(allBusMall);
// console.log(namesArr);

function generateRandomIndex() {
    return Math.floor(Math.random() * allBusMall.length);
}
let oldImages;

function render() {

    oldImages = [firstImageIndex, secondImageIndex, thirdImageIndex]

    // firstImageIndex = generateRandomIndex();
    // secondImageIndex = generateRandomIndex();
    // thirdImageIndex = generateRandomIndex();

    while (firstImageIndex === secondImageIndex || secondImageIndex === thirdImageIndex || firstImageIndex === thirdImageIndex || oldImages.includes(firstImageIndex) || oldImages.includes(secondImageIndex) || oldImages.includes(thirdImageIndex)) {
        firstImageIndex = generateRandomIndex();
        secondImageIndex = generateRandomIndex();
        thirdImageIndex = generateRandomIndex();

    }

    firstImageElement.src = allBusMall[firstImageIndex].source;
    secondImageElement.src = allBusMall[secondImageIndex].source;
    thirdImageElement.src = allBusMall[thirdImageIndex].source;


    allBusMall[firstImageIndex].shown++;
    allBusMall[secondImageIndex].shown++;
    allBusMall[thirdImageIndex].shown++;
    
}

render();



let imagesSection = document.getElementById('images');
imagesSection.addEventListener('click', handleclick);

function handleclick(event) {

    userAttemptCounter++;
    if (userAttemptCounter <= maxAttempts) {

        if (event.target.id === 'firstImage') {
            allBusMall[firstImageIndex].votes++;
        }

        else if (event.target.id === 'secondImage') {
            allBusMall[secondImageIndex].votes++;
        }
        else {
            allBusMall[thirdImageIndex].votes++;
        }

        render();

    }

    else {


        imagesSection.removeEventListener('click', handleclick);



    }

   

}


let Button = document.getElementById(`Results`)
let divResult = document.getElementById(`divResult`)
Button.addEventListener(`click`, displayResult)

function displayResult() {
    createChart();
    let ulElement = document.createElement("ul");
    divResult.appendChild(ulElement);

    for (let i = 0; i < allBusMall.length; i++) {
        let liElement = document.createElement("li");
        ulElement.appendChild(liElement);
        liElement.textContent = `${allBusMall[i].name} has ${allBusMall[i].votes}votes and watched ${allBusMall[i].shown}`
        settingItem();
    }

    Button.removeEventListener(`click`, displayResult);
}

function createChart() {
    for (let i = 0; i < allBusMall.length; i++) {
        namesArr.push(allBusMall[i].name)
        votesArr.push(allBusMall[i].votes)
        shownArr.push(allBusMall[i].shown)

        // console.log();
        // console.log(shownArr); 

    }

    let ctx = document.getElementById('myChart').getContext('2d');

    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: namesArr,
            datasets: [{
                data: votesArr,
                label: `NUMBER OF VOTES `,
                backgroundColor: [
                    'rgb(0, 0, 0)'
                ],
                borderColor: [
                    'rgb(0, 0, 0)'
                ],
                borderWidth: 1
            }, {
                data: shownArr,
                label: 'NUMBER OF SHOWN',
                hoverBackgroundColor: ' rgb(255, 255, 0)',
                hoverBorderColor: '#DDDDDD',



            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function settingItem() {
    let data = JSON.stringify(allBusMall);
    localStorage.setItem(`BusMall`, data);
}


function gettingItem() {

    let stringObj = localStorage.getItem('BusMall');
    let normal = JSON.parse(stringObj);

    if(normal){
        allBusMall = normal
    }
   

    render();
}
gettingItem();