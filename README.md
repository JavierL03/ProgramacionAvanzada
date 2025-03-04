Proyecto de Gestión de Hábitos con Express y MongoDB
Requisitos previos
Antes de comenzar, es necesario de tener instalado:

Node.js (versión 16 o superior)
MongoDB Atlas (para la base de datos)
Un editor de código como VS Code
Un gestor de paquetes como npm (incluido con Node.js)
Configuración del proyecto
1. Clonar el repositorio

git clone <URL_DEL_REPOSITORIO>
cd programacionAvanzada
2. Instalar dependencias
Ejecuta el siguiente comando para instalar las dependencias necesarias:

" npm install "

3. Configurar la base de datos en MongoDB Atlas
Crea una cuenta en MongoDB Atlas.
Crea un nuevo clúster y una base de datos llamada habitdb.
Obtén la cadena de conexión y agrégala a un archivo .env en la raíz del proyecto:

¡IMPORTANTE! Guardar la contraseña y el usuario para futuros cambios

MONGO_URI="mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/habitdb?retryWrites=true&w=majority"
PORT=3000 en este caso utilizamos en puerto 3001

4. Ejecutar el proyecto
Inicia el servidor con el siguiente comando:

npm start
Si todo está configurado correctamente, deberías ver un mensaje indicando que el servidor está en ejecución.

Endpoints disponibles
1. Crear un hábito (POST)

POST /habits
Cuerpo JSON:

{
  "name": "Leer 5 minutos",
  "description": "Leer al menos 5 minutos al día",
  "frequency": "Diario"
}
2. Obtener todos los hábitos (GET)

GET /habits
3. Actualizar un hábito (PUT)

PUT /habits/:id
Cuerpo JSON:


{
  "name": "Leer 1 hora",
  "description": "Leer al menos 1 hora al día"
}
4. Eliminar un hábito (DELETE)

DELETE /habits/:id

Tecnologías utilizadas
Node.js
Express.js
MongoDB Atlas
Mongoose
dotenv
Notas
Verificar de tener el archivo .env configurado correctamente.
Se cuede comprobar los endpoints usando Postman. 
Para detener el servidor, usa CTRL + C.
![image](https://github.com/user-attachments/assets/142d371d-8b4e-47a7-97d3-799be804c78e)

