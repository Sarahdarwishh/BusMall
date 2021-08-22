'use strict';

// let imgArray = [`images/bag.jpg`, `images/banana.jpg`, `images/bathroom.jpg`, `images/boots.jpg`, `images/breakfast.jpg`, `images/bubblegum.jpg`, `images/chair.jpg`, `images/cthulhu.jpg`, `images/dog-duck.jpg`, `images/dragon.jpg`, `images/pen.jpg `, `images/pet-sweep.jpg`, `images/scissors.jpg`, `images/shark.jpg`, `images/sweep.png`, `images/tauntaun.jpg`, `images/unicorn.jpg`, `images/water-can.jpg`, `images/wine-glass.jpg`]


// let imagesSection = document.getElementById('images');

// let firstImageElement = document.getElementById('firstImage');
// let secondImageElement = document.getElementById('secondImage');
// let thirdImageElement = document.getElementById('thirdImage');

// let Button = document.getElementById(`Results`);
// let divResult = document.getElementById(`divResult`);

// let maxAttempts = 25;
// let userAttemptCounter = 0;

// //constractor and property:

// function product(imgName, imgSrc) {
//     this.imgName = imgName;
//     this.imgSrc = imgSrc;
//     this.timeShownImg = 0;
//     this.timeClick = 0;
//     allBusMall.push(this);

// }

// let allBusMall = [];

// console.log(allBusMall)
// for (let i = 0; i < imgArray.length; i++) {
//     //[0] عشان بدنا القسم الاول بسسسس
//     new product(imgArray[i].split(`.`)[0], imgArray[i]);
// }


// function random() {
//     return Math.floor(Math.random() * imgArray.length);
// }

// let firstImageIndex;
// let secondImageIndex;
// let thirdImageIndex;
// function render() {

//     firstImageIndex = random();
//     secondImageIndex = random();
//     thirdImageIndex = random();

//     while (firstImageIndex === secondImageIndex || secondImageIndex === thirdImageIndex || firstImageIndex === thirdImageIndex) {
//         firstImageIndex = random();
//         secondImageIndex = random();
//         thirdImageIndex = random();

//     }

//     firstImageElement.src = allBusMall[firstImageIndex].imgSrc;
//     secondImageElement.src = allBusMall[secondImageIndex].imgSrc;
//     thirdImageElement.src = allBusMall[thirdImageIndex].imgSrc;

//     allBusMall[firstImageIndex].timeShownImg++;
//     allBusMall[secondImageIndex].timeShownImg++;
//     allBusMall[thirdImageIndex].timeShownImg++;




// }

// render();


// images.addEventListener(`click`, change);
// function change(event) {

//     userAttemptCounter++;
//     if (userAttemptCounter <= maxAttempts) {

//         if (event.target.id === 'firstImage') {
//             allBusMall[firstImageIndex].votes++;
//         }

//         else if (event.target.id === 'secondImage') {
//             allBusMall[secondImageIndex].votes++;
//         }
//         else {
//             allBusMall[thirdImageIndex].votes++;
//         }
//         render();
//     }

//     else {
//         imagesSection.removeEventListener('click', change);

//     }

// }



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
//فانكشن عشان يعطينا رقم راندوم بين كل الارقام 
function generateRandomIndex() {
    return Math.floor(Math.random() * allBusMall.length);
}
let oldImages;

function render() {
//عشان ما يتكرر بالجولة التانية 
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

    if(normal !== null ){
        allBusMall = normal
    }


    render();
}
gettingItem();
