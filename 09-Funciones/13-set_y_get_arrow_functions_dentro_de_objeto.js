// Uso de Arrow Functions en Métodos de Propiedad y Setters/Getters en Objetos de JavaScript

const reproductor = {
    // Propiedad para almacenar el nombre de una canción.
    cancion: '',

    // Métodos definidos con funciones flecha.
    // Método 'reproducir' que toma un 'id' y muestra un mensaje de reproducción.
    reproducir: id => console.log(`Reproduciendo canción id ${id}`), // Reproduciendo canción id 30

    // Método 'pausar' que muestra un mensaje de pausa.
    pausar: () => console.log('pausando...'), // pausando...

    // Método 'borrar' que toma un 'id' y muestra un mensaje de borrado de canción.
    borrar: id => console.log(`Borrando canción con id: ${id}`), // Borrando canción con id: 20

    // Método 'crearPlaylist' que toma un 'nombre' y muestra un mensaje de creación de playlist.
    crearPlaylist: nombre => console.log(`Creando la Playlist ${nombre}`), // Creando la Playlist Electro House

    // Método 'reproducirPlaylist' que toma un 'nombre' y muestra un mensaje de reproducción de playlist.
    reproducirPlaylist: nombre => console.log(`Reproduciendo la Playlist ${nombre}`), // Reproduciendo la Playlist Electronica

    // Setter para 'cancion'.
    // El setter 'nuevaCancion' actualiza la propiedad 'cancion' y muestra un mensaje.
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo: ${cancion}`); // Añadiendo: For You Eyes Only - Brooklyn Baby
    },

    // Getter para 'cancion'.
    // El getter 'obtenerCancion' muestra el valor actual de la propiedad 'cancion'.
    get obtenerCancion() {
        console.log(`${this.cancion}`); // For You Eyes Only - Brooklyn Baby
    }
};

// Ejemplo de uso de los métodos del objeto 'reproductor'.

// Reproduce la canción con id 30.
reproductor.reproducir(30);
// Pausa la reproducción actual.
reproductor.pausar();
// Borra la canción con id 20.
reproductor.borrar(20);
// Crea una playlist 'Electro House'.
reproductor.crearPlaylist('Electro House');
// Reproduce la playlist 'Electronica'.
reproductor.reproducirPlaylist('Electronica');

// Uso de set y get.

// Establece una nueva canción.
reproductor.nuevaCancion = 'For You Eyes Only - Brooklyn Baby';
// Obtiene y muestra la canción actual.
reproductor.obtenerCancion;
