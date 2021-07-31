const loginform = document.querySelector("#login-form"); // #표시는 id란뜻
const loginInput = loginform.querySelector('#login-form input');
const greeting = document.querySelector("#greeting")
const HIDDEN ='hidden';
const USERNAME_KEY = "username";


function faintGreeting(username) {
    greeting.innerText = `hello ${username}`; // 변수랑 스트링 같이 적기    
    greeting.classList.remove(HIDDEN);
}

function onLoginButton(event) {
    event.preventDefault()
    const UserName = loginInput.value;
    loginform.classList.add(HIDDEN) // 브라우저가 알아서 하도록 html로 수정할수 있음
    localStorage.setItem("USERNAME_KEY", UserName);
    faintGreeting(UserName);

};

loginform.addEventListener("submit",onLoginButton)

const savedUserName = localStorage.getItem('USERNAME_KEY');
if(savedUserName ==null) {
    loginform.classList.remove(HIDDEN);
    loginform.addEventListener("submit", onLoginButton);
}else{
   faintGreeting(savedUserName);
}