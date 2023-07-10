import { ListItem } from "./ListItem";
export const List = ({ nameList, removeName }) => {
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
