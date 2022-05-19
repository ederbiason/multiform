import { Router } from './router'

import { FormProvider } from './contexts/FormContext'

import { GlobalStyle } from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <FormProvider>
        <Router />

        <GlobalStyle/>
      </FormProvider>
    </>
  )
}