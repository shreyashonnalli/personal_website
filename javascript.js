let projectButton = document.getElementById('project-button');
let body = document.querySelector('body');
let aboutMeLink = document.getElementById('about-me-link');
let extrasLink = document.getElementById('extras-link');
let backgroundImage = document.querySelector('.background-image');
let quoteContainer = document.querySelector('.quote-container');
let blogLink = document.getElementById('blog-link');
let innerContent = document.querySelector('.inner-content');
innerContent.classList.add('hidden-inner-content');
let preLoader = document.querySelector('.pre-loader');
preLoader.setAttribute('style','color: transparent; text-shadow: 0 0 5px rgba(0,0,0,0);');
window.addEventListener('load', loadPage);
let projectList = document.createElement('ul');
projectList.setAttribute('style','list-style: none;');
let routeFindingProject = document.createElement('li');
let routeFindingProjectLink = document.createElement('a');
routeFindingProjectLink.href = "index.html";
routeFindingProjectLink.innerHTML = "Route Finding Project";
routeFindingProject.appendChild(routeFindingProjectLink);
let leedSkrrt = document.createElement('li');
let leedSkrrtLink = document.createElement('a');
leedSkrrtLink.href = "index.html";
leedSkrrtLink.innerHTML="leedSkrrt"
leedSkrrt.appendChild(leedSkrrtLink);
appendProjectListChildren();
let justReturnedFromClick = false;
/*
<a href="#" id="leedskrrt">leedskrrt</a>
<a href="#" id="route-finding-project">Route Finding Project</a>*/


//mouse hover event listeners for the header links
projectButton.addEventListener('mouseover', hoverOverHeaderLinks);
projectButton.addEventListener('mouseleave', leaveHoverOverHeaderLinks);
projectButton.addEventListener('click', toggleLinks);
blogLink.addEventListener('mouseover',hoverOverHeaderLinks);
blogLink.addEventListener('mouseleave',leaveHoverOverHeaderLinks);
blogLink.addEventListener('click',toggleLinks);

//mouse hover event listeners for bottom links
aboutMeLink.addEventListener('mouseover',hoverOverBottomLinks);
aboutMeLink.addEventListener('mouseleave',leaveHoverOverBottomLinks);
extrasLink.addEventListener('mouseover',hoverOverBottomLinks);
extrasLink.addEventListener('mouseleave',leaveHoverOverBottomLinks);




function appendProjectListChildren(){
  projectList.appendChild(routeFindingProject);
  projectList.appendChild(leedSkrrt);
}


function displayBlogLinks(){
  innerContentReadyToRemove();
  setTimeout(function(){innerContentReadyToPrint();},1000);
}


function toggleLinks(event){
  if(backgroundImage.classList.contains('project-links-displayed')){
    backgroundImage.classList.remove('project-links-displayed');
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
    backgroundImage.classList.add('project-links-displayed');
    innerContentReadyToRemove();
    setTimeout(function(){
      innerContent.innerHTML="";
      innerContent.appendChild(projectList);
      innerContentLinksReadyToPrint();
    },500);
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

function loadPage(){
  fadeInAwesomeness();
  setTimeout(function(){fadeOutPreLoader();},1000);
}


function fadeOutPreLoader(){
  preLoader.className += " hidden";
}


function fadeInAwesomeness(){
  preLoader.setAttribute('style','text-align: center; color: black; filter: none; transition: 1s;');
}

function hoverOverHeaderLinks(event){
  if (justReturnedFromClick) return;
  if(backgroundImage.classList.contains('project-links-displayed')) return;
  changeLinkColours(aboutMeLink);
  changeLinkColours(extrasLink);
  changeLinkColours(quoteContainer);
  blurBackgroundImage();
  printQuoteOnScreen(event);
}

function leaveHoverOverHeaderLinks(event){
  if(backgroundImage.classList.contains('project-links-displayed')) return;
  normalLinkColours(aboutMeLink);
  normalLinkColours(extrasLink);
  normalLinkColours(quoteContainer);
  unblurBackgroundImage();
  innerContentReadyToRemove();
  innerContent.classList.remove('hidden-inner-content');
  innerContent.classList.add('hidden-inner-content');
  justReturnedFromClick = false;
  innerContent.addEventListener('transitionend',function(){
    innerContent.classList.remove('animate-fade-out');
    backgroundImage.classList.remove('clear-image');
    innerContent.innerHTML = "";
  });
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
}


function printQuoteOnScreen(event){
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
      return "I don't know what to put here so pretend there's something really cool here ;)";
      break;
    default:
      return null;
  }
}
