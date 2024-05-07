import { Request, Response } from 'express';
import User from '../models/userModel';

// Adicionar um novo usuário
export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (err: any) { // Especificando o tipo 'any' para 'err'
    res.status(400).json({ message: err.message });
  }
};

// Recuperar todos os usuários
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (err: any) { // Especificando o tipo 'any' para 'err'
    res.status(500).json({ message: err.message });
  }
};

// Recuperar um usuário pelo ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'Usuário não encontrado' });
      return;
    }
    res.status(200).json({ user });
  } catch (err: any) { // Especificando o tipo 'any' para 'err'
    res.status(500).json({ message: err.message });
  }
};

// Atualizar um usuário pelo ID
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      res.status(404).json({ message: 'Usuário não encontrado' });
      return;
    }
    res.status(200).json({ user });
  } catch (err: any) { // Especificando o tipo 'any' para 'err'
    res.status(500).json({ message: err.message });
  }
};

// Excluir um usuário pelo ID
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'Usuário não encontrado' });
      return;
    }
    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  } catch (err: any) { // Especificando o tipo 'any' para 'err'
    res.status(500).json({ message: err.message });
  }
};
