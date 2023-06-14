import React, { useState } from "react";
import "../App.css";
import { Collapse, initTE } from "tw-elements";

initTE({ Collapse });

function Faq() {
  const [activeTab, setActiveTab] = useState(1);

  const toggleAccordion = (tab) => {
    setActiveTab(tab === activeTab ? null : tab);
  };

  const [showLoadMore, setShowLoadMore] = useState(false);

  const handleLoadMoreClick = () => {
    setShowLoadMore(true);
  };

  return (
    <>
      {/*Hero section*/}
      <div className="sn-hero2">
        <div className="container mx-auto text-white align-center">
          <div className=" mx-auto item-center justify-center pt-32">
            <h2 className="text-center font-bold text-4xl mb-6 ">
              Stay
              <span className="bg-white text-green-700 leading-loose ml-2 rounded-lg px-1">
                safe
              </span>
              <br /> through connection
            </h2>
            <p className="text-center mb-4 mx-auto px-4">
              Verify the safety of your destination before heading there.
            </p>
            <div className="flex flex-wrap mx-auto  justify-center"></div>
          </div>
        </div>
      </div>
      {/* Main section */}

      {/* Faq section */}
      <div className="container  mb-20 mx-auto md:px-5 xs:px-0">
        <div className=" mx-auto text-center mt-20 mb-10">
          <h2 className="font-bold xl:text-3xl xs:text-2xl pb-4">
            Frequently Asked Questions
          </h2>
          <p className="xl:text-2xl xs:text-lg">Complaints and feedback</p>
        </div>

        <div id="accordionExample">
          <h3 className="text-lg font-semibold py-4 pl-1">
            Informations Privacy
          </h3>
          <div
            className="rounded-lg mb-4 border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800"
            onClick={() => toggleAccordion(1)}
          >
            <h2 className="mb-0 text-black font-medium" id="headingOne">
              <button
                className="group relative flex w-full items-center rounded-[8px] border-0 bg-white px-5 py-4 text-left 
                  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                  dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black
                   [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-green-600
                    dark:[&:not([data-te-collapse-collapsed])]:text-green-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
              >
                How is my personal information used?
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
                We collect and use personal information to enhance user safety,
                including escalating emergencies to local authorities. We obtain
                user consent while adhering to data protection laws. We
                safeguard your personal information and do not share or sell it
                to third parties. For more details, please refer to our Privacy
                Policy .
              </div>
            )}
          </div>

          <div
            className="rounded-lg mb-4 border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800"
            onClick={() => toggleAccordion(2)}
          >
            <h2 className="mb-0 text-black" id="headingOne">
              <button
                className="group relative flex w-full items-center rounded-[8px] border-0 bg-white px-5 py-4 text-left 
                  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                  dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black
                   [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-green-800
                    dark:[&:not([data-te-collapse-collapsed])]:text-green-600 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
              >
                What is the company's policy on sharing personal information?
                <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#0a8566] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-green-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                We have a strict policy against sharing or selling users'
                personal information to third parties. Our top priority is to
                protect user privacy and safeguard personal data. Your
                information is treated confidentially and solely used to provide
                services and enhance user safety. For more details, please refer
                to our Privacy Policy .
              </div>
            )}
          </div>
          {/*2nd faq section */}
          <h3 className="text-lg font-semibold py-4 pl-1">
            Our Terms and Policies
          </h3>
          <div
            className="rounded-lg mb-4 border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800"
            onClick={() => toggleAccordion(3)}
          >
            <h2 className="mb-0 text-black font-medium" id="headingOne">
              <button
                className="group relative flex w-full items-center rounded-[8px] border-0 bg-white px-5 py-4 text-left 
                  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                  dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black
                   [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-green-600
                    dark:[&:not([data-te-collapse-collapsed])]:text-green-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
              >
                How do I know if a company's terms and policies are trustworthy?
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
            {activeTab === 3 && (
              <div className="px-5 py-4">
                We value trust and have crafted a transparent and trustworthy
                Terms of Use and Privacy Policy. We comply with data protection
                regulations and our terms are written in clear language,
                offering detailed information on data handling and security.
                Please review our Terms of Use and Privacy Policy to understand
                our commitment to protecting your information and providing a
                safe service.
              </div>
            )}
          </div>

          <div
            className="rounded-lg mb-4 border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800"
            onClick={() => toggleAccordion(4)}
          >
            <h2 className="mb-0 text-black" id="headingOne">
              <button
                className="group relative flex w-full items-center rounded-[8px] border-0 bg-white px-5 py-4 text-left 
                  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                  dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black
                   [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-green-800
                    dark:[&:not([data-te-collapse-collapsed])]:text-green-600 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
              >
                What happens if there is a breach of the terms and policies?
                <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#0a8566] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-green-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                In the unlikely event of a breach, we have effective procedures
                in place to respond promptly, including thorough investigations,
                mitigating its impact, and implementing preventive measures. We
                value transparency and will inform affected users, providing
                guidance to protect their information. Your data security is our
                utmost priority, and we are dedicated to maintaining the
                integrity of our Terms and Policies.
              </div>
            )}
          </div>
          <div
            className="rounded-lg mb-4 border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800"
            onClick={() => toggleAccordion(5)}
          >
            <h2 className="mb-0 text-black" id="headingOne">
              <button
                className="group relative flex w-full items-center rounded-[8px] border-0 bg-white px-5 py-4 text-left 
                  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                  dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black
                   [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-green-800
                    dark:[&:not([data-te-collapse-collapsed])]:text-green-600 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
              >
                What happens if I don't agree to the terms and policies?
                <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#0a8566] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-green-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
            {activeTab === 5 && (
              <div className="px-5 py-4">
                Our terms and policies outline the rules and guidelines that
                govern the use of our app. By agreeing to these terms, you can
                fully access the features and benefits of SafeNaija while
                ensuring the protection of your personal information. However,
                if you do not agree to the terms and policies, you may not be
                able to use the app or access certain functionalities. Reach out
                to us at enquiries@safenaija.com for further enquiries.
              </div>
            )}
          </div>

          {/* Load more faq section */}
          <div
            className="container  mb-20 mx-auto md:px-5 xs:px-0"
            id="loadmore"
            style={{ display: showLoadMore ? "block" : "none" }}
          >
            <div id="accordionExample">
              <h3 className="text-lg font-semibold py-4 pl-1">Others</h3>
              <div
                className="rounded-lg mb-4 border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800"
                onClick={() => toggleAccordion(6)}
              >
                <h2 className="mb-0 text-black font-medium" id="headingOne">
                  <button
                    className="group relative flex w-full items-center rounded-[8px] border-0 bg-white px-5 py-4 text-left 
                  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                  dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black
                   [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-green-600
                    dark:[&:not([data-te-collapse-collapsed])]:text-green-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                  >
                    How often are news updates and safety tips provided?
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
                {activeTab === 6 && (
                  <div className="px-5 py-4">
                    News updates and safety tips are provided based on reports
                    from other users. The frequency may vary depending on the
                    availability and relevance of such reports. We strive to
                    keep users informed while our users apply these information
                    to deduce valuable safety advice.
                  </div>
                )}
              </div>

              {/* two*/}
              <div
                className="rounded-lg mb-4 border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800"
                onClick={() => toggleAccordion(7)}
              >
                <h2 className="mb-0 text-black font-medium" id="headingOne">
                  <button
                    className="group relative flex w-full items-center rounded-[8px] border-0 bg-white px-5 py-4 text-left 
                  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                  dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black
                   [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-green-600
                    dark:[&:not([data-te-collapse-collapsed])]:text-green-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                  >
                    What role does SafeNaija play in ensuring user safety?
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
                {activeTab === 7 && (
                  <div className="px-5 py-4">
                    SafeNaija serves as an emergency notification app, promptly
                    alerting the appropriate agencies in case of emergencies.
                    While we don’t directly ensure user safety, our focus is on
                    enhancing response times and providing real-time security
                    and safety information.
                  </div>
                )}
              </div>

              {/* three*/}
              <div
                className="rounded-lg mb-4 border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800"
                onClick={() => toggleAccordion(8)}
              >
                <h2 className="mb-0 text-black font-medium" id="headingOne">
                  <button
                    className="group relative flex w-full items-center rounded-[8px] border-0 bg-white px-5 py-4 text-left 
                  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                  dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black
                   [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-green-600
                    dark:[&:not([data-te-collapse-collapsed])]:text-green-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                  >
                    What happens if I trigger the Panic or Danger status?
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
                {activeTab === 8 && (
                  <div className="px-5 py-4">
                    When you trigger the Panic or Danger status, SafeNaija uses
                    advanced location mapping to communicate the emergency
                    location and sends alerts to your inner circle. Depending on
                    the severity, relevant agencies are also notified to handle
                    the situation effectively.
                  </div>
                )}
              </div>

              {/* four*/}

              <div
                className="rounded-lg mb-4 border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800"
                onClick={() => toggleAccordion(9)}
              >
                <h2 className="mb-0 text-black font-medium" id="headingOne">
                  <button
                    className="group relative flex w-full items-center rounded-[8px] border-0 bg-white px-5 py-4 text-left 
                  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                  dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black
                   [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-green-600
                    dark:[&:not([data-te-collapse-collapsed])]:text-green-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                  >
                    Can I add my own emergency contacts to SafeNaija?
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
                {activeTab === 9 && (
                  <div className="px-5 py-4">
                    Yes, you can add and even edit your own emergency contacts
                    to your inner circle within the app. These contacts will
                    receive alerts in case of emergencies, ensuring they are
                    informed and can provide assistance or support. For details,
                    check out our YouTube channel here .
                  </div>
                )}
              </div>

              {/*five*/}
              <div
                className="rounded-lg mb-4 border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800"
                onClick={() => toggleAccordion(10)}
              >
                <h2 className="mb-0 text-black font-medium" id="headingOne">
                  <button
                    className="group relative flex w-full items-center rounded-[8px] border-0 bg-white px-5 py-4 text-left 
                  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                  dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black
                   [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-green-600
                    dark:[&:not([data-te-collapse-collapsed])]:text-green-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                  >
                    Is SafeNaija available in all locations?
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
                {activeTab === 10 && (
                  <div className="px-5 py-4">
                    SafeNaija's availability may vary by location. We strive to
                    expand our coverage, but currently, our services are limited
                    to specific regions in Nigeria. Please check our app to see
                    if SafeNaija is supported in your location.
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className="my-10 mx-auto flex justify-center loadlink"
            style={{ display: showLoadMore ? "none" : "flex" }}
          >
            <button
              className="align-center flex"
              type="button"
              onClick={handleLoadMoreClick}
            >
              <span className="md:text-lg xs:text-sm text-gray-600">
                Load more
              </span>
              <svg
                className="md:mx-3 xs:mx-1 xs:h-2 xs:mt-2 md:mt-0 md:h-8"
                width="20"
                height="20"
                viewBox="0 0 11 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1461 0.681152L0.852585 0.681152C0.412805 0.681152 0.188766 1.21221 0.50408 1.52752L5.15082 6.17426C5.34166 6.36511 5.65698 6.36511 5.84791 6.17426L10.4946 1.52752C10.8099 1.21221 10.5858 0.681152 10.1461 0.681152Z"
                  fill="#8E9BAE"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Pre-footer section*/}
      <section>
        <div className=" text-black xs:pt-5 xs:pb-10 lg:pt-[120px] lg:pb-20">
          <div className="container mx-auto faq-prefooter xs:pb-10 md:pt-24 xs:pt-2 rounded-lg">
            <div className=" item-center justify-center xs:mx-2 flex flex-wrap">
              <div className="md:w-6/12 xs:w-full md:pt-20 pr-2">
                <h2 className="text-center font-bold md:text-xl lg:text-2xl xs:text-lg leading-4 mb-2 ">
                  Can’t find what you’re looking for?
                </h2>
                <p className=" xs:text-xs md:text-sm text-center mb-8 px-6">
                  Email us here or click here to call us and our Customer
                  Service Team will get back to you as soon as possible.
                </p>
                {/*<div className="flex flex-wrap mx-auto  justify-center">
                  <img
                    src="./media/googleplay.png"
                    alt=""
                    className="sn-btn1"
                  />
                  <img
                    src="./media/applestore.png"
                    alt=""
                    className="sn-btn2"
                  />
            </div>*/}
              </div>
              <div className="md:w-6/12 xs:w-full">
                <div className="contact-frm xs:mx-2">
                  <div className="">
                    <form>
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
                              id="emai"
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-auto">
            <div className="md:w-1/2 xs:w-full">
              <div className="md:text-center xs:text-center xxs:text-center text-black px-6 md:px-8 md:mb-20 xs:mb-8 mt-10">
                <h2 className="md:text-center xs:text-center font-bold xs:text-3xl lg:text-7xl md:mb-8 xs:mb-3">
                  Make
                  <span className="bg-[#eefcf3] text-green-700 rounded-lg leading-normal ml-2 px-2">
                    safety
                  </span>
                  <br /> your priority
                </h2>
                <p className="md:text-lg xs:text-sm md:text-center xs:text-center">
                  Be alerted about the incidents taking place in your proximity
                  and prioritize your safety.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 xs:w-full xs:mb-20">
              <div className=" justify-center flex flex-wrap md:pt-28 xs:pt-0 md:px-4 pt-10">
                <a
                  href="https://play.google.com/store/apps/details?id=com.moohub.safenaija"
                  className="pr-2"
                >
                  <img
                    src="../media/Buttons (3).png"
                    alt="playstore"
                    srcSet=""
                    className=" xl:h-24 lg:h-20 xs:h-12 h-10"
                  />
                </a>
                <a href="#" className="pl-2">
                  <img
                    src="../media/Buttons (2).png"
                    alt="applestore"
                    srcSet=""
                    className=" xl:h-24 lg:h-20 xs:h-12 h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
