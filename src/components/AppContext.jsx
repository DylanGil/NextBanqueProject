import { createContext, useCallback, useEffect, useState } from "react";

const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [totalIncomming, setTotalIncomming] = useState(0);
  const [totalOutgoing, setTotalOutgoing] = useState(0);
  const [index, setIndex] = useState(0);
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
      {
        index: 4,
        somme: -100,
        description: "J'ai payé le mcdo",
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

  const handleSetDataList = useCallback((data) => {
    setIndex(index + 1);
    setListData([...listData, {...data, index: index}])
  }, [])

  return (
    <AppContext.Provider
      {...props}
      value={{ listOperations, totalIncomming, totalOutgoing, handleSetDataList }}
    />
  );
};

export default AppContext;
