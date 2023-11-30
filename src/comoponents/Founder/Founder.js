import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import founder from './founder.jpg';
const Founder = () => {
  useEffect(() => {
    AOS.init({
      offset: 250,
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <h3
        data-aos="fade-down"
        className="text-4xl font-bold border-b-2 w-fit mx-auto border-orange-400 p-1"
      >
        Founder
      </h3>
      <div className=" flex flex-col-reverse md:flex-row overflow-hidden px-5 md:px-12 gap-20 justify-between items-center">
        <div data-aos="fade-up" className="md:w-2/5 p-5">
          <h3 className="text-bold text-2xl">
            নামঃ হাজী ফাজেল মোহাম্মদ তালুকদার
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolores
            eligendi, hic dolorem molestias amet a! Non voluptates iste aliquid
            error ducimus, vitae mollitia et architecto repellat voluptate,
            placeat ad. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Placeat nesciunt architecto quasi illum accusamus tempore
            nihil facere, aut saepe unde impedit adipisci autem earum
            aspernatur, voluptatem culpa voluptate quaerat totam.
          </p>
          <div className="flex pe-5 my-2 justify-between items-center">
            <p>জন্মঃ ১৮৩৫</p>
            <p>মিত্যুঃ ৫ ডিসেম্বর ১৯১৯</p>
          </div>
        </div>
        <div className="md:w-2/5 px-5 btn-animate mt-20">
          <img
            data-aos="fade-left"
            className="w-full h-[500px] rounded-md"
            src={founder}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Founder;
