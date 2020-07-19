# Test-Autocity-Api
Api para la creacion, lectura y busqueda por tipo de restaurant almacenados en memoria, para el test de Autocity.
Tecnologias: Node.js, Express.js, Json, GIT, Postman

## Prueba de la API

1.  Clonar o descargar el repositorio 

2.  Abrir terminal e instalar las dependencias del proyecto con 'npm i' para poder probar los endpoint.

3.  Ejecutar el comando 'npm start' para iniciar el servidor, deberia esperar un mensaje como este:   
""API REST   
SERVER is RUNNING at PORT 3000!!!""

4.  Usar alguna herramienta que nos permita probar los endpoint con sus respectivos metodos, como por ejemplo POSTMAN o INSOMNIA.


##  API Endpoints

1.   CREAR EL RESTAURANT
     
#### POST /api/v1/restaurants

Ejemplo de cuerpo de la peticion 

~~~
{
        "name": "clayton",
        "kindOfRestaurant": "restaurant",
        "specials": ["carne", "pescado", "milanesa"]
}
~~~

Ejemplo de respuesta de la peticion
Status code 201

~~~
[
    {
        "name": "nombre del restaurant",
        "kindOfRestaurant": "comida thai",
        "specials": [
            "pollo",
            "pescado",
            "milanesa"
        ]
    },
    {
        "name": "clayton",
        "kindOfRestaurant": "restaurant",
        "specials": [
            "carne",
            "pescado",
            "milanesa"
        ]
    }
]
~~~

En caso de que el nombre del Restaurante ya exista
Ejemplo de respuesta de la peticion
Status code 400

~~~
{
    "error": "The name of the restaurant already exists"
}
~~~

2. MOSTRAR RESTAURANTS

#### GET /api/v1/restaurants

Ejemplo de respuesta de la peticion
Status code 200
~~~
[
    {
        "name": "nombre del restaurant",
        "kindOfRestaurant": "comida thai",
        "specials": [
            "pollo",
            "pescado",
            "milanesa"
        ]
    },
    {
        "name": "clayton",
        "kindOfRestaurant": "restaurant",
        "specials": [
            "carne",
            "pescado",
            "milanesa"
        ]
    }
]
~~~

3. CONSULTA DE RESTAURANTES DEL MISMO TIPO

#### GET /api/v1/restaurants/{kindOfRestaurant}

Ejemplo de respuesta de la peticion
Status 200

~~~
[
    {
        "name": "clayton",
        "kindOfRestaurant": "restaurant",
        "specials": [
            "carne",
            "pescado",
            "milanesa"
        ]
    }
]
~~~

