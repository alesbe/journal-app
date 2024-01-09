import { Navigate, Routes } from "react-router-dom"

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <JournalPage/> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
