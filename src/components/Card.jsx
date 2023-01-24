import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function Card({ bookObj }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = async () => {
    setIsOpen(true);
  };

  const closeModal = async () => {
    setIsOpen(false);
  };

  //PLACEHOLDER FOR NON EXISTENT IMAGESS
  //IF HAVE TIME DO VERTICAL FOR EACH BOOK? ALL SIZES

  return (
    <>
      <div className="w-32 h-60 cursor-pointer rounded-sm overflow-hidden mb-3 hover:scale-105 duration-300">
        <div
          className="font-medium hover:font-bold drop-shadow-sm hover:brightness-110 outline outline-2 outline-slate-100 hover:outline-orange-600 pb-1"
          onClick={openModal}
        >
          <img
            src={
              bookObj.volumeInfo.imageLinks == undefined
                ? null
                : bookObj.volumeInfo.imageLinks.thumbnail
            }
            alt="cover image of the book"
            className="w-32 h-44 rounded-sm "
          />
          <p className="text-xs mt-2">{bookObj.volumeInfo.title}</p>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 font-poppins"
          onClose={closeModal}
        >
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
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-sm bg-white p-4 text-left align-middle shadow-xl transition-all">
                  <div className="flex gap-6">
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
                      <h2 className="text-xl font-semibold leading-6 mb-1 text-gray-900">
                        {bookObj.volumeInfo.title}
                      </h2>
                      <p className="text-xs mb-2">
                        {bookObj.volumeInfo.authors == undefined
                          ? "Author Not Available"
                          : bookObj.volumeInfo.authors[0]}
                      </p>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-sm bg-orange-600 px-2 py-1.5 text-sm font-medium text-slate-100 hover:bg-orange-500 "
                        onClick={
                          bookObj.volumeInfo.previewLink
                            ? () =>
                                window.open(
                                  bookObj.volumeInfo.previewLink,
                                  "_blank"
                                )
                            : () => void 0
                        }
                      >
                        Book Preview
                      </button>
                    </div>
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

export default Card;
