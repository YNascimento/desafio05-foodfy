// IDs e Class links Mostra/Esconde
const showIngredients = document.getElementById('show-ingredients')
const hideIngredients = document.getElementById('hide-ingredients')
const showPreparation = document.getElementById('show-preparation')
const hidePreparation = document.getElementById('hide-preparation')
const showExtrainfo = document.getElementById('show-extrainfo')
const hideExtrainfo = document.getElementById('hide-extrainfo')
const showLinks = document.querySelectorAll('.show-link')
const hideLinks = document.querySelectorAll('.hide-link')

//IDs listas e textos à esconder
const ingredientsUl = document.getElementById('ingredients-ul')
const preparationUl = document.getElementById('preparation-ul')
const extrainfoP = document.getElementById('extrainfo-p')

//show
for(let showLink of showLinks){
    showLink.addEventListener('click',function(){

        if(showLink.getAttribute('id') === 'show-ingredients'){
            
            showLink.classList.add('hide')
            ingredientsUl.classList.remove('hide')
            document.getElementById('ingredients-ul').classList.remove('hide')
            for(link of hideLinks)
                if(link.getAttribute('id') =='hide-ingredients')
                    link.classList.remove('hide')
        }

        if(showLink.getAttribute('id') === 'show-preparation'){
            
            showLink.classList.add('hide')
            preparationUl.classList.remove('hide')
            for(link of hideLinks)
                if(link.getAttribute('id') =='hide-preparation')
                    link.classList.remove('hide')
        }

        if(showLink.getAttribute('id') === 'show-extrainfo'){
            
            showLink.classList.add('hide')
            extrainfoP.classList.remove('hide')
            for(link of hideLinks)
                if(link.getAttribute('id') =='hide-extrainfo')
                    link.classList.remove('hide')
        }
    })
}

//hide
for(let hideLink of hideLinks){
    hideLink.addEventListener('click',function(){
        if(hideLink.getAttribute('id') === 'hide-ingredients'){
            
            hideLink.classList.add('hide')
            ingredientsUl.classList.add('hide')
            for(link of showLinks)
                if(link.getAttribute('id') =='show-ingredients')
                    link.classList.remove('hide')
        }

        if(hideLink.getAttribute('id') === 'hide-preparation'){
            
            hideLink.classList.add('hide')
            preparationUl.classList.add('hide')
            for(link of showLinks)
                if(link.getAttribute('id') =='show-preparation')
                    link.classList.remove('hide')
        }

        if(hideLink.getAttribute('id') === 'hide-extrainfo'){
            
            hideLink.classList.add('hide')
            extrainfoP.classList.add('hide')
            for(link of showLinks)
                if(link.getAttribute('id') =='show-extrainfo')
                    link.classList.remove('hide')
        }
    })
}