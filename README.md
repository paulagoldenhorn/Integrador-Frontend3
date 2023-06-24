# Integrador-Frontend3
Examen Final de Frontend III

# Documentación

Rutas:
- ```/*```
    - DentistNavbar
    - DentistFooter
- ```home```
    - DentistHome
        - Card
- ```/dentist/:id```
    - DentistDetail
        - Card
- ```/contact```
    - DentistForm
        - ContactForm
        - ErrorFilter
- ```/favs```
    - DentistFavs
        - Card

Contextos:
- ThemeContextProvider
- ApiContextProvider

Componentes:
- ```DentistNavbar:``` barra de navegación. Contiene los Links que redirigen a las rutas correspondientes
- ```DentistFooter:``` pie de página.
- ```DentistHome:``` página principal. Obtiene datos de los dentistas a través de la API y renderiza Card.
- ```Card:``` información de los dentistas. Recibe los datos del dentista y los renderiza en el formato establecido.
- ```DentistDetail:``` página de detalle. Obtiene datos del dentista seleccionado a través de la API y renderiza Card.
- ```DentistForm:``` página de contacto. Renderiza ContactForm
- ```ContactForm:``` formulario de contacto. Muestra un formulario, captura los datos ingresados y renderiza ErrorFilter
- ```ErrorFilter:``` mensajes de error. Muestra mensajes de error de los datos enviados (si los hubiese).
- ```DentistFavs:``` página de dentistas favoritos. Obtiene dentistas favoritos a través del Local Storage y renderiza Card
