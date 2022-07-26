let projectButton = document.getElementById('project-button');
let body = document.querySelector('body');
//let aboutMeLink = document.getElementById('about-me-link');
let extrasLink = document.getElementById('extras-link');
let backgroundImage = document.querySelector('.background-image-about-me');
let quoteContainer = document.querySelector('.quote-container');
let blogLink = document.getElementById('blog-link');
let innerContent = document.querySelector('.inner-content');
//innerContent.classList.add('hidden-inner-content');
innerContent.classList.add('about-me-content');
let innerContentContent = document.createElement('p');
innerContentContent.textContent = "I am shreyas, a 20 year old student of Computer Science and Artificial Intelligence at University of Leeds. My areas of interest in programming are Artificial Intelligence, Augmented Reality and Computer Graphics, and creating polished User Interfaces for smooth user experiences. I have created various projects in the past, one of them being this website itself! The biggest project I have undertaken so far is a commercial booking system of scooters across leeds(leedSkrrt). You can find more descriptive explanations of each project in the projects section. Outside of coding, my major interests include playing cricket, being a fitness freak and the financial world.";
innerContent.appendChild(innerContentContent);


let projectList = document.createElement('ul');
projectList.setAttribute('style','list-style: none;');
let routeFindingProject = document.createElement('li');
let routeFindingProjectLink = document.createElement('a');
routeFindingProjectLink.href = "https://gitlab.com/comp1921_2021/sc20sh";
routeFindingProjectLink.innerHTML = "Route Finding and Virtual Library";
routeFindingProject.appendChild(routeFindingProjectLink);
let leedSkrrt = document.createElement('li');
let leedSkrrtLink = document.createElement('a');
leedSkrrtLink.href = "https://gitlab.com/sc20sh/scooter-project";
leedSkrrtLink.innerHTML="leedSkrrt";
leedSkrrt.appendChild(leedSkrrtLink);
appendProjectListChildren();
let blogList = document.createElement('ul');
blogList.setAttribute('style','list-style: none;');
let launchDay = document.createElement('li');
let launchDayLink = document.createElement('a');
launchDayLink.href = "index.html";
launchDayLink.innerHTML = "Launch Day!";
launchDay.appendChild(launchDayLink);
appendBlogListChildren();
let resumeButton = document.getElementById('resume-button');
let justReturnedFromClick = false;




projectButton.addEventListener('mouseover', hoverOverHeaderLinks);
projectButton.addEventListener('mouseleave', leaveHoverOverHeaderLinks);
projectButton.addEventListener('click', toggleLinks);
blogLink.addEventListener('mouseover',hoverOverHeaderLinks);
blogLink.addEventListener('mouseleave',leaveHoverOverHeaderLinks);
blogLink.addEventListener('click',toggleLinks);
resumeButton.addEventListener('mouseover', hoverOverHeaderLinks);
resumeButton.addEventListener('mouseleave', leaveHoverOverHeaderLinks);

//mouse hover event listeners for bottom links
//aboutMeLink.addEventListener('mouseover',hoverOverBottomLinks);
//aboutMeLink.addEventListener('mouseleave',leaveHoverOverBottomLinks);
extrasLink.addEventListener('mouseover',hoverOverBottomLinks);
extrasLink.addEventListener('mouseleave',leaveHoverOverBottomLinks);




function appendBlogListChildren(){
  blogList.appendChild(launchDay);
}

function appendProjectListChildren(){
  projectList.appendChild(routeFindingProject);
  projectList.appendChild(leedSkrrt);
}


function displayBlogLinks(){
  innerContentReadyToRemove();
  setTimeout(function(){innerContentReadyToPrint();},1000);
}


function toggleLinks(event){
  if(backgroundImage.classList.contains('links-displayed')){
    backgroundImage.classList.remove('links-displayed');
    unblurBackgroundImage();
    normalLinkColours(quoteContainer);
    innerContentLinksReadyToRemove();
    innerContent.classList.remove('hidden-inner-content');
    innerContent.classList.add('hidden-inner-content');
    justReturnedFromClick = true;
    setTimeout(function(){
      backgroundImage.classList.remove('clear-image');
      innerContent.classList.remove('animate-fade-out-links');
      innerContent.innerHTML = "";
    },500);
  }
  else{
    let listToBePrinted = listDecider(event);
    backgroundImage.classList.add('links-displayed');
    innerContentReadyToRemove();
    setTimeout(function(){
      innerContent.innerHTML="";
      innerContent.appendChild(listToBePrinted);
      innerContentLinksReadyToPrint();
    },500);
  }
}


function listDecider(event){
  switch (event.target.id) {
    case 'project-button':
      return projectList;
      break;
    case 'blog-link':
      return blogList;
      break;
    default:
      return projectList;
  }
}

