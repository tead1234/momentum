const clock = document.querySelector("h2#clock");
function getTime () {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
 
    clock.innerText =`${hours}:${minutes}:${seconds }`; // 변수를 바로 넣는 방법
}

getTime()
setInterval(getTime, 1000); // 정해진 시간마다 함수를 반복
//setTimeout(sayHello, 5000); // 얘는 일정시간후 한번만 반복

