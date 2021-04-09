//const e uma variavel que não muda de valor com facilidade
//L e um objeto, onde map e uma propriedade
//map() e uma funcionalidade
//'mapid' e um argumento pra função
//setView e uma função que ajusta a visualização
//setView([Latitude,Longitude],Zoom)
const map = L.map('mapid').setView([-27.2058259,-49.6582355], 15);

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


function addMarker({id, name, lat, lng}) {

    //create popup overlay
    const popup = L.popup({
    closeButton: false,
    className: 'map-pop',
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"> </a>`)

//Create and add marker
L
.marker([lat,lng], {icon})
.addTo(map)
.bindPopup(popup)
}
// document e o corpo do front-end em HTML
// querySelectorAll pegar todos os seletores do .orphanages e o span
const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span =>{
    const orphanage = {
        id:span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanage)
})


//tipos de dados
//String "" 
//Number 01 
//Object {}
//Boolean true or false
//Array [] - Uma coleção de valores

