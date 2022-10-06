startButton = document.querySelectorAll(".start__button");
blur = document.querySelector(".start__blur");

startButton[1].addEventListener("mouseover", function() {
	blur.style.opacity = "0.4";
})


startButton[1].addEventListener("mouseleave", function() {
	blur.style.opacity = "0.1";
});


const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const burger = document.querySelector(".burger");
const headerBurger = document.querySelector(".header__burger");
const closeBurger = document.querySelector(".burger__close");



headerBurger.addEventListener("click", burgerOpen);
closeBurger.addEventListener("click", burgerClose);



function burgerOpen() {
	
	burger.style.display = "block";

	header.style.display = "none";
	main.style.display = "none";
	footer.style.display = "none"

};

function burgerClose() {

	header.style.display = "block";
	main.style.display = "block";
	footer.style.display = "block";

	burger.style.display = "none";

};


const about = document.querySelector(".main__about");
const works = document.querySelector(".main__works");
const team = document.querySelector(".main__team");
const skill = document.querySelector(".main__skill");
const news = document.querySelector(".main__news")
const contacts = document.querySelector(".address")

const aboutLinks = document.querySelectorAll(".about");
const worksLinks = document.querySelectorAll(".works");
const teamLinks = document.querySelectorAll(".team");
const skillLinks = document.querySelectorAll(".skill");
const newsLinks = document.querySelectorAll(".news")
const contactsLinks = document.querySelectorAll(".contacts")



for (let index = 0; index < aboutLinks.length; index++){
	const aboutLink = aboutLinks[index];
	aboutLink.addEventListener("click", function() {
		scroll(about);
	})
}

for (let index = 0; index < worksLinks.length; index++){
	const worksLink = worksLinks[index];
	worksLink.addEventListener("click", function() {
		scroll(works);
	})
}

for (let index = 0; index < teamLinks.length; index++){
	const teamLink = teamLinks[index];
	teamLink.addEventListener("click", function() {
		scroll(team);
	})
}

for (let index = 0; index < skillLinks.length; index++){
	const skillLink = skillLinks[index];
	skillLink.addEventListener("click", function() {
		scroll(skill);
	})
}

for (let index = 0; index < newsLinks.length; index++){
	const newsLink = newsLinks[index];
	newsLink.addEventListener("click", function() {
		scroll(news);
	})
}

for (let index = 0; index < contactsLinks.length; index++){
	const contactsLink = contactsLinks[index];
	contactsLink.addEventListener("click", function() {
		scroll(contacts);
	})
}


function scroll(block){







	if (burger.style.display == "block"){

		burgerClose();

	}







	setTimeout(function(){

		
		if (window.innerWidth > block.getBoundingClientRect().top || window.innerWidth == block.getBoundingClientRect().top) {
	
			block.scrollIntoView({
			
				block: 'center'

			})

	
		}







		if (window.innerWidth < block.getBoundingClientRect().top) {
	

			window.scrollTo({
		
				top: block.getBoundingClientRect().top,
				left: 0
		
			})
	

		}

	}, 150)



}





window.addEventListener("resize", function() {



	if (window.innerWidth > 475 && burger.style.display == "block") {

		burgerClose();

	}



})
