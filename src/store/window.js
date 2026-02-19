import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer';
import { WINDOW_CONFIG, INITIAL_Z_INDEX } from '#constants/index.js';


const useWindowStore = create(immer((set) => ({

   windows:WINDOW_CONFIG,
   nextZIndex : INITIAL_Z_INDEX + 1,
    
    openWindow : ( windowkey , data = null) => set((state)=>{
      const win = state.windows[windowkey];
      win.isOpen = true;
      win.zIndex = state.nextZIndex;
      win.data = data ?? win.data;
       state.nextZIndex++;
    }),
    
    
    closeWindow : ( windowkey , data = null) => set((state)=>{
     const win = state.windows[windowkey];
      win.isOpen = false;
      win.isMinimized = false;
      win.isMaximized = false;
      win.zIndex = INITIAL_Z_INDEX;
      win.data = null;
    }),
    focusWindow : ( windowkey , data = null) => set((state)=>{
    const win = state.windows[windowkey];
      win.zIndex = state.nextZIndex++;
    }),

    minimizeWindow : ( windowkey ) => set((state)=>{
     const win = state.windows[windowkey];
      win.isMinimized = true;
    }),

    restoreWindow : ( windowkey ) => set((state)=>{
     const win = state.windows[windowkey];
      win.isMinimized = false;
      win.zIndex = state.nextZIndex++;
    }),

    maximizeWindow : ( windowkey ) => set((state)=>{
     const win = state.windows[windowkey];
      win.isMaximized = !win.isMaximized;
    })

})),);


export default useWindowStore;