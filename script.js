// const question = document.querySelectorAll(".question");
// const btn = document.querySelectorAll(".btn");
// const content = document.querySelectorAll(".content");

// question.forEach((e) => {
//   const localBtn = e.querySelector(".btn");
//   const localContent = e.querySelector(".content");
//   localBtn.addEventListener("click", () => {
//     const all_btn = document.querySelectorAll(".btn");
//     const all_Content = document.querySelectorAll(".content");
//     all_btn.forEach((localBtn) => {
//       all_Content.forEach((localContent) => {
//         localBtn.classList.remove("active");
//         localContent.classList.remove("active");
//       });
//     });
//     if (
//       localBtn.classList.contains("active") &&
//       localContent.classList.contains("active")
//     ) {
//       localBtn.classList.remove("active");
//       localContent.classList.remove("active");
//     } else {
//       localBtn.classList.add("active");
//       localContent.classList.add("active");
//     }
//   });
// });

const questions = document.querySelectorAll(".question");
questions.forEach((element) => {
  const currentBtn = element.querySelector(".btn");
  currentBtn.addEventListener("click", () => {
    questions.forEach((e) => {
      if (element !== e) {
        e.classList.remove("active");
      }
    });
    element.classList.toggle("active");
  });
});
