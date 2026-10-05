document.addEventListener("DOMContentLoaded", () => {
    
    // Manejo del formulario de Disco
    const formDisco = document.getElementById("form-disco");
    if (formDisco) {
        formDisco.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("disco-nombre").value;
            const genero = document.getElementById("disco-genero").value;
            const artista = document.getElementById("disco-artista").value;
            const precio = document.getElementById("disco-precio").value;
            
            document.getElementById("out-disco").textContent = 
                `Álbum: ${nombre} | Género: ${genero} | Artista: ${artista} | Precio: $${precio}`;
        });
    }

    // Manejo del formulario de Cantante
    const formCantante = document.getElementById("form-cantante");
    if (formCantante) {
        formCantante.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("cantante-nombre").value;
            const edad = document.getElementById("cantante-edad").value;
            const generoRadio = document.querySelector('input[name="genero"]:checked');
            const genero = generoRadio ? generoRadio.value : "No especificado";
            const variosGrupos = document.getElementById("cantante-varios").checked ? "Sí" : "No";

            document.getElementById("out-cantante").textContent = 
                `Vocalista: ${nombre} | Edad: ${edad} años | Género: ${genero} | Trayectoria en varios grupos: ${variosGrupos}`;
        });
    }

    // Manejo del formulario de Canción
    const formCancion = document.getElementById("form-cancion");
    if (formCancion) {
        formCancion.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("cancion-nombre").value;
            const duracion = document.getElementById("cancion-duracion").value;
            const compositor = document.getElementById("cancion-compositor").value;
            const cantante = document.getElementById("cancion-cantante").value;

            document.getElementById("out-cancion").textContent = 
                `Canción: ${nombre} | Duración: ${duracion} | Compositor: ${compositor} | Cantante: ${cantante}`;
        });
    }

    // Manejo del formulario de Playlist
    const formPlaylist = document.getElementById("form-playlist");
    if (formPlaylist) {
        formPlaylist.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("playlist-nombre").value;
            const usuario = document.getElementById("playlist-usuario").value;

            document.getElementById("out-playlist").textContent = 
                `Playlist creada: "${nombre}" por el usuario ${usuario}`;
        });
    }

});