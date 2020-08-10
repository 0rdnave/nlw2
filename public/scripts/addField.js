//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
    //Duplicar os campos. Que campo?
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    // pegar os campos
    const fields = newFieldsContainer.querySelectorAll('input')
    
    //para cada camo, limpar
    fields.forEach(function(field) {
        // pega o field do momento e limpa ele
        field.value = ""
    })
    
    //colocar na pagina. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}