const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  confirmpassword = document.querySelector("#confirm-password"),
  name = document.querySelector("#name"),
  mbti = document.querySelector("#mbti")
  about = document.querySelector("#about");
  signupBtn = document.querySelector("#button");

signupBtn.addEventListener("click", signup);

function signup() {
  if (!id.value) return alert("아이디를 입력해주십시오.");
  if (password.value !== confirmpassword.value)
    return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id.value,
    password: password.value,
    name: name.value,
    mbti: mbti.value,
    about: about.value
  };

  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
}