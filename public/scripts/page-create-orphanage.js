const map = L.map('mapid').setView([-27.2058259,-49.6582355], 15);

//tileLayer e uma função que vai criar a primeira camada do mapa
//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]  
})

// let e uma variavel onde vc pode mudar o valor a qualquer momento
let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

// photos upload
function addPhotoField(){
    // Pegar o container de fotos #images
    const container = document.querySelector('#images')
    // Pegar o container para duplicar .new-image
    // querySelectorAll seleciona o valor de todos
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Realizar o clone da ultima imagem adicionada
    // .length pega o valor da quantidade de valores adicionados
    // .cloneNode vai clonar um pedaço do codigo HTML
    const newfieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newfieldContainer.children[0]

    if(input.value == ""){
        return
    }
    
    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    
    // adicionar o clone ao container de #images
    // .appendChild adiciona um filho
    container.appendChild(newfieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar o campo
    //parentNode indica o clone ou duplicação criada pela tag
    //.remove exclui a tag
    span.parentNode.remove();
}

//Select yes or no
function toggleSelect(event) {
    
    // retirar a classe .active
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    }) 

    // colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

    // verificar se sim ou não 

}

function validate(event) {
    //validar se lat e lng estão preenchidos
    // event.preventDefault()
    // alert('Selecione um ponto no mapa!')
    const needsLatAndLng = false;
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa!') 
    }
}