const courseCard = document.getElementById("courseCard");
const courseCardDetails = document.getElementById("courseCardDetails");





courseCard.addEventListener('mouseenter', () => {
    courseCardDetails.classList.toggle('hidden');
});
