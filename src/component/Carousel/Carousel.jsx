import React from 'react';
import "./carousel.css";


function Carousel() {

    return (
       
       <>
       
          {/* Carousel section */}
          <section className="carousel" aria-label="Gallery">
  <ol className="carousel__viewport">
    <li id="carousel__slide1"
        tabIndex="0"
        className="carousel__slide">
      <div className="carousel__snapper">
        <a href="#carousel__slide2"
           className="carousel__prev">Go to last slide</a>
           
        <a href="#carousel__slide2"
           className="carousel__next">Go to next slide</a>
      </div>
      <div className="flex justify-center items-center h-full sn-herotxt top-0 mx-auto ">
                        <div className="text-center text-white px-6 md:px-12">
                            <h1 className="text-4xl sm:text-3xl md:text-5xl xl:text-7xl font-bold tracking-tight mb-12">Safety for <span className='text-blue-900'>One</span>, Security for <span className='text-green-600'>All</span>.</h1>
                            <p className=''>
                            Achieving a safer and more secure Nigeria for all through collective efforts of individuals within <br/>their respective surroundings.
                            </p>
                        </div>
                </div>
    </li>
    <li id="carousel__slide2"
        tabIndex="0"
        className="carousel__slide">
      <div className="carousel__snapper">
        
      </div>
      <a href="#carousel__slide1"
         className="carousel__prev">Go to previous slide</a>
          <div className="flex justify-center items-center h-full sn-herotxt top-0 mx-auto ">
                        <div className="text-center text-white px-6 md:px-12">
                            <h1 className="text-4xl sm:text-3xl md:text-5xl xl:text-7xl font-bold tracking-tight mb-12">Safety for <span className='text-blue-900'>One</span>, Security for <span className='text-green-600'>All</span>.</h1>
                            <p className=''>
                            Achieving a safer and more secure Nigeria for all through collective efforts of individuals within <br/>their respective surroundings.
                            </p>
                        </div>
                </div>
    </li>
   
  </ol>

 
                

 {/* <aside className="carousel__navigation">
    <ol className="carousel__navigation-list">
      <li className="carousel__navigation-item">
        <a href="#carousel__slide1"
           className="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li className="carousel__navigation-item">
        <a href="#carousel__slide2"
           className="carousel__navigation-button">Go to slide 2</a>
      </li>
    </ol>
    </aside>*/}
</section>
          


       </>
    );
}

export default Carousel;