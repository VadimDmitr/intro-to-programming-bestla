
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');

copyright.innerHTML = `Vadim Dmitrochenko ${thisYear}`;
footer.appendChild(copyright);

let skills = ['HTML', 'CSS','JavaScript'];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li'); 
  skill.innerHTML = `${skills[i]}`;
  skillsList.appendChild(skill);
}

let messageSection = document.querySelector('#messages');
let messageList = messageSection.querySelector('ul');
let messageForm = document.querySelector('[name = "leave_message"]')



messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let name = event.target.name;
  let email = event.target.email;
  let message = event.target.message;
  let newMessage = document.createElement('li');

newMessage.innerHTML = "<a href='mailto:" + email.value + "'>" + name.value + "</a><span>  wrote: " + message.value + "</span>   ";
messageList.appendChild(newMessage);

let removeButton = document.createElement('button');
removeButton.innerText = "remove";
removeButton.setAttribute("type", "button");
removeButton.addEventListener('click', (event) => {
  let entry = removeButton.parentNode;
  entry.remove();
  messagesSectionShowHide();
  
})
newMessage.appendChild(removeButton);

  console.log (name.value, email.value, message.value)
  messagesSectionShowHide();
  messageForm.reset();
  })
  
function messagesSectionShowHide(){
  if (messageList.childElementCount !=0) {
      messageSection.style.display = "block";
  } else {
      messageSection.style.display = "none";
  }
}