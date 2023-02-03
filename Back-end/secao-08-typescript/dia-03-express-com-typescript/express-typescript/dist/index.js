"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // desestruturar tipagem req e res
const statusCode_1 = __importDefault(require("./src/utils/statusCode"));
require("express-async-errors");
const bookRoutes_1 = __importDefault(require("./src/routes/bookRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
app.get('/', (_req, res) => {
    res.status(statusCode_1.default.OK).send('Express + TypeScript');
});
app.use(bookRoutes_1.default);
// middleware de erro (qualquer tipo de erro que acontencer em tempo de execucao cairá aqui)
// Sempre coloque ele após a declaração de outros middlewares, caso contrário esse middleware não irá capturar os erros dos demais.
app.use((err, _req, res, next) => {
    const { name, message, details } = err;
    console.log(`name: ${name}`);
    switch (name) {
        case 'BadRequestError':
            res.status(400).json({ message });
            break;
        case 'ValidationError':
            res.status(400).json({ message: details[0].message });
            break;
        case 'NotFoundError':
            res.status(404).json({ message });
            break;
        case 'ConflictError':
            res.status(409).json({ message });
            break;
        default:
            console.error(err);
            res.sendStatus(500);
    }
    next();
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
