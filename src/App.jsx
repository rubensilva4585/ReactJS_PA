import { useEffect } from "react"
import { createOrUpdatePet, deletePet, getAllPets, getPetById } from "./services/main/pets"
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
