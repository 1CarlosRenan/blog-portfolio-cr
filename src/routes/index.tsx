import { Routes, Route } from 'react-router-dom'
import { Text } from '../components/Text/Text'
import { Page404 } from '../pages/404'
import { Icon } from '../components/Icon'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<p>teste</p>} />
      <Route path='/teste' element={<p>testando rota</p>} />
      <Route
        path='/Text'
        element={
          <Text size='m' className='teste'>
            Texto
          </Text>
        }
      />
      <Route path='/404' element={<Icon icon='figma' />} />
      <Route path='/404' element={<Page404 />} />

      {/* <Route path='*' element={<Navigate to='/' />} /> */}
      <Route path='*' element={<p>404</p>} />
    </Routes>
  )
}

export default AppRoutes
