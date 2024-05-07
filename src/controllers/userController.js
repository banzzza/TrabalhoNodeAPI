"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.addUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
// Adicionar um novo usuário
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.default.create(req.body);
        res.status(201).json({ user });
    }
    catch (err) { // Especificando o tipo 'any' para 'err'
        res.status(400).json({ message: err.message });
    }
});
exports.addUser = addUser;
// Recuperar todos os usuários
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.find();
        res.status(200).json({ users });
    }
    catch (err) { // Especificando o tipo 'any' para 'err'
        res.status(500).json({ message: err.message });
    }
});
exports.getAllUsers = getAllUsers;
// Recuperar um usuário pelo ID
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.default.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return;
        }
        res.status(200).json({ user });
    }
    catch (err) { // Especificando o tipo 'any' para 'err'
        res.status(500).json({ message: err.message });
    }
});
exports.getUserById = getUserById;
// Atualizar um usuário pelo ID
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return;
        }
        res.status(200).json({ user });
    }
    catch (err) { // Especificando o tipo 'any' para 'err'
        res.status(500).json({ message: err.message });
    }
});
exports.updateUser = updateUser;
// Excluir um usuário pelo ID
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.default.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return;
        }
        res.status(200).json({ message: 'Usuário excluído com sucesso' });
    }
    catch (err) { // Especificando o tipo 'any' para 'err'
        res.status(500).json({ message: err.message });
    }
});
exports.deleteUser = deleteUser;
