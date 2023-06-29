import React from "react";
import "../App.css";

function About() {
  return (
    <>
      {/*Hero section*/}
      <div className=" w-full z-10 relative">
        <img src="../media/about/Group 468.png" alt="hero" className="w-full" />
      </div>
      {/*body*/}
      <div className="container mx-auto lg:mb-10  lg:pb-10 md:px-10 xs:px-4 pt-20 pb-10">
        <h2 className=" text-xl font-bold pb-2">WATCH A VIDEO ABOUT THE APP</h2>
        <p className="mb-10 ">
          Our team at Safenaija is committed to developing state-of-the-art
          <br /> technology that empowers you to take care of your loved ones{" "}
          <br /> and favorite places. let’s show you what we mean!!
        </p>
        <div className="bg-green-900 px-4 py-4 rounded-xl">
          <iframe
            className="mx-auto xs:hidden md:block box-border"
            height="600px"
            width="100%"
            src="https://www.youtube.com/embed/yAftqcVMwZA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            className="mx-auto md:hidden xs:block"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/yAftqcVMwZA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className=" container mx-auto lg:mb-10  lg:pb-10 md:px-10 xs:px-4 pt-20 pb-10">
        <h2 className="text-xl font-bold pb-2">
          How To Add Inner Circle on SafeNaija App
        </h2>
        <p className="mb-10 ">
          The inner circle is a a list of designated members of friend and
          family who are going to be alerted in the case of Emergencies getting
          Adequate information
        </p>
        <div className="bg-green-900 px-4 py-4 rounded-xl">
          <iframe
            className="md:block xs:hidden"
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/SYR9lDVjFFc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            className="mx-auto md:hidden xs:block"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/SYR9lDVjFFc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
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
