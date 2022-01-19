import Test from "./src/components/Main";
import Header from "./src/components/Header";
import Main from "./src/components/Main";
import { AppContextProvider } from "./src/components/AppContext";
CI = false;

export default function Home() {
  return (
    <AppContextProvider>
      <Header />
      <Main name="" />
    </AppContextProvider>
  );
}
