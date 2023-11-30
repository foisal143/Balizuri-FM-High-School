import React from 'react';
import './Home.css';
import Founder from '../Founder/Founder';
import Overview from '../Overview/Overview';

const Home = () => {
  return (
    <div>
      <div
        className={`flex  justify-center items-center h-[calc(90vh-80px)] bg-image`}
      >
        <section>
          <div className="text-center">
            <h1 className="md:text-5xl my-5 text-animate font-bold text-xl">
              বালীজুড়ী ফাজেল মোহাম্মদ উচ্চ বিদ্যালয়
            </h1>
            <p className="md:text-2xl text-animate">স্থাপীতঃ ১৯১০</p>
            <button className=" px-8 py-2 btn-animate my-5 rounded-md duration-200 bg-blue-400 hover:bg-blue-600">
              About
            </button>
          </div>
        </section>
      </div>
      <section className="my-28">
        <Founder></Founder>
      </section>
      <section>
        <Overview />
      </section>
    </div>
  );
};

export default Home;
