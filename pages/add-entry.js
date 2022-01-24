import { AppContextProvider } from "../src/components/AppContext"
import Header from "../src/components/Header"
import FormAddEntry from "../src/components/form/FormAddEntry"


export default function Home() {
  return (
    <AppContextProvider>
      <Header />
      <FormAddEntry />
    </AppContextProvider>
  )
}
