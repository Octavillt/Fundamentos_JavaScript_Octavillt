// Métodos de Propiedad en Objetos de JavaScript

const reproductor = {
    // Método 'reproducir' para reproducir una canción.
    reproducir: function (id) {
        console.log(`Reproduciendo canción id ${id}`);
        // Este método toma un 'id' como argumento y muestra un mensaje con ese 'id'.
        // Representa la acción de reproducir una canción.
    },

    // Método 'pausar' para pausar la reproducción.
    pausar: function () {
        console.log('pausando...');
        // Este método muestra un mensaje indicando que la reproducción se ha pausado.
        // Representa la acción de pausar una canción.
    },

    // Método 'borrar' para borrar una canción.
    borrar: function (id) {
        console.log(`Borrando canción con id: ${id}`);
        // Este método toma un 'id' y muestra un mensaje indicando que la canción con ese 'id' se ha borrado.
    },

    // Método 'crearPlaylist' para crear una playlist.
    crearPlaylist: function (nombre) {
        console.log(`Creando la Playlist ${nombre}`);
        // Este método toma un 'nombre' como argumento y muestra un mensaje indicando la creación de una playlist.
    },

    // Método 'reproducirPlaylist' para reproducir una playlist.
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`);
        // Este método toma un 'nombre' y muestra un mensaje indicando que se está reproduciendo la playlist.
    }
};

// Ejemplo de uso de los métodos del objeto 'reproductor'.
reproductor.reproducir(30); // Reproduce la canción con id 30.
reproductor.pausar(); // Pausa la reproducción actual.
reproductor.borrar(20); // Borra la canción con id 20.
reproductor.crearPlaylist('Electro House'); // Crea una playlist llamada 'Electro House'.
reproductor.reproducirPlaylist('Electronica'); // Reproduce la playlist llamada 'Electronica'.
