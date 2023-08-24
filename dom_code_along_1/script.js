const header = document.querySelector
    ("header");
const hideButton = document.getElementById
    ('hideHeaderButton');
const nameInput = document.getElementById
    ("name");
const emailInput = document.getElementById
    ('email');
const showButton = document.getElementById
    ('showHeaderButton');
const signUpForm = document.getElementById
    ("signup-form");
const resetBtn = document.getElementById
    ("reset-btn");
const peopleList = document.getElementById
    ("people-list");



hideButton.addEventListener("click", () => {
    //select the header
    console.log(header);
    //hide the header
    //1. could add hidden attribute
    //    header.hidden = true;
    //2. could make a hide class in css
    header.classList.add('hide');
    //3. could style.display = "none"
    //  header.style.display = "none";
});

showButton.addEventListener('click', () => {
    header.classList.remove('hide')
})

//need to prevent the form "submit" default behavior from refreshing page!!!
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //make an empty div
    //put name in that div
    const nameDiv = document.createElement('div');
    nameDiv.textContent = nameInput.value;

    //make another empty div
    //put email in that div
    const emailDiv = document.createElement('div');
    emailDiv.textContent = emailInput.value;
    //make an empty li
    const personLi = document.createElement("li");
    personLi.appendChild(nameDiv);
    personLi.appendChild(emailDiv);
    //put 2 divs in the li
    peopleList.appendChild(personLi);

});

//reset the values inside input fields name/email
resetBtn.addEventListener('click', () => {
    nameInput.value = '';
    emailInput.value = '';
});

