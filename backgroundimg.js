const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const selectImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${selectImage}`;

document.body.style.backgroundImage = `url(${bgimage.src})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
