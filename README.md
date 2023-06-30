# Integrador-Frontend3
Examen Final de Frontend III
# Documentación

Rutas:
- ```/*```
    - Navbar
    - Footer
- ```/```
    - Home
        - Card
- ```/dentist/:id```
    - Detail
- ```/contact```
    - Contact
        - ContactForm
- ```/favs```
    - Favs
        - Card

Contextos:
- ApiContextProvider
- ThemeContextProvider
- FavsLogicContextProvider

Componentes:
- ```ThemeContextProvider:``` obtiene el tema actual de la pagina y pone a disposicion un metodo para cambiarlo.
- ```Navbar:``` barra de navegación. Contiene los Links que redirigen a las rutas correspondientes y un botón para alternar el tema.
- ```Footer:``` pie de página.
- ```Home:``` página principal. Obtiene datos de los dentistas a través del contexto ApiContext y renderiza una Card por cada dentista.
- ```ApiContextProvider:``` obtiene datos de la API.
- ```Card:``` información de los dentistas. Recibe los datos del dentista y los renderiza con el formato correspondiente.
- ```Detail:``` página de detalle. Obtiene datos del dentista seleccionado a través de la API y los renderiza con el formato correspondiente.
- ```Contact:``` página de contacto. Renderiza ContactForm.
- ```ContactForm:``` formulario de contacto. Muestra un formulario, captura los datos ingresados y renderiza mensajes de exito o error.
- ```Favs:``` página de dentistas favoritos. Obtiene dentistas favoritos a través del contexto FavsLogicContext y renderiza una Card por cada dentista favorito.
- ```FavsLogicContext:``` obtiene dentistas favoritos del Local Storage y pone a disposicion un metodo para agregar/eliminar dentistas.
