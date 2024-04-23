import { useContext } from "react";
import { SongContext } from "./SongContextProvider";

export const useSongContext = () => {
 const context = useContext(SongContext)
  return context
}

 