let projectLink = document.getElementById('project-link');
let body = document.querySelector('body');
let aboutMeLink = document.getElementById('about-me-link');
let extrasLink = document.getElementById('extras-link');
let backgroundImage = document.querySelector('.background-image');
let quoteContainer = document.querySelector('.quote-container');
let blogLink = document.getElementById('blog-link');
let innerContent = document.querySelector('.inner-content');
innerContent.setAttribute('style','font-size: 60px; color: transparent; text-shadow: 0 0 5px rgba(0,0,0,0);');
let preLoader = document.querySelector('.pre-loader');
preLoader.setAttribute('style','color: transparent; text-shadow: 0 0 5px rgba(0,0,0,0);');
//fadeInAwesomeness();
window.addEventListener('load', loadPage);

//mouse hover event listeners for the header links
projectLink.addEventListener('mouseover', hoverOverHeaderLinks);
projectLink.addEventListener('mouseleave', leaveHoverOverHeaderLinks);
blogLink.addEventListener('mouseover',hoverOverHeaderLinks);
blogLink.addEventListener('mouseleave',leaveHoverOverHeaderLinks);

//mouse hover event listeners for bottom links
aboutMeLink.addEventListener('mouseover',hoverOverBottomLinks);
aboutMeLink.addEventListener('mouseleave',leaveHoverOverBottomLinks);
extrasLink.addEventListener('mouseover',hoverOverBottomLinks);
extrasLink.addEventListener('mouseleave',leaveHoverOverBottomLinks);


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
  changeLinkColours(aboutMeLink);
  changeLinkColours(extrasLink);
  changeLinkColours(quoteContainer);
  blurBackgroundImage();
  printQuoteOnScreen(event);
}

function leaveHoverOverHeaderLinks(event){
  normalLinkColours(aboutMeLink);
  normalLinkColours(extrasLink);
  normalLinkColours(quoteContainer);
  unblurBackgroundImage();
  removeQuoteOnScreen();
}

function hoverOverBottomLinks(){
  changeLinkColours(quoteContainer);
  blurBackgroundImage();
  printQuoteOnScreen(event);
}

function leaveHoverOverBottomLinks(){
  normalLinkColours(quoteContainer);
  unblurBackgroundImage();
  removeQuoteOnScreen();
}




function printQuoteOnScreen(event){
  let quote = quoteToBePrintedOnScreen(event);
  innerContent.textContent = quote;
  innerContentReadyToPrint();
}

function removeQuoteOnScreen(){
  innerContentReadyToRemove();
}

function innerContentReadyToPrint(){
  innerContent.setAttribute('style','text-align: center; font-size: 60px; color: white; filter: none; transition: 2s;');
}


function innerContentReadyToRemove(){
  innerContent.setAttribute('style','text-align: center; font-size: 60px; color: transparent; text-shadow: 0 0 5px rgba(0,0,0,0);transition: 1s;');
}


function blurBackgroundImage(){
  backgroundImage.setAttribute('style','filter: blur(16px); transition: 1s;');
}

function unblurBackgroundImage(){
  backgroundImage.setAttribute('style','filter: none; transition: 2s;');
}

function changeLinkColours(selector){
  selector.setAttribute('style','color: transparent; text-shadow: 0 0 5px rgba(0,0,0,0); transition: 1s;');
}

function normalLinkColours(selector){
  selector.setAttribute('style','color: white; filter: none; transition: 2s;');
}

function quoteToBePrintedOnScreen(event){
  switch (event.target.id) {
    case "project-link":
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
