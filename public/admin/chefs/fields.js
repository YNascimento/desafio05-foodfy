let ingredients = document.getElementById('ingredients')
let preparations = document.getElementById('preparations')


function addInput(inputBox, inputField) {
    let newField

    if(inputField.length > 0){
        newField = inputField[inputField.length - 1].cloneNode(true);
    }
    else{
        newField = document.createElement('div')
        newField.setAttribute('id', "ingredient-0")
        newField.setAttribute('class', "ingredient")

        const inputEl = document.createElement('input')
        inputEl.setAttribute('type','text')
        inputEl.setAttribute('name','ingredients[]')
        inputEl.setAttribute('value','')

        const spanEl = document.createElement('span')
        spanEl.setAttribute('class', 'closeBtn')

        const iEl = document.createElement('i')
        iEl.setAttribute('class', 'fas fa-times')

        spanEl.appendChild(iEl)
        newField.appendChild(inputEl)
        newField.appendChild(spanEl)
    }
        
    // Não adiciona um novo input se o último tem um valor vazio
    if (inputField.length > 0 && newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    newField.setAttribute('id','ingredient-'+inputField.length)
    
    inputBox.appendChild(newField);
}

function deleteInput(e){
    // e.target was the clicked element
    if (e.target && (e.target.tagName == "i" || e.target.tagName == "I" ) ){
        const targetField = e.target.parentElement.parentElement
        targetField.remove()
	
    }
}
document.querySelector("#addIngredient").addEventListener("click", function(){
    const inputBox = document.querySelector("#ingredients");
    const inputField = document.querySelectorAll(".ingredient");

    addInput(inputBox, inputField)
})
  
  
document.querySelector("#addPreparation").addEventListener("click", function(){
    const inputBox = document.querySelector("#preparations");
    const inputField = document.querySelectorAll(".preparation");

    addInput(inputBox, inputField)
})

preparations.addEventListener("click", function(e){
    deleteInput(e)
})

ingredients.addEventListener("click",function(e){
    deleteInput(e)
})