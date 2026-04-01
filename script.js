//hover card
let courseCardDetails = document.getElementById("courseCardDetails");

//Cart
let itemsInCart = 0;
let cartNotification = document.getElementById("cartNoti");
let navCartIcon = document.getElementById("navCart");

let addToCartBtn = document.getElementById("addToCartbtn")


//hover Card:
let courseData = [
    {
        title: "The python mega course",
        courseItems : ["Build 10 apps", "Master Python", "Web scraping"],
        category: "Python"
    },

      {
        title: "Facebook Ads & Marketing mastery",
        courseItems : ["Ads manager", "Retargeting", "Copywriting"],
        category: "Marketing"
    },  
    {
        title: "Complete Python Bootcamp From Zero to Hero in Python",
        courseItems : ["Build games", "learn Python", "automation"],
        category: "IT & software"
    },
     {
        title: "Investing In Stocks The Complete Course!",
        courseItems : ["discover stocks", "make a bid", "finance"],
        category: "Marketing"
    },
    

]

function updateCardDetails(index){
    let data = courseData[index];
    

    //Category
    let categoryName = document.getElementById("courseCategory");
    categoryName.innerHTML = data.category;

    //title
    document.getElementById("CourseTitle").innerHTML = data.title;


    //course items:
    let courseItemsList = document.getElementById("courseListDetails");
    courseItemsList.innerHTML = "";

    data.courseItems.forEach(item=> {
        let li = document.createElement("li");
        li.className = "flex items-start gap-2 text-sm tracking-[-1%] text-gray-600 mb-2";
        li.innerHTML = `
            <img src="./assets/Check.svg" class="w-6 h-6" >
            <p>${item}</p>
        `;
        courseItemsList.appendChild(li)

    }) 

    courseCardDetails.classList.remove('hidden');
     
}

document.querySelectorAll('.courseCard').forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        card.appendChild(courseCardDetails);
        updateCardDetails(index);
    });

    card.addEventListener('mouseleave', () => {
        courseCardDetails.classList.add('hidden');
   
});
})


//Cart 
addToCartBtn.addEventListener('click', ()=> {
    itemsInCart++;
    cartNotification.innerText = itemsInCart;

    if(itemsInCart > 0){
        cartNotification.classList.remove('hidden')
    }
})

