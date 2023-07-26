import React from "react";
import { useState } from "react";
import "../App.css";

function Contactform() {
   const [data, setData] = useState({firstName: "", lastName: "", phoneNumber:"", email:"", message:""});
   const handleChange = (e) => {
       const name = e.target.name;
       const value = e.target.value;
       setData({...data, [name]: value})
   }
   const handleSubmit = (e) => {
         e.preventDefault()
         console.log(data);
   }

  return (
    <>
      <div className="">
                    <form method="post" onSubmit={handleSubmit}>
                      {/* Name input */}
                      <div className="flex flex-wrap">
                        <div
                          className="relative mb-6 xs:mr-0 md:w-6/12 xs:w-full xxs:w-full"
                          data-te-input-wrapper-init
                        >
                          <div className="md:mr-2 xs:mr-0">
                            <input
                              type="text"
                              className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white md:py-4 xs:py-3 py-4 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                              id="firstName"
                              name="firstName"
                              onChange={handleChange}
                              value={data.firstName}
                              placeholder="First Name"
                            />
                            <label
                              htmlFor="firstName"
                              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[10px] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-green-500 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-green-500"
                            >
                              First Name
                            </label>
                          </div>
                        </div>
                        <div
                          className="relative mb-6 md:w-6/12 xs:w-full xxs:w-full"
                          data-te-input-wrapper-init
                        >
                          <div className="">
                            <input
                              type="text"
                              className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white md:py-4 xs:py-3 py-4 px-3  leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                              id="lastName"
                              name="lastName"
                              onChange={handleChange}
                              value={data.lastName}
                              placeholder="Last Name"
                            />
                            <label
                              htmlFor="lastName"
                              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[10px] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-success peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-green-500"
                            >
                              Last Name
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap">
                        {/* phone input */}
                        <div
                          className="relative mb-6 md:w-6/12 xs:w-full xxs:w-full"
                          data-te-input-wrapper-init
                        >
                          <div className="md:mr-2 xs:mr-0">
                            <input
                              type="tel"
                              className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white  md:py-4 xs:py-3 py-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                              id="phoneNumber"
                              name="phoneNumber"
                              onChange={handleChange}
                              value={data.phoneNumber}
                              placeholder="Enter your phonenumber"
                            />
                            <label
                              htmlFor="phoneNumber"
                              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[10px] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-green-500 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-green-500"
                            >
                              +123
                            </label>
                          </div>
                        </div>
                        {/* Email input */}
                        <div
                          className="relative mb-6 md:w-6/12 xs:w-full xxs:w-full"
                          data-te-input-wrapper-init
                        >
                          <div className="">
                            <input
                              type="email"
                              className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white pl-2 py-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                              id="email"
                              name="email"
                              onChange={handleChange}
                              value={data.email}
                              placeholder="Email address"
                            />
                            <label
                              htmlFor="email"
                              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[10px] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-green-500 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-green-500"
                            >
                              Email address
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Message textarea */}
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <textarea
                          className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white md:py-4 xs:py-3  leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-green-200 dark:placeholder:text-green-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="message"
                          rows="3"
                          name="message"
                          onChange={handleChange}
                          value={data.message}
                          placeholder="Message"
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-green peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-green-200 dark:peer-focus:text-green-600"
                        >
                          Message
                        </label>
                      </div>

                      {/* Submit button */}
                      <button
                        type="submit"
                        className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full h-14 rounded-lg bg-black px-6 pb-2 pt-2.5 text-lg font-medium leading-normal tracking-wider text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Send
                      </button>
                    </form>
                    </div>
       <p>{data.lastName}, {data.lastName}, {data.phoneNumber}, {data.email}, {data.message}</p>
    </>
  );
}

export default Contactform;
