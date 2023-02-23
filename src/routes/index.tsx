import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<p>teste</p>} />
      <Route path='/teste' element={<p>testando rota</p>} />
      <Route path='/story' />

      {/* <Route path='*' element={<Navigate to='/' />} /> */}
      <Route path='*' element={<p>404</p>} />
    </Routes>
  )
}

export default AppRoutes
