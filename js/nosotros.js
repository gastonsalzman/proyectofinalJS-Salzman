fetch('nosotros.json')
.then(response => response.json())
.then(data => {
    const equipo = data.nosotros;

    // Obtener el contenedor donde se mostrará el equipo
    const equipoContainer = document.getElementById('equipo-info');

   
    equipo.forEach(miembro => {
        const miembroDiv = document.createElement('div');
        miembroDiv.className = 'miembro-card';

       
        miembroDiv.innerHTML = `
            <img src="${miembro.imagen}" alt="${miembro.nombre}">
            <p><strong>Nombre:</strong> ${miembro.nombre}</p>
            <p><strong>Edad:</strong> ${miembro.edad} años</p>
            <p><strong>Ocupación:</strong> ${miembro.ocupacion}</p>
        `;

        
        equipoContainer.appendChild(miembroDiv);
    });
})
.catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
});

function iniciarMap(){
    var coord = {lat:-31.3785618, lng: -58.017434};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map

    });
  
}