import { useEffect, useState } from "react";
import { Input } from "./Input";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineClear } from "react-icons/ai";
import { GiSoccerBall } from "react-icons/gi";

export const Form = ({ addName, setNameList }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newName = { id: uuidv4(), text: value };
    addName(newName);
    setValue("");
  };

  const removeAll = () => {
    const confirmed = confirm("Deseja realmente limpar as Lista?");
    if (confirmed) {
      setNameList([]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label=""
        placeholder="Digite o nome"
        id="nome"
        value={value}
        setValue={setValue}
      />
      <button type="submit">
        <GiSoccerBall />
      </button>
      <button type="button" onClick={removeAll}>
        <AiOutlineClear />
      </button>
    </form>
  );
};
