import { Routes, Route } from 'react-router-dom'
import { Text } from '../components/Text/Text'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<p>teste</p>} />
      <Route path='/teste' element={<p>testando rota</p>} />
      <Route
        path='/story'
        element={
          <Text size='m' className='teste'>
            Texto
          </Text>
        }
      />

      {/* <Route path='*' element={<Navigate to='/' />} /> */}
      <Route path='*' element={<p>404</p>} />
    </Routes>
  )
}

export default AppRoutes
