const loginform = document.querySelector("#login-form"); // #표시는 id란뜻
const loginInput = loginform.querySelector('input');
const loginButton = loginform.querySelector('Button');

function onLoginButton() {
    const UserName = loginInput.value;
    console.log(UserName); // 브라우저가 알아서 하도록 html로 수정할수 있음
};


loginButton.addEventListener("click", onLoginButton);