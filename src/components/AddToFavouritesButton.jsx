function AddToFavouritesButton(props) {
  return (
    <button
      type="button"
      className="inline-flex justify-center rounded-md border border-transparent bg-slate-100 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-slate-200 "
      onClick={props.handleFavButton}
    >
      Add to Favourites
    </button>
  );
}

export default AddToFavouritesButton;
