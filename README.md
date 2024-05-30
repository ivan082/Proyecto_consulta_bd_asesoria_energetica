Detalles del Código
El código proporcionado consiste en un proyecto web que utiliza HTML, CSS y JavaScript para interactuar con una API, mostrar datos y visualizarlos en un gráfico de barras. A continuación, se desglosa cada parte del código:

HTML (index.html)
El archivo HTML proporciona la estructura básica de la página web. Aquí se definen los elementos como el título, el fondo de video, el campo de búsqueda y la lista de contratos. Destacan las etiquetas <video>, <h1>, <input> y <ul>.

CSS (styles.css)
El archivo CSS contiene reglas de estilo para mejorar la apariencia visual de la página. Define estilos para el cuerpo, el contenedor, los encabezados, los elementos de la lista y los campos de entrada. Se utiliza para dar formato y diseño al contenido HTML.

JavaScript (script.js)
El archivo JavaScript maneja la lógica de la aplicación. Aquí se definen funciones para recuperar datos de una API, mostrarlos dinámicamente en la página, filtrar los datos según la entrada del usuario y generar un gráfico de barras utilizando la biblioteca Chart.js. Se hace uso de Fetch API para las solicitudes HTTP y Chart.js para la visualización de datos.

fetchData(): Recupera los datos de la API y llama a las funciones de visualización y generación de gráficos.
displayData(data): Muestra los datos de los contratos en una lista desordenada en la página.
filterData(): Filtra los datos según el texto ingresado por el usuario y muestra los resultados filtrados.
displayFilteredData(filteredData): Muestra los datos filtrados en la lista de contratos.
renderChart(data): Genera un gráfico de barras basado en los datos de los contratos y lo muestra en la página.
Uso y Dependencias
El proyecto utiliza Bootstrap 4.5.2 para estilos adicionales, jQuery, Popper.js y Chart.js para funcionalidades específicas. Para ejecutar la aplicación, simplemente abre el archivo index.html en un navegador web compatible.

Créditos y Licencia
El proyecto fue creado por Iván para demostración y se distribuye bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
