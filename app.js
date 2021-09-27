//movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//moving animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) /10;
  let yAxis = (window.innerHeight / 2 - e.pageY) /10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//animate in
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none'
  //popuot
  title.style.transform = "translateX(150px)";
});

//animate out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //popback
  title.style.transform = "translateX(0px";
});