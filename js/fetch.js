/*const url ='https://api.spoonacular.com/recipes/random?apiKey=2fd79dd1eb544ae2b0f9439856023071';
*/

function createNode(element){
    return document.createElement(element)
}
function append(parent, el){
    return parent.appendChild(el);
}

const ul = document.querySelector('#recipes');
const url = 'json/data.json';

fetch(url)
    .then((res) => res.json())
    .then(function (data) {
        console.log(data.recipes);
        console.log("Show Tantanmen recipe: " + data.recipes[0].recipesTitle);
        let recipes = data.recipes;

        return recipes.map(function (recipes){
            let list = createNode('list');
            list.innerHTML = recipes.recipesTitle + " " + recipes.recipesContent + " " + recipes.recipesHowTo;
            append(ul,list);
        })
    })

    .then(data => {
        console.log('Success:', data);

    }).catch(function( error) {
    console.error('Error: ', error);
});