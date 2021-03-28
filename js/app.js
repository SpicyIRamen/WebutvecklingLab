const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')


menu.addEventListener('click', function (){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
});

const url ='https://api.spoonacular.com/recipes/random?apiKey=2fd79dd1eb544ae2b0f9439856023071';


fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log('Success:', data);

    }).catch(err => {
        console.error('Error: ', err);
})

console.log('helloworld')