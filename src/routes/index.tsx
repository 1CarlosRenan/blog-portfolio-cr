import { Routes, Route, Navigate } from 'react-router-dom'
import App from '../App'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<p>teste</p>} />
      <Route path='/teste' element={<p>testando rota</p>} />

      {/* <Route path='*' element={<Navigate to='/' />} /> */}
      <Route path='*' element={<p>404</p>} />
    </Routes>
  )
}

export default AppRoutes
