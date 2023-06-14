import React, { useState } from "react";
import "../App.css";
import { Collapse, initTE } from "tw-elements";

initTE({ Collapse });

function TheApp() {
  const [activeTab, setActiveTab] = useState(1);

  const toggleAccordion = (tab) => {
    setActiveTab(tab === activeTab ? null : tab);
  };

  return (
    <>
      {/*Hero section*/}
      <div className="sn-hero xs:h-96">
        <div className="container mx-auto text-white align-center">
          <div className=" mx-auto item-center justify-center pt-36">
            <h2 className="text-center font-bold xs:text-4xl md:text-5xl mb-6 ">
              Make
              <span className="bg-white text-green-700 rounded-lg leading-loose ml-2 px-1">
                safety
              </span>
              <br /> your priority
            </h2>
            <p className="text-center mb-4 mx-auto px-4">
              Verify the safety of your destination before heading there.
            </p>
            <div className="flex flex-wrap mx-auto  justify-center">
              <a href="https://play.google.com/store/apps/details?id=com.moohub.safenaija">
                <img src="./media/play2.png" alt="" className="sn-btn1" />
              </a>
              <a href="">
                <img src="./media/applestore.png" alt="" className="sn-btn2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Main section */}
      <section>
        {/* section 1 */}
        <div className="container flex flex-wrap mb-20 mx-auto mt-10 pl-5 xs:pl-0 lg:px-10 sm:px-10">
          <div className=" xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 w-full py-10 pl-10 xs:pl-0 xs:py-5 xs:px-2 sm:pr-5 xs:pr-0 mx-auto">
            <img
              src="../media/app/phone 2.png"
              alt=""
              className="lg:w-60 xs:w-40 mx-auto"
            />
          </div>
          <div className=" xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 xs:w-full  mb-20 pr-5 xs:px-2 md:text-justify xs:text-center sm:text-sm xs:text-sm xl:text-lg lg:text-lg   text-left lg:my-24 md:my-10 xs:pt-4">
            <h4 className="text-green-500 font-bold text-xl xl:text-2xl pb-5">
              Check the safety status of your emergency contact
            </h4>
            <p className="text-gray-600 font-normal text-sm xl:text-lg md:text-sm pb-5">
              In case of an emergency, your emergency contact could have updated
              their status and you can see the location on the app. This may
              involve making contact through various means to verify their
              well-being and confirm that they are not in danger or require
              assistance.
            </p>
            <p className="text-gray-600 font-normal text-sm xl:text-lg md:text-sm">
              It is important to have a designated emergency contact and to
              check on their safety status in case of an emergency. This can be
              particularly useful in situations where the emergency may affect a
              large area, such as a natural disaster or a terrorist attack, and
              communication may be disrupted.
            </p>
          </div>
        </div>

        {/* section 2 */}

        <div className="container flex flex-wrap mb-20 mx-auto mt-10 pl-5 xs:pl-0 lg:px-10 sm:px-10">
          <div className=" xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 w-full py-10 pl-10 xs:pl-0 xs:py-5 xs:px-2 sm:pr-5 xs:pr-0 mx-auto">
            <img
              src="../media/app/phone 1.png"
              alt=""
              className="lg:w-60 xs:w-40 mx-auto"
            />
          </div>
          <div className=" xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 xs:w-full  mb-20 pr-5 xs:px-2 md:text-justify xs:text-center sm:text-sm xs:text-sm xl:text-lg lg:text-lg   text-left lg:my-24 md:my-10 xs:pt-4">
            <h4 className="text-blue-500 font-bold text-xl xl:text-2xl pb-5">
              Set your status and report incidents for others to see
            </h4>
            <p className="text-gray-600 font-normal text-sm xl:text-lg md:text-sm pb-5">
              This can be particularly useful in situations where you want to
              communicate your location, your safety status, or information
              about an incident to others who may be concerned about your
              well-being.
            </p>
            <p className="text-gray-600 font-normal text-sm xl:text-lg md:text-sm">
              By updating your status and reporting incidents, you can provide
              important information to others who may be in the same area or
              affected by the same incident. It is important to note that you
              should use caution and ensure that the information you share is
              accurate and relevant to the situation.
            </p>
          </div>
        </div>

        {/* section 3*/}
        <div className="container flex flex-wrap mb-20 mx-auto mt-10 pl-5 xs:pl-0 lg:px-10 sm:px-10">
          <div className=" xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 w-full py-10 pl-10 xs:pl-0 xs:py-5 xs:px-2 sm:pr-5 xs:pr-0 mx-auto">
            <img
              src="../media/app/phone 3.png"
              alt=""
              className="lg:w-60 xs:w-40 mx-auto"
            />
          </div>
          <div className=" xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 xs:w-full  mb-20 pr-5 xs:px-2 md:text-justify xs:text-center sm:text-sm xs:text-sm xl:text-lg lg:text-lg   text-left lg:my-24 md:my-10 xs:pt-4">
            <h4 className="text-red-500 font-bold text-xl xl:text-2xl pb-5">
              See reports made at different locations and around
            </h4>
            <p className="text-gray-600 font-normal text-sm xl:text-lg md:text-sm pb-5">
              You can access information about incidents and events that have
              been reported from different locations. This can be particularly
              useful in situations where you want to stay informed about events
              or incidents that may be affecting the areas you are interested
              in.
            </p>
            <p className="text-gray-600 font-normal text-sm xl:text-lg md:text-sm">
              By seeing reports made at different locations, you can get an idea
              of what is happening in different areas and make informed
              decisions about your transit activities.
            </p>
          </div>
        </div>
      </section>

      {/* ehanced feature section */}
      <section className=" mt-20">
        <h3 className="font-bold text-xl pb-2 text-center">
          Elevate your experience, with Enhanced features
        </h3>
        <div className=" flex flex-wrap mb-20 mx-auto lg:container sm:w-full xs:w-full">
          <div className=" xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-2/2 w-full xs:pl-0 xs:py-10 xs:px-2 xs:pr-0">
            <div className="bg-gray-200 sn-Fcard mx-5 px-5 pt-5 pb-5 bside-rose">
              <h4 className="font-semibold text-center pb-2">
                Emergency Calls
              </h4>
              <p className="text-xs">
                The purpose of an emergency call is to request immediate
                assistance and emergency services can respond quickly to the
                situation.
              </p>
            </div>
          </div>

          <div className=" xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-2/2 w-full xs:pl-0 xs:py-10 xs:px-2 xs:pr-0">
            <div className="bg-gray-200 sn-Fcard mx-5 px-5 pt-5 pb-10 bside-blue">
              <h4 className="font-semibold text-center">Navigations</h4>
              <p className="text-xs">
                As you navigate, you can view reports on the map and stay
                informed about what is happening in your surroundings.
              </p>
            </div>
          </div>
          <div className=" xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-2/2 w-full xs:pl-0 xs:py-10 xs:px-2 xs:pr-0">
            <div className="bg-gray-200 sn-Fcard mx-5 px-5 pt-5 pb-10 bside-orange">
              <h4 className="font-semibold text-center">Video Incidents</h4>
              <p className="text-xs">
                If an incident is taking place in your vicinity, you can capture
                a video to show others what is happening at that specific
                location.
              </p>
            </div>
          </div>

          <div className=" xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-2/2 w-full xs:pl-0 xs:py-10 xs:px-2 xs:pr-0">
            <div className="bg-gray-200 sn-Fcard mx-5 px-5 pt-5 pb-10 bside-purple">
              <h4 className="font-semibold text-center">Security Tips</h4>
              <p className="text-xs">
                Discover tips to enhance your security and stay safe in various
                situations, even when there are external factors to consider.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* Faq section */}
        <div className="container sn-faq  mb-20 mx-auto px-5">
          <div className=" mx-auto text-center mt-20 mb-10">
            <h2 className="font-bold xl:text-3xl xs:text-2xl pb-4">
              Information Hub
            </h2>
            <p className="xl:text-2xl xs:text-lg">
              Still not clear what we do?
            </p>
          </div>

          <div id="accordionExample">
            <div
              className="rounded-lg mb-4 border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800"
              onClick={() => toggleAccordion(1)}
            >
              <h2 className="mb-0 text-black font-bold" id="headingOne">
                <button
                  className="group relative flex w-full items-center rounded-[8px] border-0 bg-white px-5 py-4 text-left 
                  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                  dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-green-800
                   [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-green-600
                    dark:[&:not([data-te-collapse-collapsed])]:text-green-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                  type="button"
                >
                  What is SafeNaija
                  <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#0f8a38] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              {activeTab === 1 && (
                <div className="px-5 py-4">
                  SafeNaija is a mobile security emergency application that offers real-time security
                   and safety to its users using technology-assisted traditional means of emergency management and escalation to local authorities.
                </div>
              )}
            </div>

            <div
              className="rounded-lg mb-4 border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800"
              onClick={() => toggleAccordion(2)}
            >
              <h2 className="mb-0 text-black font-bold" id="headingOne">
                <button
                  className="group relative flex w-full items-center rounded-[8px] border-0 bg-white px-5 py-4 text-left 
                  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                  dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-green-800
                   [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800
                    dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                  type="button"
                >
                  How does SafeNaija work?
                  <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              {activeTab === 2 && (
                <div className="px-5 py-4">
                  SafeNaija allows users to add inner circle members who then 
                  receive alerts in emergencies. Reports from other users provide 
                  news updates and safety tips. But it should be noted that SafeNaija is only supplies users with notifications and alerts, and is not directly responsible for user safety, 
                  but promptly informs authorities to enhance response times.
                </div>
              )}
            </div>

            <div
              className="rounded-lg mb-4 border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800"
              onClick={() => toggleAccordion(3)}
            >
              <h2 className="mb-0 text-black font-bold" id="headingOne">
                <button
                  className="group relative flex w-full items-center rounded-[15px] border-0 bg-white px-5 py-4 text-left 
                  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                  dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-green-800
                   [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800
                    dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                  type="button"
                >
                 What is SafeNaija’s approach to safety?
                  <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              {activeTab === 3 && (
                <div className="px-5 py-4">
                  SafeNaija uses advanced location tracking technology to communicate 
                  the emergency location and sends SMS alerts to the user's inner circle,
                   even if they don't have the app installed. Depending on the severity, 
                  SafeNaija notifies relevant agencies to handle the situation effectively.
                </div>
              )}
            </div>
            <div
              className="rounded-lg mb-4 border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800"
              onClick={() => toggleAccordion(4)}
            >
              <h2 className="mb-0 text-black font-bold" id="headingOne">
                <button
                  className="group relative flex w-full items-center rounded-[8px] border-0 bg-white px-5 py-4 text-left 
                  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                  dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-green-800
                   [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800
                    dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                  type="button"
                >
                  How does SafeNaija comply with laws and regulations?
                  <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              {activeTab === 4 && (
                <div className="px-5 py-4">
                 SafeNaija follows government rules by working with legal experts to 
                 protect user privacy and comply with data protection and emergency
                  management laws. They collaborate with local authorities and services,
                   keeping up with regulations and providing clear information through policies, 
                 terms, and certifications to show their commitment to compliance.
                </div>
              )}
            </div>
          
          </div>
        </div>
      </section>
      {/* Pre-footer section*/}
      <section id="download">
        <div className="w-full text-black xs:pt-10 xs:pb-10 lg:pt-[120px] lg:pb-20">
          <div className="container mx-auto sn-prefooter md:pt-24 xs:pt-2">
            <div className=" item-center justify-center lg:mx-20 md:mx-10 xs:mx-2">
              <h2 className="text-center font-bold md:text-2xl lg:text-3xl xs:text-lg leading-4 mb-2 ">
                Safety is just a click away. <br /> Download Safe Naija app now
                and stay protected always.
              </h2>
              <p className=" xs:text-xs md:text-lg text-center mb-8">
                Click on the your device icons below and download for free.
              </p>
              <div className="flex flex-wrap mx-auto  justify-center">
                
              <a href="https://play.google.com/store/apps/details?id=com.moohub.safenaija">
                <img src="./media/play2.png" alt="" className="sn-btn1" />
              </a>
              <a href="">
                <img src="./media/applestore.png" alt="" className="sn-btn2" />
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TheApp;
