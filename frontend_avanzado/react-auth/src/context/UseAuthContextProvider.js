import { useContext } from "react";
import { AuthContext } from "@/context/AuthContextProvider";

export const useSongContext = () => {
 const context = useContext(AuthContext)
  return context
}

 