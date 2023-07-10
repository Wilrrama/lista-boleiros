export const ListItem = ({ item, callback }) => {
  console.log(item);
  return (
    <li>
      {item.index}
      <span>{item.text}</span>
      <button type="button" onClick={() => callback(item.id)}>
        Remover
      </button>
    </li>
  );
};
