const h1 = document.querySelector(".hello:first-child h1"); // :다음엔 그냥 이름을 넣어준거

function handleMouseEnter() {
        h1.classList.toggle("active");
}
h1.addEventListener("click",handleMouseEnter);
