const score_int = document.querySelector('#score-int');
let score_storage = localStorage.getItem('score');
score_int.innerHTML = score_storage
console.log(score_storage)
