import 'express-async-errors';
import AppError from './utils/AppError.js';
import express from 'express';
import routes from './routes/index.js';
import migrationRun from './database/sqlite/migrations/index.js';
import { UPLOADS_FOLDER } from './configs/upload.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/files", express.static(UPLOADS_FOLDER));
app.use(routes);

migrationRun();

app.use((error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message 
        })
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
})

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));