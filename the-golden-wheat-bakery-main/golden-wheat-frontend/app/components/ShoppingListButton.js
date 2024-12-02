export default function ShoppingList() {
  return (
    <button
      type="button"
      className="relative h-10 w-10 text-2xl hover:scale-110 focus:bg-black focus:rounded-full"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View Pre-Ordered List</span>
      <i className="fas fa-shopping-bag text-2xl text-white" />
    </button>
  );
}
