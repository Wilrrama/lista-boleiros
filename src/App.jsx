import { useContext, useEffect, useState } from "react";
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
import { NameContext, NameProvider } from "./providers/NameContext";

export const App = () => {
  const [theme, setTheme] = useState(light);

  const onChangeTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  const { setName, getName } = useContext(NameContext);

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

  return (
    <ThemeProvider theme={theme}>
      <NameProvider>
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
          <h1>Lista de Boleiros</h1>
          <Form />
          <List />
        </StyledMain>
      </NameProvider>
    </ThemeProvider>
  );
};
