
const courseCard = document.getElementById("courseCard");
const courseCardDetails = document.getElementById("courseCardDetails");





courseCard.addEventListener('mouseenter', () => {
    courseCardDetails.classList.remove('hidden');
});

courseCard.addEventListener('mouseleave', () => {
    courseCardDetails.classList.add('hidden');
});






