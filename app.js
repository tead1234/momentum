// html 엘리멘트를 가져옴
const hell1 = document.querySelector("div.title");

function handleTitleclick() {
    hell1.style.color = "red";
};
function handleTitlemouse(){
    hell1.innerText = "mouse is here!"
}
function handleTitlemouseleave(){
    hell1.innerText = "mouse is gone!"
}
function handleresize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("copier!!")
}
function handleWindowOffline(){
    alert("No Wifi");
}
function handleWindowOnline(){
    alert("OMG WIFI")
}
//hell1.onclick("clik",handleTitleclick); // ()을 넣으면바로 실행인데 내가 하고싶은건 클릭후 실행
hell1.addEventListener("mouseenter", handleTitlemouse); // ()을 넣으면바로 실행인데 내가 하고싶은건 클릭후 실행
hell1.addEventListener("mouseleave", handleTitlemouseleave); // ()을 넣으면바로 실행인데 내가 하고싶은건 클릭후 실행

window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("offline", handleWindowOnline);
fasa