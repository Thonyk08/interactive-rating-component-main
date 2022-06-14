const rating = document.querySelector(".rating");
const ratingCard = document.querySelector(".rate_me");
const thankingCard = document.querySelector(".thank_you");
const userSelection = document.querySelector(".stars");
const submitSlection = document.querySelector(".submit");


const init = function() {
    let optionValue;

    rating.addEventListener("click", function(e) {
        console.log(e);
       
        optionValue = e.target.innerHTML;

        console.log(optionValue);

        if (!optionValue) return;

        
        userSelection.textContent = optionValue; 
    })

    submitSlection.addEventListener("click", function() {
        if (!optionValue) return;

        thankingCard.classList.toggle("hidden");
        ratingCard.classList.toggle("hidden");
    })
}



init();