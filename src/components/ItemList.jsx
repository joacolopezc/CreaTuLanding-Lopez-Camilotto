import Item from "./Item";

function ItemList({ items = [] }) {
  if (!items || items.length === 0) {
    return (
      <div style={{ 
        padding: "40px",
        textAlign: "center",
        color: "#666"
      }}>
        <p style={{ fontSize: "18px" }}>
          No hay productos para mostrar en esta categoría.
        </p>
      </div>
    );
  }

  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px",
      padding: "20px 0"
    }}>
      {items.map(item => (
        <Item key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ItemList;