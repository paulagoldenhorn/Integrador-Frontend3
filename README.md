# Integrador-Frontend3
Examen Final de Frontend III

# Documentación

Rutas:
- ```/*```
    - Navbar
    - Footer
- ```home```
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
- ThemeContextProvider
- ApiContextProvider

Componentes:
- ```Navbar:``` barra de navegación. Contiene los Links que redirigen a las rutas correspondientes
- ```Footer:``` pie de página.
- ```Home:``` página principal. Obtiene datos de los dentistas a través de la API y renderiza Card.
- ```Card:``` información de los dentistas. Recibe los datos del dentista y los renderiza con el formato correspondiente.
- ```Detail:``` página de detalle. Obtiene datos del dentista seleccionado a través de la API y los renderiza con el formato correspondiente.
- ```Contact:``` página de contacto. Renderiza ContactForm
- ```ContactForm:``` formulario de contacto. Muestra un formulario, captura los datos ingresados y renderiza mensajes de exito o error
- ```Favs:``` página de dentistas favoritos. Obtiene dentistas favoritos a través del Local Storage y renderiza Card
