import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Header } from "./components/Header";
import Logo from "./assets/liga.png";
import { StyledMain } from "./styles/app";
import { GlobalStyled } from "./styles/globalStyles";
import Switch from "react-switch";
import { ThemeProvider } from "styled-components";
import light from "../src/styles/themes/light";
import dark from "../src/styles/themes/dark";
import { GiSoccerBall } from "react-icons/gi";

export const App = () => {
  const [theme, setTheme] = useState(light);

  const onChangeTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  const [nameList, setNameList] = useState([]);

  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return currentDate.toLocaleDateString(undefined, options);
  };

  const getCurrentTime = () => {
    const currentTime = new Date();
    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return currentTime.toLocaleTimeString(undefined, options);
  };

  useEffect(() => {
    const storedList = localStorage.getItem("@nameList");
    if (storedList) {
      setNameList(JSON.parse(storedList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@nameList", JSON.stringify(nameList));
  }, [nameList]);

  const addName = (name) => {
    setNameList([...nameList, name]);
  };

  const removeName = (NameId) => {
    const newNameList = nameList.filter((name) => name.id !== NameId);
    setNameList(newNameList);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledMain>
        <GlobalStyled />
        <Header>
          <img src={Logo} alt="Logotipo da Equipe ou da Liga" />
          <div>
            <h4>Liga Hortolandense</h4>
            <h4>Futebol Amador</h4>
          </div>
          <div>
            <p>{getCurrentDate()}</p>
            <p>{getCurrentTime()}</p>
            <Switch
              onChange={onChangeTheme}
              checked={theme === light}
              height={20}
              checkedIcon={false}
              handDiameter={20}
              offColor={theme.colors.secondary}
              onColor={theme.colors.secondary}
            />
            <p>by bigode</p>
          </div>
        </Header>
        <h1>
          Lista de B<GiSoccerBall />
          leiros
        </h1>
        <Form addName={addName} setNameList={setNameList} />
        <List nameList={nameList} removeName={removeName} />
      </StyledMain>
    </ThemeProvider>
  );
};
