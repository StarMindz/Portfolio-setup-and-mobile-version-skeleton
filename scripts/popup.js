const popUpObject = document.querySelector('.pop-up');
const workCard = document.querySelector('.work-card-container');
const button1 = document.getElementById('button1');
const overlay = document.getElementById('overlay');

const projects = [
  {
    id: 1,
    image: '../images/Snapshoot Portfolio.png',
    bigImage: '../images/Snapshoot-Portfolio-big.png',
    name: 'University Students Dashboard',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'BootStrap',
      'Ruby',
    ],
  },
  {
    id: 2,
    image: '../images/Snapshoot Portfolio.png',
    bigImage: '../images/Snapshoot-Portfolio-big.png',
    name: 'Cruise9ja Mobile Responsive site',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'BootStrap',
      'Ruby',
    ],
  },
  {
    id: 3,
    image: '../images/Snapshoot Portfolio.png',
    bigImage: '../images/Snapshoot-Portfolio-big.png',
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'BootStrap',
      'Flutter',
    ],
  },
  {
    id: 4,
    image: '../images/Snapshoot Portfolio.png',
    bigImage: '../images/Snapshoot-Portfolio-big.png',
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'BootStrap',
      'CSS',
    ],
  },
  {
    id: 5,
    image: '../images/Snapshoot Portfolio.png',
    bigImage: '../images/Snapshoot-Portfolio-big.png',
    name: 'Agro Hack Project',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'BootStrap',
      'Javascript',
    ],
  },
  {
    id: 6,
    image: '../images/Snapshoot Portfolio.png',
    bigImage: '../images/Snapshoot-Portfolio-big.png',
    name: 'My Portfolio project',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'BootStrap',
      'Ruby',
    ],
  },
];

workCard.innerHTML = projects.map((project) => (
  `<section class="work-card">
  <h2>${project.name}</h2>
  <p>${project.description}</p>
  <ul>
      ${project.languages.map((lang) => `<li><a href="">${lang}</a></li>`).join('')}
  </ul>
  <button class="button pop-up-buttons"  type="submit">See Project</button>
</section>`
)).join('');

const buttons = document.querySelectorAll('.pop-up-buttons');

//  Event Listeners for all the buttons in the projects showcased in the projects sections

buttons.forEach((button) => {
  const parent = button.parentNode;
  const title = parent.children[0].innerHTML;
  const description = parent.children[1].innerHTML;
  const tech1 = parent.children[2].children[0].innerHTML;
  const tech2 = parent.children[2].children[1].innerHTML;
  const tech3 = parent.children[2].children[2].innerHTML;

  button.addEventListener('click', () => {
    popUpObject.innerHTML = `
    <div id="popup-head">
    <h2 id="pop-up-heading">${title}</h2>
    <button id="cancel-pup-up" type="submit"><img src="images/cancel.png" alt=""></button>
    </div>
    <ul id="pop-up-tech">
        <li id ="tech-skill1">${tech1}</li>
        <li id ="tech-skill2">${tech2}</li>
        <li id ="tech-skill3">${tech3}</li>
    </ul>
    <div class="popup-container1">
    <img src="../images/Snapshoot Portfolio.png" alt="" id="featured-image">
    <img src="../images/Snapshoot-Portfolio-big.png" alt="" id="featured-image-big">
    <div class="popup-container2">
    <p id="pop-up-description" >${description}</p>
    <div id="pop-up-foot">
        <div id="live">
            <h2 id="live-text" class="down-text">See Live</h2>
            <img id="live-icon" src="images/Icon1.png" alt="source icon">
        </div>
        <div id="source">
            <h2 id="source-text" class="down-text">See Source</h2>
            <img id="source-icon" src="images/Vector1.png" alt="Github icon">
        </div>
    </div>
    </div>
    </div>
  `;
    popUpObject.classList.add('active');
    overlay.classList.add('active');
    const cancel = document.querySelector('#cancel-pup-up');
    cancel.addEventListener('click', () => {
      popUpObject.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
});

//  Event Listener to the button in the Featured project session
button1.addEventListener('click', () => {
  popUpObject.innerHTML = `
  <div id="popup-head">
  <h2 id="pop-up-heading">${document.getElementsByClassName('sub-head')[0].innerHTML}</h2>
  <button id="cancel-pup-up" type="submit"><img src="images/cancel.png" alt=""></button>
  </div>
  <ul id="pop-up-tech">
      <li id ="tech-skill1">${document.getElementById('skill1').innerHTML}</li>
      <li id ="tech-skill2">${document.getElementById('skill2').innerHTML}</li>
      <li id ="tech-skill3">${document.getElementById('skill3').innerHTML}</li>
  </ul>
  <div class="popup-container1">
  <img src="../images/Snapshoot Portfolio.png" alt="" id="featured-image">
  <img src="../images/Snapshoot-Portfolio-big.png" alt="" id="featured-image-big">
  <div class="popup-container2">
  <p id="pop-up-description" >${document.getElementsByClassName('main-style')[0].innerHTML}</p>
  <div id="pop-up-foot">
      <div id="live">
          <h2 id="live-text" class="down-text">See Live</h2>
          <img id="live-icon" src="images/Icon1.png" alt="source icon">
      </div>
      <div id="source">
          <h2 id="source-text" class="down-text">See Source</h2>
          <img id="source-icon" src="images/Vector1.png" alt="Github icon">
      </div>
  </div>
  </div>
  </div>
`;
  popUpObject.classList.add('active');
  overlay.classList.add('active');

  const cancel = document.querySelector('#cancel-pup-up');
  cancel.addEventListener('click', () => {
    popUpObject.classList.remove('active');
    overlay.classList.remove('active');
  });
});

//  Event Listerner to the overlay activated when a popup is active

overlay.addEventListener('click', () => {
  popUpObject.classList.remove('active');
  overlay.classList.remove('active');
});
