// Uso de Arrow Functions en Métodos de Propiedad y Setters/Getters en Objetos de JavaScript

const reproductor = {
    cancion: '', // Propiedad para almacenar el nombre de una canción.

    // Métodos definidos con funciones flecha.
    reproducir: id => console.log(`Reproduciendo canción id ${id}`),
    // Método 'reproducir' que toma un 'id' y muestra un mensaje de reproducción.

    pausar: () => console.log('pausando...'),
    // Método 'pausar' que muestra un mensaje de pausa.

    borrar: id => console.log(`Borrando canción con id: ${id}`),
    // Método 'borrar' que toma un 'id' y muestra un mensaje de borrado de canción.

    crearPlaylist: nombre => console.log(`Creando la Playlist ${nombre}`),
    // Método 'crearPlaylist' que toma un 'nombre' y muestra un mensaje de creación de playlist.

    reproducirPlaylist: nombre => console.log(`Reproduciendo la Playlist ${nombre}`),
    // Método 'reproducirPlaylist' que toma un 'nombre' y muestra un mensaje de reproducción de playlist.

    // Setter para 'cancion'.
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo: ${cancion}`);
        // El setter 'nuevaCancion' actualiza la propiedad 'cancion' y muestra un mensaje.
    },

    // Getter para 'cancion'.
    get obtenerCancion() {
        console.log(`${this.cancion}`);
        // El getter 'obtenerCancion' muestra el valor actual de la propiedad 'cancion'.
    }
};

// Ejemplo de uso de los métodos del objeto 'reproductor'.
reproductor.reproducir(30); // Reproduce la canción con id 30.
reproductor.pausar();       // Pausa la reproducción actual.
reproductor.borrar(20);     // Borra la canción con id 20.
reproductor.crearPlaylist('Electro House'); // Crea una playlist 'Electro House'.
reproductor.reproducirPlaylist('Electronica'); // Reproduce la playlist 'Electronica'.

// Uso de set y get.
reproductor.nuevaCancion = 'For You Eyes Only - Brooklyn Baby'; // Establece una nueva canción.
reproductor.obtenerCancion; // Obtiene y muestra la canción actual.
