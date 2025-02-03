import { create } from 'zustand'

interface Stado {
    siestaabierto: boolean

    abiertomenu: ()=> void

    cerrarMenu : () => void
}

export const useStore = create<Stado>()((set) => ({

siestaabierto: false,

abiertomenu: () => set({siestaabierto: true}),
cerrarMenu: () => set({siestaabierto: false}),

}))
