/* eslint-disable no-unused-vars */
import React from "react";

function Contact () {
    return (
        <section className="overflow-hidden py-36 dark:bg-dark">
            <div className="container mx-auto">
                <div className=" flex flex-wrap lg:justify-between">
                    {/* Left Section */}
                    <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                        <div className="mb-12 max-w-[570px] lg:mb-0">
                            <span className="mb-4 block text-base font-semibold text-primary">
                                Contact Us
                            </span>
                            <h2 className="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px] dark:text-white">
                                GET IN TOUCH WITH US
                            </h2>
                            <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                adiqua minim veniam quis nostrud exercitation ullamco.
                            </p>

                            {/* Phone Number */}
                            <div className="mb-8 flex w-full max-w-[370px]">
                                <div className="w-full">
                                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                        Phone Number
                                    </h4>
                                    <p className="text-base text-body-color dark:text-dark-6">
                                        (+62)81 414 257 9980
                                    </p>
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="mb-8 flex w-full max-w-[370px]">
                               <div className="w-full">
                                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                        Email Address
                                    </h4>
                                    <p className="text-base text-body-color dark:text-dark-6">
                                        <a href="mailto:visualprime.devs@gmail.com">visualprime.devs@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <div className="relative rounded-lg p-8 shadow-lg sm:p-12 dark:bg-dark-2">
                            <form>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full rounded-lg border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full rounded-lg border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Your Phone"
                                        className="w-full rounded-lg border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                                    />
                                </div>
                                <div className="mb-6">
                                    <textarea
                                        rows="6"
                                        placeholder="Your Message"
                                        className="w-full resize-none rounded-lg border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
