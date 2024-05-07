import express, { Application, Request, Response } from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import userRoutes from './routes/userRoutes';
import mongoose from 'mongoose';

const app: Application = express();

// Configuração do Express
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://101521:RBYKyI2D5MDZQrz6@cluster0.fck4ijv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
    process.exit(1);
  });

// Definindo as rotas da API de usuários
app.use('/users', userRoutes);

// Rota padrão
app.get('/', (req: Request, res: Response) => {
  res.send('API de Usuários');
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
