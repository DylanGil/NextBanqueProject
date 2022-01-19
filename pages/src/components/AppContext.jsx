import { createContext, useEffect, useState } from "react";

const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [totalIncomming, setTotalIncomming] = useState(0);
  const [totalOutgoing, setTotalOutgoing] = useState(0);
  const [listOperations, setListOperations] = useState([
    {
      index: 0,
      somme: 2000,
      description: "J'ajoute mon argent",
    },
    {
      index: 1,
      somme: -100,
      description: "On me vole",
    },
    {
      index: 2,
      somme: -1000,
      description: "AU VOLEUR !",
    },
    {
      index: 3,
      somme: 50,
      description: "Au moins j'ai 50$...",
    },
  ]);

  useEffect(() => {
    let resIn = listOperations.reduce((total, current) => {
      if (current.somme > 0) {
        return Number(total) + Number(current.somme);
      }
      return Number(total) + 0;
    }, 0);

    let resOut = listOperations.reduce((total, current) => {
      if (current.somme < 0) {
        return Number(total) + Number(current.somme);
      }
      return Number(total) + 0;
    }, 0);
    setTotalIncomming(totalIncomming + resIn);
    setTotalOutgoing(totalOutgoing + resOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listOperations]);

  return (
    <AppContext.Provider
      {...props}
      value={{ listOperations, totalIncomming, totalOutgoing }}
    />
  );
};

export default AppContext;
