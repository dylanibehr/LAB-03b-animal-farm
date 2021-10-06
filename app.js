const catimage = document.getElementById('cat-image');
const catsound = document.getElementById('cat-sound');
const dogimage = document.getElementById('dog-image');
const dogsound = document.getElementById('dog-sound');
const horseimage = document.getElementById('horse-image');
const horsesound = document.getElementById("horse-sound");


catimage.addEventListener('click' , () => {
    console.log()
    catsound.play();
});
document.addEventListener('keyup', (event) => {
    if (event.key === 'c') {
        catsound.play();
    }
});



dogimage.addEventListener('click' , () => {
    console.log()
    dogsound.play();
});
document.addEventListener('keyup', (event) => {
    if (event.key === 'd') {
        dogsound.play();
    }
});

horseimage.addEventListener('click' , () => {
    console.log()
    horsesound.play();
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'h') {
        horsesound.play();
    }
});