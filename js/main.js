const readMoreBnt = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');
readMoreBnt.addEventListener('click', (e) => {
    text.classList.toggle('show-more');
    if (readMoreBnt.innerText === 'Read More') {
        readMoreBnt.innerText = 'Read Less';
    } else {
        readMoreBnt.innerText = 'Read More';
    }
})

var i = 0; // start point
var images = [];
var time = 3000;


// iamge list
images[0] = '../images/covid.jpg';
images[1] = '../images/swi21.jpg';
images[2] = '../images/swi22.jpg';

// Change Images

function chnageImg(){
document.slide1.src = images[i];

if(i<images.length - 1){
i++;
}else{
    i=0;
}
setTimeout("changeImg()",time);
}

window.onload = chnageImg;