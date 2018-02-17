function getFirstSelector(selector) {
  return (document.querySelector(`${selector}`));
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const liRanks = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; liRanks.length > i; i++) {
   liRanks[i].innerHTML = parseInt(liRanks[i].innerHTML) + n;
  }
}

function deepestChild() {
var theDivIsDeep = document.querySelector('#grand-node div div div div')
return theDivIsDeep.innerHTML
}