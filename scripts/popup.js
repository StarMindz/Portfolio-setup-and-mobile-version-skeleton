const popUp = {
  name: document.getElementById('pop-up-heading'),
  description: document.getElementById('pop-up-description'),
  image: document.getElementById('featured-image'),
  bigImage: document.getElementById('featured-image-big'),
  technology: [document.getElementById('tech-skill1'), document.getElementById('tech-skill2'), document.getElementById('tech-skill3')],
  live: { text: document.getElementById('live-text'), icon: document.getElementById('live-icon') },
  source: { text: document.getElementById('source-text'), icon: document.getElementById('source-icon') },
};

const maper = function (name, description, image, image2, technology) {
  popUp.name.innerHTML = name;
  popUp.description.innerHTML = description;
  popUp.image.src = image;
  popUp.bigImage.src = image2;
  popUp.technology[0].innerHTML = technology[0];
  popUp.technology[1].innerHTML = technology[1];
  popUp.technology[2].innerHTML = technology[2];
};

const button1 = document.querySelector('#button1');
var buttons = document.querySelectorAll(".button");
// const button2 = document.querySelector('#button2');
// const button3 = document.querySelector('#button3');
// const button4 = document.querySelector('#button4');
// const button5 = document.querySelector('#button5');
// const button6 = document.querySelector('#button6');
// const button7 = document.querySelector('#button7');
const cancel = document.querySelector('#cancel-pup-up');
const popUpObject = document.querySelector('.pop-up');
const overlay = document.querySelector('#overlay');


button1.addEventListener('click', () => {
  maper('Multi Post Stories',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    'images/Snapshoot Portfolio.png',
    'images/Snapshoot-Portfolio-big.png',
    ['Html', 'Bootstrap', 'Ruby on Rails']);

  popUpObject.classList.add('active');
  overlay.classList.add('active');
});

cancel.addEventListener('click', () => {
  popUpObject.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  popUpObject.classList.remove('active');
  overlay.classList.remove('active');
});

buttons.forEach((button) =>
{   var parent = button.parentNode;
    var title = parent.children[0].innerHTML;
    var description = parent.children[1].innerHTML;
    button.addEventListener('click', () => {
    maper(title,
      description,
      'images/Snapshoot Portfolio.png',
      'images/Snapshoot-Portfolio-big.png',
      ['Html', 'Bootstrap', 'Ruby on Rails']);
  
    popUpObject.classList.add('active');
    overlay.classList.add('active');
  });     
});