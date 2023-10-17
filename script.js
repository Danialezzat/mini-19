const myQuestion =document.querySelector('.myQues');
const nextbtn = document.querySelector('.next');
let optionOne = document.querySelector('.optionOne');
let optionTwo = document.querySelector('.optionTwo');
let optionThree = document.querySelector('.optionThree');
let optionFour = document.querySelector('.optionFour');
let container = document.querySelector('.container');
let header = document.querySelector('.header');

let option ;
let num = 0;
let trueQues = 0;


const Questions = [
    {'what is the biggest country of the world ?': [{'Iran': false},{'USA': false},{'Russia': true},{'india':false}]},
    {'which country has the most delicious foods ? ': [{'Iran': true},{'USA': false},{'Russia': false},{'india':false}]},
    {'where is Lamborgini made ?': [{'Italy':true},{'USA': false},{'China':false},{'Malesia':false}]},
    {'where is justin bieber from ?': [{'USA':false},{'Canada':true},{'Africa':false},{'Germani':false}]}
];


// to start working
window.addEventListener('load',finalPage());

function questionHeader(){

   

// rendering the head Question 
    myQuestion.innerHTML =`${num + 1 }. ${Object.keys(Questions[num])}`;

// options got values
    option = Object.values(Questions[num]);

    optionOne.innerHTML = Object.keys(option[0][0]);
    optionTwo.innerHTML = Object.keys(option[0][1]);
    optionThree.innerHTML = Object.keys(option[0][2]);
    optionFour.innerHTML = Object.keys(option[0][3]);
    


   

};



//  making the colors and true or flases
function optionPicker1(){
        if((Object.values(option[0][0]))[0] === true){
            optionOne.style.backgroundColor = '#18b400';
            trueQues += 1;
            nextbtn.style.display = 'block';
        } else {
            optionOne.style.backgroundColor = '#e12020';
            nextbtn.style.display = 'block';
            if((Object.values(option[0][1]))[0] === true){
                optionTwo.style.backgroundColor = '#18b400';
            } else if((Object.values(option[0][2]))[0] === true){
                optionThree.style.backgroundColor = '#18b400';
            } else if((Object.values(option[0][3]))[0] === true){
                optionFour.style.backgroundColor = '#18b400';
            }
            
        }
}
function optionPicker2(){
        if((Object.values(option[0][1]))[0] === true){
            optionTwo.style.backgroundColor = '#18b400';
            trueQues =+ 1;
            nextbtn.style.display = 'block';

        } else {
            optionTwo.style.backgroundColor = '#e12020';
            nextbtn.style.display = 'block';
            if((Object.values(option[0][0]))[0] === true){
                optionOne.style.backgroundColor = '#18b400';
            } else if((Object.values(option[0][2]))[0] === true){
                optionThree.style.backgroundColor = '#18b400';
            } else if((Object.values(option[0][3]))[0] === true){
                optionFour.style.backgroundColor = '#18b400';
            }
        }
}
function optionPicker3(){
        if((Object.values(option[0][2]))[0] === true){
            optionThree.style.backgroundColor = '#18b400';
            trueQues =+ 1;
            nextbtn.style.display = 'block';
        } else {
            optionThree.style.backgroundColor = '#e12020';
            nextbtn.style.display = 'block';
            if((Object.values(option[0][1]))[0] === true){
                optionTwo.style.backgroundColor = '#18b400';
            } else if((Object.values(option[0][0]))[0] === true){
                optionOne.style.backgroundColor = '#18b400';
            } else if((Object.values(option[0][3]))[0] === true){
                optionFour.style.backgroundColor = '#18b400';
            };
            
        };
};
function optionPicker4(){
        if((Object.values(option[0][3]))[0] === true){
            optionFour.style.backgroundColor = '#18b400';
            trueQues =+ 1;
            nextbtn.style.display = 'block';
        } else {
            optionFour.style.backgroundColor = '#e12020';
            nextbtn.style.display = 'block';
            if((Object.values(option[0][1]))[0] === true){
                optionTwo.style.backgroundColor = '#18b400';
            } else if((Object.values(option[0][2]))[0] === true){
                optionThree.style.backgroundColor = '#18b400';
            } else if((Object.values(option[0][0]))[0] === true){
                optionOne.style.backgroundColor = '#18b400';
            };
        };
};


// handling next buttom
function next(){
    num += 1;
    finalPage();
    optionOne.style.backgroundColor = 'transparent';
    optionTwo.style.backgroundColor = 'transparent';
    optionThree.style.backgroundColor = 'transparent';
    optionFour.style.backgroundColor = 'transparent';
};

//  to generate to final result
function finalPage(){
    
        if(num <= 3){
            questionHeader();
            console.log(num);
        } else {
            container.innerHTML = ' ';
            let p = document.createElement('p');
            p.className = 'finalText';
            p.innerHTML = `You made ${trueQues} out of 4 Questions !`;
            container.appendChild(p);
            console.assert(trueQues);
        };
        
    
};

