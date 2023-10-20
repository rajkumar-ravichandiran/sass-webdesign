//Toggle Dark / Light mode button
const navbarToggleTheme	= document.querySelector('.navbar-toggle-theme');
navbarToggleTheme.addEventListener('click',()=>{
	navbarToggleTheme.querySelector('i').classList.toggle('la-sun');
	navbarToggleTheme.querySelector('i').classList.toggle('la-moon');
	document.querySelector('html').classList.toggle('dark');
});

// Toggle Menu button
const navbarToggleBtn	= document.querySelector('.navbar-toggle-menu');
const navbarContent	= document.querySelector('.header');
navbarToggleBtn.addEventListener('click',()=>{
	navbarToggleBtn.querySelector('i').classList.toggle('la-bars');
	navbarToggleBtn.querySelector('i').classList.toggle('la-times');
	navbarContent.classList.toggle('show-menu');
});


//Fixed Header
const header = document.querySelector('.header');
const headerHeight = header.clientHeight + 50;
window.addEventListener('scroll',()=>{
	let scroll = window.pageYOffset || document.documentElement.scrollTop;
	if(scroll >= headerHeight){
		header.classList.add('header-fixed');
	}else{
		header.classList.remove('header-fixed');
	}	
});


//Highlight current Section
const sections = document.querySelectorAll('section');
const menus = document.querySelectorAll('.navbar-menu a');

window.addEventListener('scroll',()=>{
	//get the current scroll position
	 const scrollPosition = window.scrollY;

	 //Loop through section
	 sections.forEach((section, index)=>{
	 	const sectionTop = section.offsetTop;
	 	const sectionHeight = section.clientHeight;

	 	//check if the current scroll position is within section
	 	if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight){

	 		//remove active from all links
	 		menus.forEach((link)=>link.classList.remove('active'));

	 		//Add the 'active' class to current section menu
	 		menus[index].classList.add('active');
	 	}
	 });
});

//Add smooth scroll to section onclick menu 
menus.forEach( function(element, index) {	
	element.addEventListener('click',(e)=>{
		e.preventDefault();
		const targetId = element.getAttribute('href').substring(1);
		const targetSection = document.getElementById(targetId);

		window.scrollTo({
			top:targetSection.offsetTop,
			behavior:'smooth'
		});
		
		if(window.innerWidth <= 768){
			navbarToggleBtn.querySelector('i').classList.toggle('la-bars');
			navbarToggleBtn.querySelector('i').classList.toggle('la-times');
			navbarContent.classList.toggle('show-menu');
		}
	});
});