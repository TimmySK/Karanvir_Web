const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageFilenames = [
    'images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg',
    'images/pic5.jpg',
];

/* Declaring the alternative text for each image file */

const altTexts = {
    'images/pic1.jpg': 'Human eye',
    'images/pic2.jpg': 'Abstract pattern painting',
    'images/pic3.jpg': 'violet and white flowers',
    'images/pic4.jpg': 'Egyptian Painting',
    'images/pic5.jpg': 'Butterfly on a leaf',
};

function handleImageClick({ target }) {
    displayedImage.setAttribute('src', target.getAttribute('src'));
    displayedImage.setAttribute('alt', target.getAttribute('alt'));
}

/* Looping through images */

imageFilenames.forEach((imageName) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imageName}`);
    newImage.setAttribute('alt', altTexts[imageName]);
    thumbBar.appendChild(newImage);
    img.addEventListener('click', handleImageClick);
});

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
function handleButtonClick() {
    let currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        btn.setAttribute('class', 'light');
    } else {
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        btn.setAttribute('class', 'dark');
    }
}

btn.addEventListener('click', handleButtonClick);