const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    // console.log(e.target.dataset.id);

    // Remove active class from all buttons
    buttons.forEach((btn) => btn.classList.remove('active'));

    // Add active class to clicked button
    e.target.classList.add('active');

    // Hide all content
    contents.forEach((content) => content.classList.remove('active'));

    // Show the content related to clicked button
    const element = document.getElementById(id);
    element.classList.add('active');
  });
});