function innerContentLinksReadyToRemove(){
  innerContent.classList.add('animate-fade-out-links');
  innerContent.classList.remove('animate-fade-in-links');
}


function innerContentLinksReadyToPrint(){
  innerContent.classList.add('animate-fade-in-links');
  innerContent.classList.remove('animate-fade-out');
}


function hoverOverHeaderLinks(event){
  if (justReturnedFromClick) return;
  if(backgroundImage.classList.contains('links-displayed')) return;
  //changeLinkColours(aboutMeLink);
  changeLinkColours(extrasLink);
  changeLinkColours(quoteContainer);
  if(event.target.id == 'project-button'){
    changeLinkColours(blogLink);
    changeLinkColours(resumeButton);
  }
  else if (event.target.id == 'blog-link'){
    changeLinkColours(projectButton);
    changeLinkColours(resumeButton);
  }
  else{
    changeLinkColours(projectButton);
    changeLinkColours(blogLink);
  }
  blurBackgroundImage();
  printQuoteOnScreen(event);
}

function leaveHoverOverHeaderLinks(event){
  if(backgroundImage.classList.contains('links-displayed')) return;
  //normalLinkColours(aboutMeLink);
  normalLinkColours(extrasLink);
  normalLinkColours(quoteContainer);
  if(event.target.id == 'project-button'){
    normalLinkColours(blogLink);
    normalLinkColours(resumeButton);
  }
  else if (event.target.id == 'blog-link'){
    normalLinkColours(projectButton);
    normalLinkColours(resumeButton);
  }
  else{
    normalLinkColours(projectButton);
    normalLinkColours(blogLink);
  }
  unblurBackgroundImage();
  innerContentReadyToRemove();
  innerContent.classList.remove('hidden-inner-content');
  innerContent.classList.add('hidden-inner-content');
  justReturnedFromClick = false;
  setTimeout(function(){
    innerContent.classList.remove('animate-fade-out');
    backgroundImage.classList.remove('clear-image');
    innerContent.innerHTML = "";
    innerContent.classList.remove('hidden-inner-content');
    innerContent.classList.add('about-me-content');
    innerContent.appendChild(innerContentContent);
  },500);
}

function hoverOverBottomLinks(){
  changeLinkColours(quoteContainer);
  blurBackgroundImage();
  printQuoteOnScreen(event);
}

function leaveHoverOverBottomLinks(){
  normalLinkColours(quoteContainer);
  unblurBackgroundImage();
  innerContentReadyToRemove();
  setTimeout(function(){
    innerContent.classList.remove('animate-fade-out');
    backgroundImage.classList.remove('clear-image');
    innerContent.innerHTML = "";
    innerContent.classList.add('about-me-content');
    innerContent.appendChild(innerContentContent);
  },500);
}


function printQuoteOnScreen(event){
  innerContent.classList.remove('about-me-content');
  let quote = hoverQuoteToBePrintedOnScreen(event);
  innerContent.textContent = quote;
  innerContentReadyToPrint();
}

function innerContentReadyToPrint(){
  innerContent.classList.add('animate-fade-in');
  innerContent.classList.remove('animate-fade-out');
  if(innerContent.classList.contains('animate-fade-in-links') || innerContent.classList.contains('animate-fade-out-links')){
    innerContent.classList.remove('animate-fade-in-links');
    innerContent.classList.remove('animate-fade-out-links');
  }
}


function innerContentReadyToRemove(){
  innerContent.classList.add('animate-fade-out');
  innerContent.classList.remove('animate-fade-in');
  if(innerContent.classList.contains('animate-fade-in-links') || innerContent.classList.contains('animate-fade-out-links')){
    innerContent.classList.remove('animate-fade-in-links');
    innerContent.classList.remove('animate-fade-out-links');
  }
}


function blurBackgroundImage(){
  backgroundImage.classList.remove('clear-image');
  backgroundImage.classList.add('blurred-image');
}

function unblurBackgroundImage(){
  backgroundImage.classList.remove('blurred-image');
  backgroundImage.classList.add('clear-image');
}

function changeLinkColours(selector){
  selector.classList.remove('unhide');
  selector.classList.add('hide');
}

function normalLinkColours(selector){
  selector.classList.remove('hide');
  selector.classList.add('unhide');
}

function hoverQuoteToBePrintedOnScreen(event){
  switch (event.target.id) {
    case "project-button":
      return "A comprehensive list of links to repositories of previous projects.";
      break;
    case "blog-link":
      return "A blog of my recent events in my life in and outside of software.";
      break;
    case "about-me-link":
      return "General information behind me and my life up until now.";
      break;
    case "extras-link":
      return "Work in progress so pretend there's something really cool here ;)";
      break;
    case "resume-button":
      return "Download a pdf copy of my resume";
      break;
    default:
      return null;
  }
}
