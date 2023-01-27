BLOCKBUSTER
27 de Enero de 2023

DE SERGIO NAVACERRADA Y OSCAR ALVIAREZ

Este proyecto se presenta como trabajo final de nuestro curso de REACT, como parte del Full Stack Developer Bootcamp y tiene como objeto poner en práctica los procesos que hemos aprendido en clases y una excelente oportunidad para mejorar.

El proyecto representa una galeria de información de películas de diferente genero, años, acompañado de un poster de cada película, un rating y el nombre del director.

Se instalaron las siguientes dependencias, necesarias para el desarrollo del proyecto:
    "axios": "^1.2.2",
    "bootstrap": "^5.2.3",
    "node-sass": "^7.0.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.7.0",

La información base viene de una seed utilizada en un proyecto anterior. Esta fue expandida y transformada a archivo .json. El archivo original contenia una dependencia única, llamada "moviesData". Posteriormente añadimos otra dependencia llamada "usersRegister" que incluye tres usuarios para simular el proceso de login, por comparación de parámetros, con los datos en dicha dependencia. En definitiva, nuestra base de datos (mock API Rest) contiene dos dependencias "moviesData" y "usersRegister".

El servidor lo levantamos utilizando JSON-server, con el siguiente comando en consola:

npx json-server -p 4000 -w src/db/movies.json

y tendremos disponible las siguientes rutas:

http://localhost:4000/moviesData
http://localhost:4000/usersRegister

Cada elemento de la dependencia moviesData contiene los siguientes parametros:
    "id":  (number)
    "title": (string)
    "director": (string)
    "year": (number)
    "genres": (Array (string))
    "rating": (number)
    "img": (string)

Cada elemento de la dependencia usersRegister contiene los siguientes parametros:

    "id": (number)
    "email": (string)
    "password": (string)

El resultado del proyecto contiene las siguientes páginas:

LOGIN : aqui se presenta la funcionalidad de Login, no permite avanzar en caso de no presentar una combinación registrada de usuario (email de usuario) y clave (string de 4 caracteres).

MAIN : listado completo de todas las peliculas en la base de datos. Una vista reducida de lo que ampliaremos en detalle.

MOVIES DETAIL: a través de un vinculo selecccionable en cada pelicula en la página MAIN, accedemos a una presentación de una sola película, la seleccionada, con información ampliada.

FILTER : desde la página MAIN, pulsando un botón dedicado a tal fin, pasamos a la página con la función de filtro, donde podemos ingresar, en un campo de formulario, cualquier texto para encontrar coincidencias tanto en el título como en año de la película.

GENRE FILTER : desde la página MAIN, pulsando un botón dedicado a tal fin, pasamos a la página con la función de filtro por genero, a través de un selector tipo desplegable (drop down list) , y se obtiene una lista de películas que contienen el género seleccionado. Cada película incluye al menos un género y la mayoria de los casos, más de un género.

Podemos comentar las técnicas principales que hemos puesto en práctica:
    Definición del proyecto, incluye todo el setup de dependencias.
    Estructura a traves de componentes.
    Props para manejo de datos.
    Eventos como onClick, onChange.
    Función manejadora de eventos, para escuchar los que producen las anteriores.
    Variables de estado.
    Formularios.
    Links, para la funcionalidad de los botones.
    Hooks. useEffect y useContext.
    Axios para obtener los datos (metodo GET) de la API Rest.
    Rutas (React Router) para poder desplegar las diferentes páginas.
    Un sencilla autenticación de usuarios previamente registrados.
    Otras técnicas propias de JS.
    El estilo de las páginas, aunque no fue el foco del proyecto, permitió experimentar y aprender a aplicar estilos a través de las clases y el comando "className".
    Usamos la librería Bootstrap para probar diferentes estilos de los que finalmente sólo aplicamos a los botones  (Filter, Genre, Logín , Home y Log Out.)
    Hemos cuidado el diseño responsive para la correcta visualización en todo tipo de dispositivo además de evitar el scroll horizontal.







