// for % progress bar

var scrolledBar=document.getElementById("scrolled");

function getDocHeight(){
    var D=document;
    return Math.max(D.body.scrollHeight,
        D.body.offsetHeight,D.body.clientHeight);
}

var docHeight=getDocHeight();
var windowHeight=window.innerHeight;

window.onresize=function(e){
    docHeight=getDocHeight();
    windowHeight=window.innerHeight;
};

function setScrolled(){
    var scrolledBarPercentage=Math.floor((window.scrollY/(docHeight-windowHeight))*100);
    scrolledBar.innerText=scrolledBarPercentage;
    
}

window.addEventListener("scroll",setScrolled);

// **********************************************

// for scroll to section 
var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0;i < navMenuAnchorTags.length;i++){

    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();

        var targetSectionID= this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);
        console.log(targetSection);
       
        interval=setInterval(scrollVertically,20,targetSection);
        // we can pass the arguments of the function as of 
        // scrollvertically function we are passing targetSection
    });
}
// we have to pass the targetSection in the function 
var scrollVertically=function(targetSection){
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top<= 0){
        clearInterval(interval);
    }
    window.scrollBy(0,50);
}


// scroll for skills section**************

var progressBars=document.querySelectorAll('.skill-progress > div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);




// // to fire animation only once
// var animationDone=false;

// function initialiseBars(){

//     for(let bar of progressBars){
//         bar.style.width= 0 + '%';
//     }
// }
// initialiseBars();
// function fillBars(){
//     for(let bar of progressBars){
//         let targetWidth=bar.getAttribute('data-bar-width');
//         let currentWidth=0;
//         let interval=setInterval(function(){
//             if(currentWidth > targetWidth){
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//             bar.style.width=currentWidth+'%';
//         },13);
        
       
//     }
// }


// function checkScroll(){
//     // to check whether still container is visible
//     for(let bar of progressBars){
//     var coordinates=skillsContainer.getBoundingClientRect();
//     if (!animationDone && coordinates.top < window.innerHeight){
//         animationDone=true;
//         fillBars();
//     }
//     else if(coordinates.top > window.innerHeight ){
//         animationDone=false;
//         initialiseBars();
//     }
//     }
// }

// for individual bar scroll

function initialiseBar(bar){
    bar.setAttribute("data-visited",false);
    bar.style.width=0+'%';
}

for(let bar of progressBars){
    initialiseBar(bar);
}

function fillBar(bar){
    var currentWidth=0;
    var targetWidth=bar.getAttribute("data-bar-width");
    var interval=setInterval(function(){
        if(currentWidth>targetWidth){
            clearInterval(interval);
        }else{
            currentWidth++;
            bar.style.width=currentWidth+'%';
        }
    },5);
}

function checkScroll(){
    // to check whether still container is visible
    for(let bar of progressBars){
        var barCoordinates=bar.getBoundingClientRect();
        if(bar.getAttribute("data-visited")=="false" &&
         barCoordinates.top < window.innerHeight){
            bar.setAttribute("data-visited",true);
            fillBar(bar);
        }else if(barCoordinates.top > window.innerHeight){

            initialiseBar(bar);
        }
    }
   
}




