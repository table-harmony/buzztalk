"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

import { Message } from "./message";
import { CreateMessageForm } from "./create-message-form";

export function Chat() {
  const messages = useQuery(api.messages.getMessages);

  return (
    <div>
      <div className="flex flex-col gap-8">
        {messages?.map((message) => (
          <Message
            key={message._id}
            id={message._id}
            body={message.body}
            createdAt={message._creationTime}
            user={{
              name: message.user?.name,
              image: message.user?.image,
              clerkId: message.user?.clerkId,
            }}
          />
        ))}
      </div>
      <CreateMessageForm />
    </div>
  );
}

//
//
//return (
//  <div className="overflow-auto sm:h-[calc(100vh-60px)] flex">
//    <div className="w-full flex justify-center mx-auto pb-4 pl-0 md:pl-4 pr-4 md:pr-6 overflow-auto">
//      <div className="w-full md:max-w-7xl mt-4">
//        <div className="relative flex flex-col h-[calc(100vh-160px)] sm:h-full">
//          <div className="sticky top-0 mb-4 flex flex-col space-y-2 md:flex-row md:items-center md:justify-between z-0  font-semibold">
//            <h1 className="text-[28px] leading-[34px] tracking-[-0.416px] text-neutral-12 font-bold hidden md:block">
//              Messages
//            </h1>
//            <form className="hidden gap-2 items-center sm:flex">
//              <input
//                className="flex w-full rounded-md text-base border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-base placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:w-[280px] font-normal h-9"
//                placeholder="Search messages..."
//                name="search"
//              />
//              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-base transition-colors disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary-darker font-semibold duration-200 rounded-md px-3 h-9">
//                Search
//              </button>
//            </form>
//          </div>
//          <div className="flex-1 overflow-hidden relative">
//            <div className="h-full overflow-y-auto">
//              <div className=" p-2 md:mr-2 min-w-0 break-all">
//                <div className="flex gap-2">
//                  <div className="mt-1">
//                    <span className="flex shrink-0 overflow-hidden rounded-full w-6 h-6">
//                      <img
//                        className="aspect-square h-full w-full"
//                        src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZllZTjByWk9IdFExWEptalhXQTVhQlBmT0cifQ"
//                      />
//                    </span>
//                  </div>
//                  <div className="ml-1 w-full">
//                    <div className="flex gap-2 items-center">
//                      <div className="text-xs">tableharmony</div>
//                      <div className="text-xs text-neutral-600 dark:text-neutral-400">
//                        14 days ago
//                      </div>
//                      <button
//                        type="button"
//                        aria-haspopup="dialog"
//                        aria-expanded="false"
//                        aria-controls="radix-:r6d:"
//                        data-state="closed"
//                        fdprocessedid="ck2xp"
//                      >
//                        <svg
//                          xmlns="http://www.w3.org/2000/svg"
//                          width="18"
//                          height="18"
//                          viewBox="0 0 24 24"
//                          fill="none"
//                          stroke="currentColor"
//                          stroke-width="2"
//                          stroke-linecap="round"
//                          stroke-linejoin="round"
//                          className="lucide lucide-smile text-muted-foreground hover:text-foreground transition"
//                        >
//                          <circle cx="12" cy="12" r="10"></circle>
//                          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
//                          <line x1="9" x2="9.01" y1="9" y2="9"></line>
//                          <line x1="15" x2="15.01" y1="9" y2="9"></line>
//                        </svg>
//                      </button>
//                      <button
//                        className="items-center justify-center whitespace-nowrap text-sm font-base transition-colors disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-7 w-7 rounded-md p-1 flex data-[state=open]:bg-muted"
//                        type="button"
//                        id="radix-:r6e:"
//                        aria-haspopup="menu"
//                        aria-expanded="false"
//                        data-state="closed"
//                      >
//                        <svg
//                          width="15"
//                          height="15"
//                          viewBox="0 0 15 15"
//                          fill="none"
//                          xmlns="http://www.w3.org/2000/svg"
//                          className="h-4 w-4"
//                        >
//                          <path
//                            d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
//                            fill="currentColor"
//                            fill-rule="evenodd"
//                            clip-rule="evenodd"
//                          ></path>
//                        </svg>
//                        <span className="sr-only">Open menu</span>
//                      </button>
//                    </div>
//                    <div className="text-sm whitespace-pre-line min-w-0 break-all">
//                      Hello
//                    </div>
//                    <div className="flex items-center space-x-1 "></div>
//                  </div>
//                </div>
//              </div>
//              <div className=" p-2 md:mr-2 min-w-0 break-all">
//                <div className="flex gap-2">
//                  <div className="mt-1">
//                    <span className="flex shrink-0 overflow-hidden rounded-full w-6 h-6">
//                      <img
//                        className="aspect-square h-full w-full"
//                        src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZllZTjByWk9IdFExWEptalhXQTVhQlBmT0cifQ"
//                      />
//                    </span>
//                  </div>
//                  <div className="ml-1 w-full">
//                    <div className="flex gap-2 items-center">
//                      <div className="text-xs">tableharmony</div>
//                      <div className="text-xs text-neutral-600 dark:text-neutral-400">
//                        11 days ago
//                      </div>
//                      <button
//                        type="button"
//                        aria-haspopup="dialog"
//                        aria-expanded="false"
//                        aria-controls="radix-:r6g:"
//                        data-state="closed"
//                      >
//                        <svg
//                          xmlns="http://www.w3.org/2000/svg"
//                          width="18"
//                          height="18"
//                          viewBox="0 0 24 24"
//                          fill="none"
//                          stroke="currentColor"
//                          stroke-width="2"
//                          stroke-linecap="round"
//                          stroke-linejoin="round"
//                          className="lucide lucide-smile text-muted-foreground hover:text-foreground transition"
//                        >
//                          <circle cx="12" cy="12" r="10"></circle>
//                          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
//                          <line x1="9" x2="9.01" y1="9" y2="9"></line>
//                          <line x1="15" x2="15.01" y1="9" y2="9"></line>
//                        </svg>
//                      </button>
//                      <button
//                        className="items-center justify-center whitespace-nowrap text-sm font-base transition-colors disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-7 w-7 rounded-md p-1 flex data-[state=open]:bg-muted"
//                        type="button"
//                        id="radix-:r6h:"
//                        aria-haspopup="menu"
//                        aria-expanded="false"
//                        data-state="closed"
//                      >
//                        <svg
//                          width="15"
//                          height="15"
//                          viewBox="0 0 15 15"
//                          fill="none"
//                          xmlns="http://www.w3.org/2000/svg"
//                          className="h-4 w-4"
//                        >
//                          <path
//                            d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
//                            fill="currentColor"
//                            fill-rule="evenodd"
//                            clip-rule="evenodd"
//                          ></path>
//                        </svg>
//                        <span className="sr-only">Open menu</span>
//                      </button>
//                    </div>
//                    <div className="text-sm whitespace-pre-line min-w-0 break-all"></div>
//                    <button
//                      className="w-full h-full"
//                      type="button"
//                      aria-haspopup="dialog"
//                      aria-expanded="false"
//                      aria-controls="radix-:r6j:"
//                      data-state="closed"
//                    >
//                      <img
//                        alt="example asset"
//                        loading="lazy"
//                        width="200"
//                        height="200"
//                        decoding="async"
//                        data-nimg="1"
//                        className="rounded hover:opacity-90 hover:shadow-lg"
//                        srcset="/_next/image?url=https%3A%2F%2Fknowing-cheetah-531.convex.site%2FgetImage%3FstorageId%3Dkg29sgzy6de2xcbf70pcfe4eps6x27zt&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fknowing-cheetah-531.convex.site%2FgetImage%3FstorageId%3Dkg29sgzy6de2xcbf70pcfe4eps6x27zt&amp;w=640&amp;q=75 2x"
//                        src="/_next/image?url=https%3A%2F%2Fknowing-cheetah-531.convex.site%2FgetImage%3FstorageId%3Dkg29sgzy6de2xcbf70pcfe4eps6x27zt&amp;w=640&amp;q=75"
//                      />
//                    </button>
//                    <div className="flex items-center space-x-1 "></div>
//                  </div>
//                </div>
//              </div>
//              <div className=" p-2 md:mr-2 min-w-0 break-all">
//                <div className="flex gap-2">
//                  <div className="mt-1">
//                    <span className="flex shrink-0 overflow-hidden rounded-full w-6 h-6">
//                      <img
//                        className="aspect-square h-full w-full"
//                        src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZllZTjByWk9IdFExWEptalhXQTVhQlBmT0cifQ"
//                      />
//                    </span>
//                  </div>
//                  <div className="ml-1 w-full">
//                    <div className="flex gap-2 items-center">
//                      <div className="text-xs">tableharmony</div>
//                      <div className="text-xs text-neutral-600 dark:text-neutral-400">
//                        11 days ago
//                      </div>
//                      <button
//                        type="button"
//                        aria-haspopup="dialog"
//                        aria-expanded="false"
//                        aria-controls="radix-:r6m:"
//                        data-state="closed"
//                      >
//                        <svg
//                          xmlns="http://www.w3.org/2000/svg"
//                          width="18"
//                          height="18"
//                          viewBox="0 0 24 24"
//                          fill="none"
//                          stroke="currentColor"
//                          stroke-width="2"
//                          stroke-linecap="round"
//                          stroke-linejoin="round"
//                          className="lucide lucide-smile text-muted-foreground hover:text-foreground transition"
//                        >
//                          <circle cx="12" cy="12" r="10"></circle>
//                          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
//                          <line x1="9" x2="9.01" y1="9" y2="9"></line>
//                          <line x1="15" x2="15.01" y1="9" y2="9"></line>
//                        </svg>
//                      </button>
//                      <button
//                        className="items-center justify-center whitespace-nowrap text-sm font-base transition-colors disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-7 w-7 rounded-md p-1 flex data-[state=open]:bg-muted"
//                        type="button"
//                        id="radix-:r6n:"
//                        aria-haspopup="menu"
//                        aria-expanded="false"
//                        data-state="closed"
//                      >
//                        <svg
//                          width="15"
//                          height="15"
//                          viewBox="0 0 15 15"
//                          fill="none"
//                          xmlns="http://www.w3.org/2000/svg"
//                          className="h-4 w-4"
//                        >
//                          <path
//                            d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
//                            fill="currentColor"
//                            fill-rule="evenodd"
//                            clip-rule="evenodd"
//                          ></path>
//                        </svg>
//                        <span className="sr-only">Open menu</span>
//                      </button>
//                    </div>
//                    <div className="text-sm whitespace-pre-line min-w-0 break-all">
//                      Hello
//                    </div>
//                    <div className="flex items-center space-x-1 "></div>
//                  </div>
//                </div>
//              </div>
//              <div className=" p-2 md:mr-2 min-w-0 break-all">
//                <div className="flex gap-2">
//                  <div className="mt-1">
//                    <span className="flex shrink-0 overflow-hidden rounded-full w-6 h-6">
//                      <img
//                        className="aspect-square h-full w-full"
//                        src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZllZTjByWk9IdFExWEptalhXQTVhQlBmT0cifQ"
//                      />
//                    </span>
//                  </div>
//                  <div className="ml-1 w-full">
//                    <div className="flex gap-2 items-center">
//                      <div className="text-xs">tableharmony</div>
//                      <div className="text-xs text-neutral-600 dark:text-neutral-400">
//                        about 3 hours ago
//                      </div>
//                      <button
//                        type="button"
//                        aria-haspopup="dialog"
//                        aria-expanded="false"
//                        aria-controls="radix-:r6p:"
//                        data-state="closed"
//                      >
//                        <svg
//                          xmlns="http://www.w3.org/2000/svg"
//                          width="18"
//                          height="18"
//                          viewBox="0 0 24 24"
//                          fill="none"
//                          stroke="currentColor"
//                          stroke-width="2"
//                          stroke-linecap="round"
//                          stroke-linejoin="round"
//                          className="lucide lucide-smile text-muted-foreground hover:text-foreground transition"
//                        >
//                          <circle cx="12" cy="12" r="10"></circle>
//                          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
//                          <line x1="9" x2="9.01" y1="9" y2="9"></line>
//                          <line x1="15" x2="15.01" y1="9" y2="9"></line>
//                        </svg>
//                      </button>
//                      <button
//                        className="items-center justify-center whitespace-nowrap text-sm font-base transition-colors disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-7 w-7 rounded-md p-1 flex data-[state=open]:bg-muted"
//                        type="button"
//                        id="radix-:r6q:"
//                        aria-haspopup="menu"
//                        aria-expanded="false"
//                        data-state="closed"
//                      >
//                        <svg
//                          width="15"
//                          height="15"
//                          viewBox="0 0 15 15"
//                          fill="none"
//                          xmlns="http://www.w3.org/2000/svg"
//                          className="h-4 w-4"
//                        >
//                          <path
//                            d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
//                            fill="currentColor"
//                            fill-rule="evenodd"
//                            clip-rule="evenodd"
//                          ></path>
//                        </svg>
//                        <span className="sr-only">Open menu</span>
//                      </button>
//                    </div>
//                    <div className="text-sm whitespace-pre-line min-w-0 break-all">
//                      s
//                    </div>
//                    <div className="flex items-center space-x-1 "></div>
//                  </div>
//                </div>
//              </div>
//            </div>
//            <div className="flex justify-center absolute bottom-0 w-full">
//              <button className="mb-2 text-center text-sm text-white items-center bg-primary rounded-full font-base px-2 py-1 transition-transform duration-200 ease-in-out transform hover:scale-95">
//                Scroll to bottom
//              </button>
//            </div>
//          </div>
//          <div className="w-full  md:pt-0 md:border-transparent">
//            <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 lg:mx-auto">
//              <div className="relative flex h-full flex-1 flex-col">
//                <div className="flex w-full items-center">
//                  <div className="flex flex-col space-y-2 w-full">
//                    <div className="flex items-end gap-2  mt-4">
//                      <button type="button" className="cursor-pointer h-10">
//                        <svg
//                          xmlns="http://www.w3.org/2000/svg"
//                          width="20"
//                          height="20"
//                          viewBox="0 0 24 24"
//                          fill="none"
//                          stroke="currentColor"
//                          stroke-width="2"
//                          stroke-linecap="round"
//                          stroke-linejoin="round"
//                          className="lucide lucide-file-image text-muted-foreground"
//                        >
//                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
//                          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
//                          <circle cx="10" cy="12" r="2"></circle>
//                          <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path>
//                        </svg>{" "}
//                        <input accept="image/*" type="file" />
//                      </button>
//                      <div className="w-full relative">
//                        <div className="space-y-2 flex-grow text-base w-full">
//                          <textarea
//                            className="rounded-md border-input px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full border flex items-center h-9 resize-none overflow-hidden bg-background"
//                            name="text"
//                            placeholder="Message..."
//                            id=":r6c:-form-item"
//                            aria-describedby=":r6c:-form-item-description"
//                            aria-invalid="false"
//                          ></textarea>
//                        </div>
//                      </div>
//                      <button
//                        className="inline-flex items-center justify-center whitespace-nowrap font-base transition-colors disabled:pointer-events-none disabled:opacity-50 text-primary-foreground font-semibold duration-200 rounded-md p-0 bg-transparent hover:bg-transparent text-base h-10"
//                        type="submit"
//                        id="sendButton"
//                      >
//                        <svg
//                          xmlns="http://www.w3.org/2000/svg"
//                          width="20"
//                          height="20"
//                          viewBox="0 0 24 24"
//                          fill="none"
//                          stroke="currentColor"
//                          stroke-width="2"
//                          stroke-linecap="round"
//                          stroke-linejoin="round"
//                          className="lucide lucide-send-horizontal text-muted-foreground"
//                        >
//                          <path d="m3 3 3 9-3 9 19-9Z"></path>
//                          <path d="M6 12h16"></path>
//                        </svg>
//                      </button>
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </form>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div>
//);
