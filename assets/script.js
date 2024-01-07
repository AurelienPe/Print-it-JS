const arrow_left = document.getElementsByClassName("arrow_left")[0];
const arrow_right = document.getElementsByClassName("arrow_right")[0];
const slides = document.getElementsByClassName("banner-img")[0];
const paragraph = document.getElementsByClassName("paragraph")[0];
const dot_1 = document.getElementsByClassName("dot-1")[0];
const dot_2 = document.getElementsByClassName("dot-2")[0];
const dot_3 = document.getElementsByClassName("dot-3")[0];
const dot_4 = document.getElementsByClassName("dot-4")[0];
let image = 1;

arrow_left.addEventListener('click', () => {
	console.log('La fleche gauche a été cliqué !');
	image = image - 1;
	updateImage();
	console.log(image);
});

arrow_right.addEventListener('click', () => {
    console.log('La flèche droite a été cliquée !');
    image = image + 1;
	updateImage();
	console.log(image);
});

function updateImage() {
	if (image === 1) {
			slides.src = './assets/images/slideshow/slide1.jpg';
			paragraph.innerHTML = 'Impressions tous formats<span>en boutique et en ligne</span>';
			dot_1.style.backgroundColor = "white";
			dot_2.style.backgroundColor = "transparent";
			dot_4.style.backgroundColor = "transparent";
		}

	if (image === 2) {
			slides.src = "./assets/images/slideshow/slide2.jpg";
			paragraph.innerHTML = 'Tirages haute definition grand format<span>pour vos bureaux et events</span>';
			dot_2.style.backgroundColor = "white";
			dot_3.style.backgroundColor = "transparent";
			dot_1.style.backgroundColor = "transparent";
		}
	
	if (image === 3) {
			slides.src = "./assets/images/slideshow/slide3.jpg";
			paragraph.innerHTML = "Grand choix de couleurs <span>de CMJN aux pantones</span>"
			dot_3.style.backgroundColor = "white";
			dot_2.style.backgroundColor = "transparent";
			dot_4.style.backgroundColor = "transparent";
		}
	
	if (image === 4) {
			slides.src = "./assets/images/slideshow/slide4.png";
			paragraph.innerHTML = "Autocollants <span>avec découpe laser sur mesure</span>"
			dot_4.style.backgroundColor = "white";
			dot_1.style.backgroundColor = "transparent";
			dot_3.style.backgroundColor = "transparent";
		}

	if (image === 5) {
		image = 1;
		updateImage();
	}

	if (image === 0) {
		image = 4;
		updateImage();
	}
}