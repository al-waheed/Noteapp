import React from 'react';

import TestimonialImage02 from '../images/testimonial-02.jpg';
import TestimonialImage03 from '../images/testimonial-03.jpg';

function Testimonials() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <p className="text-2xl text-black font-semibold mb-4"> Reviewed by People</p>
            <h2 className="h2 mb-4">Client's Testimonials</h2>
            <p className="text-base text-gray-400">Discover the positive impact we've made on the our clients by reading through their testimonials.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-10 lg:grid-cols-2 lg:gap-10 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-white shadow-md" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={TestimonialImage03} width="48" height="48" alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-[#ff4d30]" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-black grow">"I've tried other note-taking apps in the past, but this one stands out for its ease of use and customization options. It's the perfect digital tool for managing my busy schedule and keeping all my notes in one place."</blockquote>
              <div className="text-black font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-black font-bold not-italic">Gregory Spencer</cite> - <a className="text-[#ff4d30] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">USA</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-white shadow-md" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={TestimonialImage02} width="48" height="48" alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-[#ff4d30]" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-black grow"> "Before using a note app, I would often forget important information and lose track of my to-do list. Now, I'm able to stay on top of everything and feel more productive than ever."</blockquote>
              <div className="text-black font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-black font-bold not-italic">Islam Slimani</cite> - <a className="text-[#ff4d30] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Beirut</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;