function onClickGet(){
  chrome.tabs.query({ active: true, currentWindow: true}, function (tab) {
    // console.log(tab[0].title)
    // document.getElementById("title").innerHTML = tab[0].title
    let arr = ['https://www.linkedin.com/in/isanur-sardar-a14106185','https://www.linkedin.com/in/ujjwal-pandey-93a0951a9/','https://www.linkedin.com/in/om-singh-5506a5228/']
    arr.forEach(async (x,i)=>{
        window.open(x,"_blank",i)
  });}
  )
  }
  
  document.getElementById("btn").addEventListener("click",onClickGet)
  
  