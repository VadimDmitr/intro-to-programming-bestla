const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML = `Vadim Dmitrochenko ${thisYear}`;

footer.appendChild(copyright);

const skills = ['JavaScript', 'HTML', 'CSS'];

const skillsSection = document.getElementById('skills');

let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li'); 
  skill.innerHTML = `${skills[i]}`;
  skillsList.appendChild(skill);
}