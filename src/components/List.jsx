import { useContext } from "react";
import { ListItem } from "./ListItem";
import { NameContext } from "../providers/NameContext";
export const List = () => {
  const { removeName, nameList } = useContext(NameContext);

  return (
    <>
      {nameList.length > 0 ? (
        <ol>
          {nameList.map((name) => (
            <ListItem key={name.id} item={name} callback={removeName} />
          ))}
        </ol>
      ) : (
        <p>Nenhum boleiro na lista</p>
      )}
    </>
  );
};
