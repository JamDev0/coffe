import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/default'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
  )
}
