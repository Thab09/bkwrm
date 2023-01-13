import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import LoginToSaveBookButton from "./LoginToSaveBookButton";

function BookCardGuest({ bookObj }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = async () => {
    setIsOpen(true);
  };

  const closeModal = async () => {
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
                    <LoginToSaveBookButton></LoginToSaveBookButton>
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

export default BookCardGuest;
