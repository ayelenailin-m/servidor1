// Iniciamos el servidor
const express = require("express");
const db = require("./db");

//Creamos el servidor
const app = express();

//Utilizamos Middlewares
app.use(express.text());
app.use(express.json());

//Creamos las rutas

//Página de inicio
app.get("/", (req, res) => {
    res.send("Página de Inicio");
});

//Obtener las categorias
app.get("/categorias", (req, res) => {
    res.json(db);
});

//Obtener categorias por id
app.get("/categorias/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const getCategoria = db.find((categoria) => categoria.id === id);
    res.json(getCategoria);
});

//Crear una categoria
app.post("/categorias", (req, res) => {
    const { id, categoria } = req.body;
    const newCaegoria = db.push({ id: id, categoria: categoria });
    res.json({message: "Categoria creado con éxito"});
});


//Corremos el servidor en el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`servidor en puerto ${PORT}`));