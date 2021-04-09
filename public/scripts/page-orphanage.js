const options = {
    draggings: false, 
    touchZoom: false, 
    doubleClickZoom: false, 
    scrollWheelZoom: false, 
    zoomControl: false
}

// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//const e uma variavel que não muda de valor com facilidade
//L e um objeto, onde map e uma propriedade
//map() e uma funcionalidade
//'mapid' e um argumento pra função
//setView e uma função que ajusta a visualização
//setView([Latitude,Longitude],Zoom)
const map = L.map('mapid', options).setView([lat,lng], 15);

//tileLayer e uma função que vai criar a primeira camada do mapa
//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68], 
    popupAnchor: [170, 2]     
})



//Create and add marker


L.marker([lat,lng], {icon: icon})
.addTo(map)

//tipos de dados
//String "" 
//Number 01 
//Object {}
//Boolean true or false
//Array [] - Uma coleção de valores

/*Image Gallery*/

function selectImage(event) {
    //event.currentTarget serve para mostrar qual tag que vc clicou
    const button = event.currentTarget
    console.log(button.children)
    //REMOVER TODAS AS CLASSES .ACTIVE
    //querySelectorAll vai procurar em todo o HTML o seletor que coloquei dentro do parênteses
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
 
    function removeActiveClass(button) {
    //Vai tirar o active da lista     
        button.classList.remove("active")
    }

    //SELECIONAR A IMAGEM CLICADA
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    //ATUALIZAR O CONTAINER DE IMAGEM
    imageContainer.src = image.src
    
    //ADICIONAR A CLASSE .ACTIVE PARA ESTE BOTÃO
    button.classList.add('active')
}