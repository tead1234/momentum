const images = ["1.jpg", '2.jpg', '3.jpg'];
const chosenImage = images[Math.round(Math.random()*(images.length-1))];

const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
bgImage.id = 'bgImage';