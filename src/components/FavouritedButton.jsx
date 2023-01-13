function FavouritedButton(props) {
  return (
    <button
      type="button"
      className="inline-flex justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-yellow-700 "
      onClick={props.handleFavButton}
    >
      Favourited
    </button>
  );
}

export default FavouritedButton;
