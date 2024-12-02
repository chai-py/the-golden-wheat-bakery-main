export default function WishlistItem({ item, onRemove }) {
  return (
    <div>
      <img src={item.imageSrc} alt={item.title} />
      <h1>{item.title}</h1>
      <button onClick={() => onRemove(item.id)}></button>
    </div>
  );
}
