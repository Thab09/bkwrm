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
      {/* <div className="w-32 h-60 cursor-pointer rounded-sm overflow-hidden mb-3 hover:scale-105 duration-300">
        <div
          className="font-medium hover:font-bold hover:brightness-110 outline outline-2 outline-gray-100 hover:outline-gray-300 pb-1"
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
      </div> */}
      <div
        className="w-full h-36 flex gap-4 p-2 rounded-sm overflow-hidden cursor-pointer  duration-300 border-2 border-transparent hover:brightness-105 hover:border-1 hover:border-purple-main bg-neutral-100 dark:bg-neutral-800"
        onClick={openModal}
      >
        <img
          src={
            bookObj.volumeInfo.imageLinks == undefined
              ? null
              : bookObj.volumeInfo.imageLinks.thumbnail
          }
          alt="cover image of the book"
          className="rounded-sm shrink-0 h-[7.5] w-[5.5rem]  "
        />
        <div>
          <p className="text-md font-bold leading-5 mb-1 text-slate-900 dark:text-slate-50">
            {bookObj.volumeInfo.title}
          </p>
          <p className="text-xs mb-1 font-semibold dark:text-slate-100">
            {bookObj.volumeInfo.authors
              ? bookObj.volumeInfo.authors[0]
              : "Unknown"}
          </p>
          <p className="text-xs h-12 text-neutral-800 dark:text-slate-300 overflow-hidden sm:h-20">
            {bookObj.volumeInfo.description
              ? bookObj.volumeInfo.description
              : bookObj.volumeInfo.subtitle
              ? bookObj.volumeInfo.subtitle
              : "Not Available"}
          </p>
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
                      //only show button if available
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-sm bg-purple-main px-2 py-1.5 text-sm font-medium text-white hover:bg-purple-main"
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
