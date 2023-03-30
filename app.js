
const items = [
  {
    id: 1,
    img: "./images/img1.jpeg"
  },
  {
    id: 2,
    img: "./images/img2.jpeg"
  },
  {
    id: 3,
    img: "./images/img3.jpeg"
  },
];

const imagecontainer = document.querySelector('.image');

let currid=1;

document.addEventListener('DOMContentLoaded',()=> {
  const image = document.createElement('img');
  image.setAttribute('src', items[0].img);
  imagecontainer.appendChild(image);
});

const next = document.querySelector(".next");
const before = document.querySelector(".before");

function insertImage(index){
  const image = document.createElement('img');
  image.setAttribute('src', items[index].img);
  imagecontainer.appendChild(image);
}

next.addEventListener("click", () => {
  currid+=1;
  console.log(currid);
  currid%=3;
  imagecontainer.innerHTML='';
  insertImage(currid);
})

before.addEventListener("click", () => {
  currid-=1;
  console.log(currid);
  if(currid<1){
    currid+=3;
  }
  currid%=3;
  imagecontainer.innerHTML='';
  insertImage(currid);
})

