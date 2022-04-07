# Aplicación React Dinámica HTTP 🔗 💡

El objetivo del ejercicio es la construcción de una aplicación web React.js con diferentes components que 
tenga como resultado la siguiente interfaz de usuario (Mobile first):

![Aplicación web react](https://i.imgur.com/Yf8WuIJ.jpg)


En esta ocasión la aplicación será dinámica:
- Al escribir sobre la barra de búsqueda se deberán mostrar solo los posts que contengan la cadena 
de búsqueda en su contenido
- Los posts deberán mostrarse a los tres segundos después de haber cargado la interfaz. Mostrando 
el texto “Loading…” durante este tiempo.
- El botón “Me Gusta” deberá incrementar el contador de likes sobre el post
- Al pulsar sobre el icono de perfil se deberá mostrar el siguiente contenido bajo el componente 
NavBar, ocultando el listado de post

## Metodo Post HTTP 
Al pulsar sobre “login” deberán enviarse los datos del formulario con una petición POST a la siguiente url: 
https://three-points.herokuapp.com/api/login,
Body: { “username”: “…”, “password”: “…” }
Content-Type: application/json
Usuario registrado para pruebas:
{ “username”: “john”, “password”: “P4ssW0rd!#” }
Si la petición HTTP devuelve un código 200 (éxito), se guardará el token del usuario en el localStorage del 
navegador y se mostrará el listado de posts. En caso contrario, se activará el estado de error y se mostrará 
el mensaje de error en pantalla.
El resto de peticiones HTTP deberán usar la cabecera “Authorization: Bearer {token}” para resolver la 
autenticación.
Cada vez que se inicie la aplicación web se deberá verificar si existe el token del usuario en el localStorage 
del navegador. Si existe, se accederá al listado de posts. En caso contrario, se mostrará la pantalla de login. 

## Built with ⛏
- [React](https://es.reactjs.org/)
- [Pexels](https://pexels.com/) // Todas las imagenes utilizadas en la aplicación tiene licencia Creative Commons.
- [Bootstrap5](https://https://getbootstrap.com/)
