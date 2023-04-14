const init = () => {
  
//grab the form by id and assign it to a variable
const inputForm = document.querySelector('form');

//add an event listener to the form and prevent default behavior
inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector("input#searchByID");

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
        const title = document.querySelector("section#movieDetails h4")
        const summary = document.querySelector("section#movieDetails p")

        title.innerText = data.title;
        summary.innerText = data.summary;
    })
});
};

document.addEventListener('DOMContentLoaded', init);
