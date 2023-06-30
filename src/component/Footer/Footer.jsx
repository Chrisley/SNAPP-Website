import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <>
      <footer className=" bottom-0 right-0 left-0  z-10 bg-black text-white pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="w-full mx-auto">
          <div className="ml-8 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-5/12 md:w-full">
              <div className="mb-10 w-full">
                <a href="/" className="mb-6 inline-block max-w-[160px]">
                  <img
                    src="./media/navlogo3.png"
                    alt="logo"
                    className="max-w-full"
                  />
                </a>
                <p className="text-body-color mb-7 text-base">
                  Safety for one, Safety for all
                </p>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 lg:w-2/12 md:w-1/3">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold">
                  Support
                </h4>
                <ul className="text-gray-300 text-xs font-normal">
                  <li>
                    <a
                      href="Footer"
                      className=" hover:text-success mb-2 inline-block leading-loose"
                    >
                      Customer Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="Footer"
                      className="text-body-color hover:text-success mb-2 inline-block leading-loose"
                    >
                      Become a partner
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 lg:w-2/12 md:w-1/3">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold">
                  Explore
                </h4>
                <ul className="text-gray-300 text-xs font-normal">
                  <li>
                    <a
                      href="Footer"
                      className="text-body-color hover:text-success mb-2 inline-block  leading-loose"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="Footer"
                      className="text-body-color hover:text-success mb-2 inline-block  leading-loose"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="Footer"
                      className="text-body-color hover:text-success mb-2 inline-block  leading-loose"
                    >
                      User Agreement
                    </a>
                  </li>
                  <li>
                    <a
                      href="Footer"
                      className="text-body-color hover:text-success mb-2 inline-block leading-loose"
                    >
                      Join our team
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12 md:w-1/3">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold">
                  Connect
                </h4>
                <ul className=" text-gray-300 text-xs font-normal">
                  <li>
                    <p className="text-body-color hover:text-success mb-2 inline-block  leading-loose">
                      Email: support@moohub.tech
                    </p>
                  </li>
                  <li>
                    <p className="text-body-color hover:text-success mb-2 inline-block leading-loose">
                      Phone: +234 808 365 4398, +234 803 875 2985
                    </p>
                  </li>
                  <li>
                    <div className="mb-6 mt-2 flex items-center">
                      <a
                        href="Footer"
                        className="text-black bg-white hover:bg-success hover:border-success 
               mr-3 flex h-8 w-8 items-center justify-center
               rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,
                2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"
                          ></path>
                        </svg>
                      </a>

                      <a
                        href="Footer"
                        className="text-dark bg-white hover:bg-success hover:border-success mr-3 flex h-8 w-8
               items-center justify-center rounded-full  hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24px"
                          height="24px"
                        >
                          <path
                            d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21
                   21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19
                   6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239
                    17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 
                    0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
                          />
                        </svg>
                      </a>
                      <a
                        href="Footer"
                        className="text-dark bg-white hover:bg-success hover:border-success mr-3 flex h-8 w-8 items-center 
              justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 13 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.915 3.9501C1.43501 2.91462 2.23273 2.04417 3.21902 1.43602C4.20531 0.827864 5.34129 0.505983 6.5 
                0.506348C8.18438 0.506348 9.59938 1.1251 10.6813 2.13447L8.88938 3.92697C8.24125 3.3076 7.4175 2.99197 6.5 2.99197C4.87188 
                2.99197 3.49375 4.09197 3.00313 5.56885C2.87813 5.94385 2.80688 6.34385 2.80688 6.75635C2.80688 7.16885 2.87813 7.56885 3.00313 
                7.94385C3.49438 9.42135 4.87188 10.5207 6.5 10.5207C7.34063 10.5207 8.05625 10.2988 8.61625 9.92385C8.9409 9.7101 9.21883 9.43274 
                9.43325 9.10853C9.64767 8.78433 9.79412 8.42001 9.86375 8.0376H6.5V5.6201H12.3862C12.46 6.02885 12.5 6.4551 12.5 6.89822C12.5 8.80197 
                11.8188 10.4045 10.6362 11.492C9.6025 12.447 8.1875 13.0063 6.5 13.0063C5.67915 13.0067 4.86627 12.8452 4.10784 12.5313C3.34941 12.2173 2.66028 
                11.7569 2.07985 11.1765C1.49942 10.5961 1.03906 9.90694 0.725084 9.14851C0.411109 8.39008 0.249672 7.5772 0.250001 6.75635C0.250001 5.7476 0.49125 
                4.79385 0.915 3.9501Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                      <a
                        href="Footer"
                        className="text-dark bg-white hover:bg-success hover:border-success mr-3 flex h-8 w-8 items-center 
              justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 13 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.75 1.88123C12.2802 2.08504 11.7834 2.21977 11.275 2.28123C11.8114 1.96081 12.2133 1.45672 
                12.4062 0.862485C11.9022 1.16252 11.3505 1.37392 10.775 1.48748C10.3903 1.07034 9.87811 0.79267 9.31863 
                0.698017C8.75916 0.603364 8.18409 0.697084 7.68362 0.964478C7.18315 1.23187 6.78558 1.65782 6.55328 2.17551C6.32097 
                2.6932 6.26706 3.27335 6.4 3.82498C5.38089 3.77344 4.38403 3.50808 3.47416 3.04615C2.56429 2.58422 1.76178 1.93604 1.11875 
                1.14373C0.893211 1.53759 0.7747 1.98362 0.775 2.43748C0.7742 2.85897 0.877636 3.27412 1.0761 3.64596C1.27456 4.0178 1.56189 4.3348
                 1.9125 4.56873C1.50499 4.55765 1.10618 4.4483 0.75 4.24998V4.28123C0.753054 4.87179 0.959996 5.44317 1.33582 5.89871C1.71165 6.35426 
                 2.23328 6.66601 2.8125 6.78123C2.58953 6.84909 2.35805 6.88486 2.125 6.88749C1.96368 6.8856 1.80276 6.87097 1.64375 6.84373C1.80869 7.35174 2.12789 
                 7.7957 2.55692 8.11383C2.98595 8.43197 3.50348 8.60845 4.0375 8.61873C3.13575 9.32828 2.02243 9.71552 0.875 9.71873C0.666085 9.71942 0.457335 9.70689 
                 0.25 9.68124C1.42152 10.4376 2.78676 10.8392 4.18125 10.8375C5.14356 10.8475 6.09821 10.6656 6.98945 10.3025C7.88068 9.93945 8.69064 9.40241 9.372 8.72279C10.0534
                  8.04318 10.5925 7.2346 10.9578 6.3443C11.3232 5.454 11.5075 4.49981 11.5 3.53748V3.20623C11.9904 2.84049 12.4134 2.39213 12.75 1.88123Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-6" />
        <div className=" w-full ">
          <p className="text-gray-400 text-center text-sm">
            &copy; 2023 Moohub technologies. All Rights Reserved
          </p>
        </div>
        {/*<div>
    <span className="absolute left-0 bottom-0 z-[-1]">
      <svg
        width="217"
        height="229"
        viewBox="0 0 217 229"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
          fill="url(#paint0_linear_1179_5)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1179_5"
            x1="76.5"
            y1="281"
            x2="76.5"
            y2="1.22829e-05"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3056D3" stopOpacity="0.08" />
            <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span className="absolute top-10 right-10 z-[-1]">
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
          fill="url(#paint0_linear_1179_4)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1179_4"
            x1="-1.63917e-06"
            y1="37.5"
            x2="75"
            y2="37.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#13C296" stopOpacity="0.31" />
            <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    </div>*/}
      </footer>
    </>
  );
}

export default Footer;
