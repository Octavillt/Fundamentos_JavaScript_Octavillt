// Métodos de Propiedad en Objetos de JavaScript

const reproductor = {
    /*
    Método 'reproducir' para reproducir una canción.
    Este método toma un 'id' como argumento y muestra un mensaje con ese 'id'.
    Representa la acción de reproducir una canción.
    */
    reproducir: function (id) {
        console.log(`Reproduciendo canción id ${id}`); // Reproduciendo canción id 30
    },

    /*
    Método 'pausar' para pausar la reproducción.
    Este método muestra un mensaje indicando que la reproducción se ha pausado.
    Representa la acción de pausar una canción.
    */
    pausar: function () {
        console.log('pausando...'); // pausando...
    },

    // Método 'borrar' para borrar una canción.
    // Este método toma un 'id' y muestra un mensaje indicando que la canción con ese 'id' se ha borrado.
    borrar: function (id) {
        console.log(`Borrando canción con id: ${id}`); // Borrando canción con id: 20
    },

    // Método 'crearPlaylist' para crear una playlist.
    // Este método toma un 'nombre' como argumento y muestra un mensaje indicando la creación de una playlist.
    crearPlaylist: function (nombre) {
        console.log(`Creando la Playlist ${nombre}`); // Creando la Playlist Electro House
    },

    // Método 'reproducirPlaylist' para reproducir una playlist.
    // Este método toma un 'nombre' y muestra un mensaje indicando que se está reproduciendo la playlist.
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`); // Reproduciendo la Playlist Electronica
    }
};

// Ejemplo de uso de los métodos del objeto 'reproductor'.

// Reproduce la canción con id 30.
reproductor.reproducir(30);
// Pausa la reproducción actual.
reproductor.pausar();
// Borra la canción con id 20.
reproductor.borrar(20);
// Crea una playlist llamada 'Electro House'.
reproductor.crearPlaylist('Electro House');
// Reproduce la playlist llamada 'Electronica'.
reproductor.reproducirPlaylist('Electronica');
