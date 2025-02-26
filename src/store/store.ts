import { Store } from "@/types/store";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createUserSlice } from "@/store/userSlice";
import { createCartSlice } from "./cartSlice";

export const useStore = create<Store>()(
  immer((...a) => ({
    ...createUserSlice(...a),
    ...createCartSlice(...a),
  }))
);
