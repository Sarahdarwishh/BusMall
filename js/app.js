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


}

new BusMall('bag.jpg', 'images/bag.jpg');
new BusMall('banana.jpg', 'images/banana.jpg');
new BusMall('bathroom.jpg', 'images/bathroom.jpg');
new BusMall('boots.jpg', 'images/boots.jpg');
new BusMall('breakfast.jpg', 'images/breakfast.jpg');
new BusMall('bubblegum.jpg', 'images/bubblegum.jpg');
new BusMall('chair.jpg', 'images/chair.jpg');
new BusMall('cthulhu.jpg', 'images/cthulhu.jpg');
new BusMall('dog-duck.jpg', 'images/dog-duck.jpg');
new BusMall('dragon.jpg', 'images/dragon.jpg');
new BusMall('pen.jpg', 'images/pen.jpg');
new BusMall('pet-sweep.jpg', 'images/pet-sweep.jpg');
new BusMall('scissors.jpg', 'images/scissors.jpg');
new BusMall('shark.jpg', 'images/shark.jpg');
new BusMall('sweep.png', 'images/sweep.png');
new BusMall('tauntaun.jpg', 'images/tauntaun.jpg');
new BusMall('unicorn.jpg', 'images/unicorn.jpg');
new BusMall('water-can.jpg', 'images/water-can.jpg');
new BusMall('wine-glass.jpg', 'images/wine-glass.jpg');

// console.log(allBusMall);



function generateRandomIndex() {
    return Math.floor(Math.random() * allBusMall.length);
}

// console.log(generateRandomIndex())

function render() {
    firstImageIndex = generateRandomIndex();
    secondImageIndex = generateRandomIndex();
    thirdImageIndex = generateRandomIndex();

    while (firstImageIndex === secondImageIndex || secondImageIndex === thirdImageIndex || firstImageIndex === thirdImageIndex) {
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



let images = document.getElementById('images');

images.addEventListener('click', handleclick);

function handleclick(event) {
    render();
    if (userAttemptCounter < maxAttempts - 1) {
        if (event.target.id === `firstImage`) {
            allBusMall[firstImageIndex].votes++;
            userAttemptCounter++;
            //    console.log( userAttemptCounter++);

        }

        else if (event.target.id === `secondImage`) {
            allBusMall[secondImageIndex].votes++;
            userAttemptCounter++;


            // console.log( userAttemptCounter++);
        }
        else if (event.target.id === `thirdImage`) {
            allBusMall[thirdImageIndex].votes++;
            userAttemptCounter++;


            // console.log( userAttemptCounter++);
        }
        render();

    }
    else {
        images.removeEventListener('click', handleclick);

        for (let i = 0; i < allBusMall.length; i++) {

            votesArr.push(allBusMall[i].votes);
            shownArr.push(allBusMall[i].shown);

        }

        btn = document.createElement('input');
        images.appendChild(btn);
        btn.textContent = 'View Results';
        btn.addEventListener('click', handleclick);
        btn.setAttribute('type', 'submit');
        btn.setAttribute('value', 'View Results');
        btn.id = 'done';

    }
}

let btn;


function results() {


    let list = document.getElementById('list');

    for (let i = 0; i < allBusMall.length; i++) {

        let listItem = document.createElement('li');

        list.appendChild(listItem);

        listItem.textContent = `${allBusMall[i].name} had ${allBusMall[i].votes}  votes,  and was seen ${allBusMall[i].shown} times`;


    }
    for (let i = 0; i < allBusMall.length; i++) {

        votesArr.push(allBusMall[i].votes);
        shownArr.push(allBusMall[i].shown);

    }

}
results();

















