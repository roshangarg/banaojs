function onClickGet(){
chrome.tabs.query({ active: true, currentWindow: true}, function (tab) {
  console.log(tab[0].title)
  document.getElementById("title").innerHTML = tab[0].title
});}

document.getElementById("btn").addEventListener("click",onClickGet)