import Item from "./Item";

function ItemList({ items = [] }) {
  if (!items || items.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px"
    }}>
      {items.map(item => (
        <Item key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ItemList;