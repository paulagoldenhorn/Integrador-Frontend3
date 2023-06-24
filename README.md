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
        - Card
- ```/contact```
    - Form
        - ContactForm
        - ErrorFilter
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
- ```Card:``` información de los dentistas. Recibe los datos del dentista y los renderiza en el formato establecido.
- ```Detail:``` página de detalle. Obtiene datos del dentista seleccionado a través de la API y renderiza Card.
- ```Form:``` página de contacto. Renderiza ContactForm
- ```ContactForm:``` formulario de contacto. Muestra un formulario, captura los datos ingresados y renderiza ErrorFilter
- ```ErrorFilter:``` mensajes de error. Muestra mensajes de error de los datos enviados (si los hubiese).
- ```Favs:``` página de dentistas favoritos. Obtiene dentistas favoritos a través del Local Storage y renderiza Card
