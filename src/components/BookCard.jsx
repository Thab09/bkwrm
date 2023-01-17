import { Fragment, useState } from "react";
import { doc, setDoc, collection, deleteDoc } from "firebase/firestore";
import { Dialog, Transition } from "@headlessui/react";
import { db, auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import FavouritedButton from "./FavouritedButton";
import AddToFavouritesButton from "./AddToFavouritesButton";

function BookCard({ bookObj }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [isFavourited, setIsFavourited] = useState(false);

  const query = collection(db, `users/${user.uid}/favourites`);
  const [docs, load, error] = useCollectionData(query);

  const checkIfFavourited = () => {
    docs?.map((doc) => {
      doc.bookid == bookObj.id ? setIsFavourited(true) : console.log("no");
    });
  };
  //no need for if else since BookCardGuest has been created
  const handleFavButton = () => {
    if (user) {
      setIsFavourited(!isFavourited);
    } else {
    }
  };

  const openModal = async () => {
    if (user) checkIfFavourited();
    setIsOpen(true);
  };

  const closeModal = async () => {
    if (user) {
      if (isFavourited == true) {
        const docRef = doc(db, `users/${user.uid}/favourites`, bookObj.id);
        await setDoc(docRef, { bookid: bookObj.id });
      } else {
        await deleteDoc(doc(db, `users/${user.uid}/favourites`, bookObj.id));
      }
    }

    setIsOpen(false);
  };

  return (
    <>
      <div className="h-64 w-32 my-1 cursor-pointer" onClick={openModal}>
        <img
          src={
            bookObj.volumeInfo.imageLinks == undefined
              ? null
              : bookObj.volumeInfo.imageLinks.thumbnail
          }
          alt="cover image of the book"
          className="h-44 w-32 rounded-sm"
        />
        <p className="text-xs font-bold my-1 h-8 overflow-hidden">
          {bookObj.volumeInfo.title}
        </p>
        <p className="text-xs font-medium">
          {bookObj.volumeInfo.authors == undefined
            ? "Author Not Available"
            : bookObj.volumeInfo.authors[0]}
        </p>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-md bg-white p-5 text-left align-middle shadow-xl transition-all">
                  <div className="flex gap-4">
                    <img
                      src={
                        bookObj.volumeInfo.imageLinks == undefined
                          ? null
                          : bookObj.volumeInfo.imageLinks.thumbnail
                      }
                      alt="cover image of the book"
                      className="h-44 w-32 rounded-sm"
                    />
                    <div>
                      <h2 className="text-xl font-bold leading-6 text-gray-900">
                        {bookObj.volumeInfo.title}
                      </h2>
                      <p className="text-xs font-medium">
                        {bookObj.volumeInfo.authors == undefined
                          ? "Author Not Available"
                          : bookObj.volumeInfo.authors[0]}
                      </p>
                    </div>
                  </div>
                  <div className="my-2">
                    {isFavourited ? (
                      <FavouritedButton
                        handleFavButton={handleFavButton}
                      ></FavouritedButton>
                    ) : (
                      <AddToFavouritesButton
                        handleFavButton={handleFavButton}
                      ></AddToFavouritesButton>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default BookCard;
