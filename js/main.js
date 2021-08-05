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