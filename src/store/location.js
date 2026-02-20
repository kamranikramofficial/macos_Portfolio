import { locations } from "#src/constants";
import { create } from "zustand";
import { immer } from  "zustand/middleware/immer";

const useLocationStore = create(immer((set) => ({
    activeLocation: locations.work,

    setActiveLocation: (location = null) =>
    set((state) => {
       state.activeLocation = location;
    }),

    resetActiveLocation: () =>
    set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
    })
})));