const score_int = document.querySelector('#score-int');
const name = document.querySelector('#name');
const score_msg = document.querySelector('#score-msg');

//Minimum score set as 200 for
const MIN_SCORE = 200;

//Getting the score and name variables stored in local storage
let name_storage = localStorage.getItem('name');
let score_storage = localStorage.getItem('score');

score_int.innerHTML = score_storage
name.innerHTML = `${name_storage} your score is: `;


if (MIN_SCORE >= score_storage) {
    score_msg.innerHTML = `Try Again`
} else {
    score_msg.innerHTML = `Well done`
}
