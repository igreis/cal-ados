import { create } from 'zustand';

// Defina uma interface para o estado da store
interface StoreState {
  shoeType: string;
  setShoeType: (type: string) => void; // Função para alterar o tipo de calçado
}

const useStore = create<StoreState>((set) => ({
  shoeType: 'tenis',
  setShoeType: (type: string) => set({ shoeType: type }), // Função para atualizar o estado
}));

export default useStore;
