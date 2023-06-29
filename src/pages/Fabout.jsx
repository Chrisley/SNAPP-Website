import React from "react";
import "../App.css";

function About() {
  return (
    <>
      {/*Hero section*/}
      <div className=" w-full z-10 relative">
        <img src="../media/about/Group 468.png" alt="hero" className="w-full" />
      </div>

      <div className="flex flex-wrap 2xl:container xl:container lg:container md:container lg:mb-10  lg:pb-10 md:px-10 xs:px-4">
        <div className=" 2xl:w-9/12 xl:w-8/12 lg:w-7/12 md:w-7/12 sm:12/12 xs:w-full xl:pl-20 2xl:pl-40 2xl:pt-14 xs:pl-0 md:pl-0 sm:pl-0 xs:px-5 xl:pr-10 lg:pr-10 md:pr-12 sm:pr-0 xs:pr-0">
          <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-[22px] xs:text-xl my-5 md:pt-10 lg:pt-20 xs:mt-10 font-semibold lg:pb-4">
            Making your world a safer place
          </h3>
          <div className="2xl:text-[22px] xl:text-xl 2xl:leading-10 xl:leading-10 lg:leading-6 lg:text-sm md:text-xs xs:text-xs sm:text-xs">
            <p className="mb-4 font-semibold md:text-lg xs:text-sm lg:text-2xl">
              Access to information affects lives.
            </p>
            <p className="mb-2">
              At Safenaija we hold the belief that communities that are united
              are more secure.
            </p>
            <p className="mb-2">
              With the ease of access to information, effortless sharing, and
              simple connectivity in today's world, we are yet to harness the
              strength that comes with collective vigilance.
            </p>
            <p className="">
              Our team at Safenaija is committed to developing state-of-the-art
              technology that empowers you to take care of your loved ones and
              favorite places.
            </p>
          </div>
        </div>
        <div className="xl:w-2/12 h-60 lg:w-4/12 md:w-4/12  xs:hidden md:block">
          <img
            src="../media/about/Rectangle 2523.png"
            alt="hero"
            className="w-full side-img"
          />
        </div>
      </div>

      <div className="2xl:container xl:container lg:container md:container xs:w-full xl:mb-20  md:mb-10 xs:mb-6 sm:px-4  mx-auto xl:pt-0 lg:pt-0  2xl:mt-40  xl:mt-20 md:mt-10 xs:mt-6 ">
        <div className="flex flex-wrap mx-auto xs:px-5 md:px-5 lg:px-5 xl:px-0">
          <div className="md:w-1/2 sm:w-full xs:pl-0 ">
            <h3 className="2xl:4xl xl:3xl lg:text-3xl md:text-xl xs:text-xl lg:pt-34 md:my-5 xs:my-0 md:pt-10 font-semibold">
              SafeNaija is on a mission to make your world a better and safer
              place
            </h3>
          </div>

          <div className="md:w-1/2 sm:w-full">
            <div className="xl:text-[22px] md:text-xs lg:text-sm  lg:text-[22px] xl:leading-10  lg:leading-6 xs:text-xs md:my-5 xs:my-0 md:pt-10 xs:pt-4 md:mx-5 xs:mx-0 md:pr-5 xs:pr-0">
              <p className="mb-2 font-semibold 2xl:text-lg xl:text-2xl lg:text-2xl md:text-2xl xs:text-sm">
                Public information for public good
              </p>
              <p className="mb-2">
                We believe in giving people a way to use their phones to protect
                a neighbor, to prevent a tragedy, and to count on one another.
              </p>
              <p className="mb-2">
                Achieving a safer and more secure Nigeria for all through
                collective efforts of individuals within their respective
                surroundings.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <p className="text-center font-semibold xl:text-lg lg:text-sm md:text-sm xs:text-xs xs:px-4 md:px-20 mt-5">
          MOOHUB Technologies operates the SafeNaija mobile application, offered
          to every customer using the Service.
        </p>
        <img
          src="./media/Frame 6375 1.png"
          alt=""
          className="w-48 mt-10 my-20 mx-auto"
        />
      </div>

      {/* Pre-footer section*/}
      <div className="w-full bottom-0 right-0 left-0  z-10 bg-black text-white pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className=" mx-auto item-center justify-center">
            <h2 className="text-center font-bold text-3xl mb-6">
              Protect your world
            </h2>
            <p className="text-center mb-4">
              {" "}
              Click on the your device icons below and download for free.
            </p>
            <div className="flex flex-wrap mx-auto  justify-center">
              <a href="https://play.google.com/store/apps/details?id=com.moohub.safenaija">
                <img src="./media/play2.png" alt="" className="sn-btn1" />
              </a>
              <a href="#">
                <img src="./media/applestore.png" alt="" className="sn-btn2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default About;
