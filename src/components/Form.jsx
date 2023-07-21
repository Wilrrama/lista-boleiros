import { useContext, useEffect, useState } from "react";
import { Input } from "./Input";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineClear } from "react-icons/ai";
import { GiSoccerBall } from "react-icons/gi";
import { NameContext } from "../providers/NameContext";

export const Form = () => {
  const [value, setValue] = useState("");

  const { addName, removeAll } = useContext(NameContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newName = { id: uuidv4(), text: value };
    addName(newName);
    setValue("");
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
