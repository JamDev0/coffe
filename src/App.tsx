import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { OrderFormProvider } from './hooks/useOrderForm'
import { PaymentFormProvider } from './hooks/usePaymentForm'
import { ProductCartProvider } from './hooks/useProductCart'
import { ResetCartFormsDatasProvider } from './hooks/useResetCartFormsDatas'
import { WebHistoryProvider } from './hooks/useWebHistory'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'

import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <WebHistoryProvider>
          <ProductCartProvider>
            <PaymentFormProvider>
              <OrderFormProvider>
                <ResetCartFormsDatasProvider>
                  <Router />

                  <GlobalStyles />
                </ResetCartFormsDatasProvider>
              </OrderFormProvider>
            </PaymentFormProvider>
          </ProductCartProvider>
        </WebHistoryProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
