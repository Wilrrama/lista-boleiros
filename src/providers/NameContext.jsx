import { createContext, useState } from "react";

export const NameContext = createContext({});

export const NameProvider = ({ children }) => {
  const [nameList, setNameList] = useState([]);

  const addName = (name) => {
    setNameList([...nameList, name]);
  };

  const removeName = (NameId) => {
    const newNameList = nameList.filter((name) => name.id !== NameId);
    setNameList(newNameList);
  };

  const removeAll = () => {
    const confirmed = confirm("Deseja realmente limpar as Lista?");
    if (confirmed) {
      setNameList([]);
    }
  };

  const getName = () => {
    useEffect(() => {
      const storedList = localStorage.getItem("@nameList");
      if (storedList) {
        setNameList(JSON.parse(storedList));
      }
    }, []);
  };

  const setName = () => {
    useEffect(() => {
      localStorage.setItem("@nameList", JSON.stringify(nameList));
    }, [nameList]);
  };

  return (
    <NameContext.Provider
      value={{
        nameList,
        setNameList,
        addName,
        removeName,
        removeAll,
        getName,
        setName,
      }}
    >
      {children}
    </NameContext.Provider>
  );
};
