import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "@/routes/RoutesIndex";
import Header from "@/components/Header";
import { AuthContextProvider } from "@/context/AuthContextProvider";
import './App.css'


function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
    <Header/>
  <RoutesIndex/>
    </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
