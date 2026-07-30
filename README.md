#  Pruebas de API REST con Cypress & TypeScript

Este proyecto contiene una prueba completa de automatización de pruebas para servicios web (API REST), consumiendo la API pública de **ReqRes**.

El objetivo es validar los principales métodos HTTP, estructuras JSON de respuesta, códigos de estado y manejo de errores (Error Handling) de forma rápida e independiente de la capa de interfaz gráfica.

---

##  Tecnologías Utilizadas

* **Cypress** - Ejecución de peticiones HTTP (`cy.request`).
* **TypeScript** - Tipado estático.
* **Mochawesome** - Reportes de ejecución en HTML.
* **GitHub Actions** - Pipeline CI/CD para ejecución automatizada.

---

## Casos de Prueba Coberturados

* **GET:** Consultar usuarios y validar esquema JSON.
* **POST:** Creación de recursos (código `201 Created`).
* **PUT:** Actualización de recursos (código `200 OK`).
* **DELETE:** Eliminación de recursos (código `204 No Content`).
* **Handling Errors:** Validación de peticiones inválidas (código `400 Bad Request`).

---

##  Ejecución Local

1. **Instalar dependencias:**
   ```bash
   npm install