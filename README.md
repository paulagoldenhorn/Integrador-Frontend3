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
    - Contact
        - ContactForm
        - ErrorHandler
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
- ```Contact:``` página de contacto. Renderiza ContactForm
- ```ContactForm:``` formulario de contacto. Muestra un formulario, captura los datos ingresados y renderiza ErrorFilter
- ```ErrorHandler:``` manejador de errores. Muestra los mensajes de error en los datos enviados. En caso contrario, muestra el mensaje de éxito correspondiente.
- ```Favs:``` página de dentistas favoritos. Obtiene dentistas favoritos a través del Local Storage y renderiza Card
