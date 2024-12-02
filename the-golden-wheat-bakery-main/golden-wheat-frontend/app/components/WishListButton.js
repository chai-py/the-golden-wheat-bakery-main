import "@fortawesome/fontawesome-free/css/all.min.css";

export default function WishListButton() {
  return (
    <button
      type="button"
      className="relative h-10 w-10 text-2xl hover:scale-110 focus:bg-black focus:rounded-full"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View Wishlist</span>
      <i className="fas fa-heart text-2xl " tabIndex={0} />
    </button>
  );
}
