var menu = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var closeBtn = document.getElementById("closeBtn");
var windowHeight = window.innerHeight;
var height = windowHeight - windowHeight*0.1;	

menu.addEventListener("click", function(){
  sideNav.style.width = "120px";
});

closeBtn.addEventListener("click", function(){
  sideNav.style.width = "0px";
});

window.onscroll = function(){
  if(window.pageYOffset > height){
    menu.style.backgroundColor = "#222";
    menu.style.boxShadow = "3px 3px 8px #000";
  }else{
    menu.style.backgroundColor = "transparent";
    menu.style.boxShadow = "none";
  }
}
/*__________GENERAL FUNCTIONALITY END__________*/


/*_________SCROLL FUNCTIONALITY START__________*/
window.sr = ScrollReveal();
  sr.reveal("#menuBtn", {
    duration: 2000,
    origin:"right",
  });
  sr.reveal("#logo", {
  	duration: 2000,
    origin:"left",
  });
  sr.reveal("#mainTitle h1", {
  	duration: 2000,
    origin:"bottom",
  });
  /* Occuring one after the other, the last number shows delayed effect */
  sr.reveal("#flexJump a", { 
  	delay: 600,
  	duration: 1600,
  	origin:"bottom" 
  }, 400);
  sr.reveal("#quote", {
    duration: 2000,
    origin:"left"
  });
  sr.reveal("#mission p", {
    duration: 2000,
    origin:"left"
  });
  sr.reveal(".alignImg img", {
    distance: "400px",
    duration: 4000,
    origin:"bottom"
  });
  sr.reveal(".alignImg div", {
    duration: 2000,
    origin:"right"
  });
  sr.reveal(".pro", { 
    duration: 1200,
    origin:"bottom" 
  }, 400);
  sr.reveal("#team h2", {
    delay: 600,
    duration: 1200,
    origin:"bottom"
  });
  sr.reveal(".employee", {
    delay: 600,
    duration: 1200,
    origin: "right"
  });
  sr.reveal(".contactForm", {
    delay: 600, 
    duration: 1200, 
    origin: "bottom" 
  });

/*__________SCROLL FUNCTIONALITY END___________*/

/*__________QUOTE FUNCTIONALITY START__________*/
quoteGenerator();

var quoteArray = ['When something is important enough, you do it even if the odds are not in your favor.', 'The first step is to establish that something is rather possible, then probability will occur.', 'I think that’s the single best piece of advice: constantly think about how you could be doing things better and questioning yourself.', 'Some people don’t like change, but you need to embrace change if the alternative is disaster.', 'If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it’s not.', 'I take the position that I’m always to some degree wrong, and the aspiration is to be less wrong.', 'People should pursue what they’re passionate about. That will make them happier than pretty much anything else.', 'I don’t create companies for the sake of creating companies, but to get things done.'];

function quoteGenerator(){
  document.getElementById('quote').addEventListener('click', function(){
  var randomNumber = Math.floor(Math.random()*(quoteArray.length));
  document.getElementById('quote').innerHTML = quoteArray[randomNumber];
  });
}
/*__________QUOTE FUNCTIONALITY END__________*/

/*__________SLIDER IMAGE GALLERY START__________*/
let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrowLeft"),
  arrowRight = document.querySelector("#arrowRight"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
/*__________SLIDER IMAGE GALLERY END__________*/