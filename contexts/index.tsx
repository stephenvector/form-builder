import { createContext } from "react";
import { AuthContextValue } from "@/types";
import FormStore from "@/lib/FormStore";

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  checkedAuth: false,
});

export const FormStoreContext = createContext<FormStore>(new FormStore());
