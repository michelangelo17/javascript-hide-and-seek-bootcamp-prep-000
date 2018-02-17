function getFirstSelector(selector) {
  return (document.querySelector(`${selector}`));
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const liRanks = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; liRanks.length > i; i++) {
   console.log(parseInt(liRanks[i].innerHTML) + n);
  }
}

function deepestChild() {
  
}