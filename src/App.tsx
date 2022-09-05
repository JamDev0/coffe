import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ProductCartProvider } from './hooks/useProductCart'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'

import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductCartProvider>
        <BrowserRouter>
          <Router />

          <GlobalStyles />
        </BrowserRouter>
      </ProductCartProvider>
    </ThemeProvider>
  )
}
