import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { OrderFormProvider } from './hooks/useOrderForm'
import { PaymentFormProvider } from './hooks/usePaymentForm'
import { ProductCartProvider } from './hooks/useProductCart'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'

import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductCartProvider>
        <PaymentFormProvider>
          <OrderFormProvider>
            <BrowserRouter>
              <Router />

              <GlobalStyles />
            </BrowserRouter>
          </OrderFormProvider>
        </PaymentFormProvider>
      </ProductCartProvider>
    </ThemeProvider>
  )
}
