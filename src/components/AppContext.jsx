import { createContext, useCallback, useEffect, useState } from "react"

const AppContext = createContext({})

const save = (datas) => {
  localStorage.setItem("datas", JSON.stringify(datas))
}

export const AppContextProvider = (props) => {
  const [totalIncomming, setTotalIncomming] = useState(0)
  const [totalOutgoing, setTotalOutgoing] = useState(0)
  const [listOperations, setListOperations] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let resIn = listOperations.reduce((total, current) => {
      if (current.value > 0) {
        return Number(total) + Number(current.value)
      }

      return Number(total) + 0
    }, 0)

    setTotalIncomming(resIn)
  }, [listOperations])

  useEffect(() => {
    let resOut = listOperations.reduce((total, current) => {
      if (current.value < 0) {
        return Number(total) + Number(current.value)
      }

      return Number(total) + 0
    }, 0)

    setTotalOutgoing(resOut)
  }, [listOperations])

  useEffect(() => {
    const localStorageDatas = localStorage.getItem("datas")

    if (!localStorageDatas) {
      setLoaded(true)

      return
    }

    const datas = JSON.parse(localStorageDatas)

    setListOperations(datas)
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) {
      return
    }

    save(listOperations)
  }, [loaded, listOperations])

  const addDatas = useCallback(
    (data) => setListOperations((currentdatas) => [...currentdatas, data]),
    []
  )

  return (
    <AppContext.Provider
      {...props}
      value={{ listOperations, totalIncomming, totalOutgoing, addDatas }}
    />
  )
}

export default AppContext
