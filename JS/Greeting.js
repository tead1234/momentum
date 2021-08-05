const loginform = document.querySelector("#login-form"); // #표시는 id란뜻
const loginInput = loginform.querySelector('#login-form input');
const greeting = document.querySelector("#greeting")
const HIDDEN ='hidden';
const USERNAME_KEY = "username";
const savedUserName = localStorage.getItem('USERNAME_KEY');

function faintGreeting() {
    const Username = localStorage.getItem('USERNAME_KEY');
    greeting.innerText = `hello ${Username}`; // 변수랑 스트링 같이 적기    
    greeting.classList.remove(HIDDEN);
};

function onLoginButton(event) {
    event.preventDefault()
    const UsernameByInput= loginInput.value;
    loginform.classList.add(HIDDEN) // 브라우저가 알아서 하도록 html로 수정할수 있음
    localStorage.setItem("USERNAME_KEY",UsernameByInput);
    faintGreeting();

};

loginform.addEventListener("submit",onLoginButton)


if(savedUserName == null) {
    loginform.classList.remove(HIDDEN);
    loginform.addEventListener("submit", onLoginButton);
}else{
   faintGreeting();
};