function getFirstSelector(selector) {
  return (document.querySelector(`${selector}`));
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const liRanks = document.querySelectorAll('ul.ranked-list li.innerHTML');
  for (let i = 0; liRanks.length > i; i++) {
   liRanks[i] + parseInt(n);
  }
  return;
}

function deepestChild() {
  
}