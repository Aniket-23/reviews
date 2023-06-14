// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'assets/random.jpeg',
      text: "Susan Smith, the web designer at our startup, has fallen short of our expectations. Her design work has lacked creativity and originality, failing to deliver the impactful and visually appealing designs we were hoping for.",
    },
    {
      id: 2,
      name: 'Ayushya Chongder',
      job: 'IOT operator',
      img: 'assets/ayushya.jpg',
      text: 'Ayushya Chongder is an exceptional IOT expert who has made a remarkable impact at our startup. Her knowledge and expertise in the field of Internet of Things have been invaluable to the growth of company. Ayushya consistently demonstrates a strong understanding of emerging technologies and their practical applications, enabling us to develop innovative and efficient solutions.',
    },
    {
      id: 3,
      name: 'harsh vardhan singh',
      job: 'intern',
      img: 'assets/harsh.jpg',
      text: 'Harsh Vardhan Singh\'s performance as an intern at our startup has been disappointing. Despite being given clear instructions and ample guidance, he consistently struggled to meet even the basic expectations.',
    },
    {
      id: 4,
      name: 'Aniket Singh',
      job: 'the boss',
      img: 'assets/aniket.jpg',
      text: 'Aniket Singh, our boss at the startup, has been an exceptional leader and mentor. His vision and strategic guidance have been instrumental in driving our company\'s success.',
    },
  ];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const random = document.querySelector(".random-btn");

// console.log(reviews);

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

// function to display the person
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

next.addEventListener("click", () => {
    currentItem++;
    if (currentItem==reviews.length){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prev.addEventListener("click", () => {
    currentItem--;
    if (currentItem<0) {
        currentItem = reviews.length-1;
    }
    showPerson(currentItem);
});

random.addEventListener("click", () => {
    x = Math.floor(Math.random()*reviews.length);
    showPerson(x);
});