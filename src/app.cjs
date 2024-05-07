"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
// Configuração do Express
app.use(express_1.default.json());
// Conexão com o MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/api-users')
    .then(() => {
    console.log('Conectado ao MongoDB');
})
    .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
    process.exit(1);
});
// Definindo as rotas da API de usuários
app.use('/users', userRoutes_1.default);
// Rota padrão
app.get('/', (req, res) => {
    res.send('API de Usuários');
});
// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
