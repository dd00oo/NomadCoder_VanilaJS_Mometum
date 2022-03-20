/*
요구사항
1.실시간 시계 OK
2.로컬 스토리지를 사용한 로그인 OK
3.로컬 스토리지를 사용한 투두리스트 OK
4.랜덤 배경 이미지 OK
5.날씨와 위치 (geolocation) OK
6.여러분의 CSS 실력을 뽐내주세요
*/

const hello = document.querySelector("#hello");
const inputName = document.querySelector("#inputName");
const USER_NAME_KEY = "userName";

function loginCheck() {
  const userName = localStorage.getItem(USER_NAME_KEY);

  if (!userName) {
    hello.innerHTML = "What your Name?";
    inputName.style.visibility = "visible";
  } else {
    hello.innerHTML = `Hello, ${userName}`;
    inputName.style.display = "none";
  }
}

loginCheck();
inputName.addEventListener("keydown", function (e) {
  const keyCode = e.keyCode;
  //console.log("pushed key : " + e.key);

  if (keyCode === 13) {
    // Enter key
    if (inputName.value.length > 0) {
      //console.log("Save User : " + inputName.value);
      localStorage.setItem(USER_NAME_KEY, inputName.value);
      loginCheck();
    }
  }
});

//document.addEventListener("submit", loginCheck);