/* eslint-disable no-unused-vars */
import React from 'react'

function About() {
  return (
    <>
      <section className="overflow-hidden pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            {/* Left Section - Images */}
            <div className="w-full px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="../../public/Banner.png"
                      alt="Service 1"
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="../../public/Banner.png"
                      alt="Service 2"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="../../public/Banner.png"
                      alt="Service 3"
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -bottom-7 -right-7 z-[-1]">
                      <svg
                        width="134"
                        height="106"
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Content */}
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 px-4 lg:mt-0">
                <span className="mb-4 block text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px] dark:text-white">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
