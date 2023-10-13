require("dotenv/config");
require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const express = require("express");
const uploadConfig = require("../src/config/upload");
const cors = require("cors");


//Quando não informado qual o arquivo expecífico a ser importado de dentro de uma pasta, ele importa o arquivo que contém o nome "index"
const routes = require("./routes");

migrationsRun();

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes); 

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))


app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error)

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`🚀Server is running on Port ${PORT}`));