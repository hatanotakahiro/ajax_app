function post() {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
  // htmlの記述からidを取得する
  const submit = document.getElementById("submit");
  // クリックしたら発火するようにする
  submit.addEventListener("click", () => {
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
}

window.addEventListener('load', post);