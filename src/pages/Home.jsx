import "../App.css";
import React, { useEffect } from "react";
import Carousel from "../component/Carousel/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
      <Carousel />
      {/*Hero section*
                <div className='sn-hero'>
                <div className="flex justify-center items-center h-full">
                        <div className="text-center text-white px-6 md:px-12">
                            <h1 className="text-4xl sm:text-3xl md:text-5xl xl:text-7xl font-bold tracking-tight mb-12">Safety for <span className='text-blue-900'>One</span>, Security for <span className='text-green-600'>All</span>.</h1>
                            <p className=''>
                            Achieving a safer and more secure Nigeria for all through collective efforts of individuals within <br/>their respective surroundings.
                            </p>
                        </div>
                </div>
                
    </div>*/}

      {/*Feature section*/}
      <section className="mb-32 mt-20 text-gray-800 text-center" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 lg:gap-x-12">
            <div className="mb-12 md:mb-0 px-4">
              <div className="p-4  inline-block mb-6">
                <img src="../media/vector.png" alt="notification" />
              </div>
              <h5 className="text-lg font-bold mb-4">Real time Notification</h5>
              <p className="text-gray-500">
                Provides real-time protection from possible security threats.
              </p>
            </div>

            <div className="mb-12 md:mb-0 px-4">
              <div className="p-4 inline-block mb-6">
                <img src="../media/vector (1).png" alt="emergency" />
              </div>
              <h5 className="text-lg font-bold mb-4 mt-4">Emergency contact</h5>
              <p className="text-gray-500">
                Get in touch with an agent from the government response team.
              </p>
            </div>

            <div className="mb-12 md:mb-0 px-4">
              <div className="p-4 inline-block mb-6">
                <img
                  src="../media/icons8-approval-32.png"
                  alt="user friendly"
                />
              </div>
              <h5 className="text-lg font-bold mb-4">User friendly</h5>
              <p className="text-gray-500">
                Easy for users to navigate and use the app's features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* slider section */}
      <section>
        <div className="container mx-auto flex flex-wrap mb-20 xs:hidden  lg:flex" data-aos="flip-up">
          <div className="slide-item slide1"></div>
          <div className="slide-item slide2"></div>
          <div className="slide-item slide3"></div>
          <div className="slide-item slide4"></div>
        </div>
        <div className="container mx-auto  mb-20  lg:hidden">
          <img
            src="../media/slide1.png"
            alt=""
            className="slide-dummy w-full"
          />
          <img
            src="../media/slide2.png"
            alt=""
            className="slide-dummy w-full"
          />
          <img
            src="../media/slide3.png"
            alt=""
            className="slide-dummy w-full"
          />
          <img
            src="../media/slide4.png"
            alt=""
            className="slide-dummy w-full"
          />
        </div>
      </section>
      <section>
        <div className=" container align-center mx-auto mb-10 px-5" data-aos="zoom-in">
          <h3 className="text-center text-2xl font-bold pb-10">
            {" "}
            More With SafeNaija{" "}
          </h3>
          <div className=" flex mx-auto justify-center">
            <ol className="text-lg sn-list md:text-left xs:text-center">
              <li className="py-5 sn-list">
                See incidents unfold and get the real story from people on the
                scene.
              </li>
              <li className="py-5 sn-list">
                Fast, accurate information makes a meaningful difference in
                emergencies.
              </li>
              <li className="py-5 sn-list">
                Quickly and easily access emergency services in case of an
                emergency.
              </li>
            </ol>
          </div>
        </div>

        <div className="container flex flex-wrap mb-20 mx-auto pl-5 xs:pl-0 lg:px-10 sm:px-10">
          <div className="xl:w-1/2 lg:w-1/2 md:w1/2 w-2/2 py-20 pl-10 xs:pl-0 xs:py-10 xs:px-2 sm:pr-5 xs:pr-0 mx-auto" data-aos="zoom-in-right">
            <p className="xl:text-left md:text-left lg:text-left sm:text-left xs:text-center">
              Our Vision
            </p>
            <h2 className="xl:text-4xl md:text-2xl lg:text-3xl xs:text-xl font-semibold xl:text-left md:text-left lg:text-left xs:text-center">
              Making your community a <br />
              safer one
            </h2>
          </div>
          <div className=" xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-2/2  mb-20 pr-5 xs:px-2 xs:text-justify sm:text-sm xs:text-sm xl:text-lg lg:text-lg text-left"  data-aos="zoom-in-left">
            <p>
              Allow users to report environmental hazards such as oil spills,
              <br />
              chemical leaks, and other types of pollution. By reporting <br />
              these hazards quickly, the <br />
              app can help to mitigate the damage and prevent further harm to
              the environment.
            </p>{" "}
            <br />
            <p>
              In the event of a natural disaster or environmental <br />
              emergency, safe can provide users with emergency <br />
              notifications and information on what to do to stay safe.
              <br />
              This can help to prevent injuries and minimize damage to the
              environment.
            </p>
            <br />
            <p>
              Achieving a safer and more secure Nigeria for all through <br />
              collective efforts of individuals within their respective
              surroundings.
            </p>
          </div>

          <div className=" xl:w-4/12 w-12/12 pr-5 xs:pr-0 sm:hidden xs:block mx-auto">
            <img
              src="../media/blue.png"
              className="w-40 mt-5 mb-14"
              alt="phoneImage"
            />
          </div>

          <div className="xs:w-12/12 sm:w-5/12 md:w-7/12  lg:w-7/12 xl:w-7/12 px-5 xs:px-0 "  data-aos="zoom-in-right">
            <h2 className="text-4xl font-semibold lg:pl-8 xs:text-xl xs:text-center">
              Protecting you through reports.
            </h2>
            <div className=" flex py-5 xs:text-sm ">
              <img
                src="../media/1140-error-outline 1.svg"
                alt="warning"
                className=" w-20 px-2"
              />
              <p>
                See incidents unfold and get the real story from people on the
                scene.
              </p>
            </div>
            <div className=" flex py-5">
              <img
                src="../media/56-document-outline 1.svg"
                alt="emergency"
                className=" w-20 px-2"
              />
              <p>
                Fast, accurate information makes a meaningful difference in
                emergencies.
              </p>
            </div>
            <div className=" flex py-5">
              <img
                src="../media/475-rescue-safety-ring-help-outline.svg"
                alt="reports"
                className=" w-20 px-2"
              />
              <p>
                Follow up on user reports to ensure that appropriate action is
                taken to address the issues reported.
              </p>
            </div>
            <div className=" flex py-5">
              <img
                src="../media/18-location-pin-outline.svg"
                alt="location"
                className=" w-20 px-2"
              />
              <p>
                Providing information to local support services to provide
                safety to individuals.
              </p>
            </div>
            <div className=" flex py-5">
              <img
                src="../media/471-ebook-reader-outline.svg"
                alt="e-book"
                className=" w-20 px-2"
              />
              <p>
                Feedback from users on their experience using the app and make
                changes based on user feedback.
              </p>
            </div>
            <div className=" flex py-5">
              <img
                src="../media/1985-police-car-outline.svg"
                alt="police"
                className=" w-20 px-2"
              />
              <p>
                GPS tracking technology to allow users to track the location of
                their loved ones or their own location in real-time.
              </p>
            </div>
          </div>
          <div className=" xl:w-4/12 w-12/12 sm:w-5/12 px-14 xs:hidden sm:block"  data-aos="zoom-in-left">
            <img
              src="../media/blue.png"
              className="w-72 md:mt-20 lg:mt-4"
              alt="phoneImage"
            />
          </div>
        </div>
      </section>

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
};

export default Home;
