const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.getElementById("js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
// Thêm sự kiện cho cả chuột và cảm ứng
function moveNoButton() {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// Sự kiện trên máy tính
noBtn.addEventListener("mouseover", moveNoButton);

// Sự kiện trên điện thoại
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Ngăn chặn hành động mặc định để tránh nhấp vào nút
  moveNoButton();
});


// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});

