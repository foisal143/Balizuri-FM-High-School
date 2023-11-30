import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Overview = () => {
  useEffect(() => {
    AOS.init({
      offset: 250,
      duration: 1000,
    });
  }, []);
  return (
    <div className="my-28 w-10/12 mx-auto ">
      <h3
        data-aos="fade-down"
        className="text-3xl font-bold w-fit mx-auto border-b-2 p-1 border-orange-500"
      >
        Overview
      </h3>
      <div data-aos="fade-right" className="border rounded-md my-5 p-5">
        <p className="overview">
          <a
            href="https://www.sohopathi.com/balijuri-f-m-high-school/"
            itemprop="url"
          >
            Balijuri F. M. High School
          </a>{' '}
          is an educational establishment that is located at Balijuri Balijuri
          Madarganj{' '}
          <a href="https://www.sohopathi.com/district/jamalpur/" itemprop="url">
            Jamalpur
          </a>
          . Its Educational Institute Identification Number or EIIN, is{' '}
          <a href="https://www.sohopathi.com/eiin/110006/" itemprop="url">
            110006
          </a>
          . On 01 January, 2010, it was first put into operation. The
          alternative name for{' '}
          <a
            href="https://www.sohopathi.com/balijuri-f-m-high-school/"
            itemprop="url"
          >
            Balijuri F. M. High School
          </a>{' '}
          is বালিজুড়ী এফ. এম উচ্চ বিদ্যালয়. It is a Boy's sort of co-educational
          program. The institution provides education in the following fields:{' '}
          <a
            href="https://www.sohopathi.com/discipline/science/"
            itemprop="url"
          >
            Science
          </a>
          ,{' '}
          <a
            href="https://www.sohopathi.com/discipline/humanities/"
            itemprop="url"
          >
            Humanities
          </a>
          ,{' '}
          <a
            href="https://www.sohopathi.com/discipline/business-studies/"
            itemprop="url"
          >
            Business Studies
          </a>
          .
        </p>
        <p className="overview">
          Its MPO number is 3704041302. It operates on Day shift(s). Its
          management is Managing. Its recognition is Recognized by the
          government and the recognition level is Secondary. The school/college
          has MPO level with MPO number 3704041302 and the MPO type is Yes.
          <a
            href="https://www.sohopathi.com/balijuri-f-m-high-school/"
            itemprop="url"
          >
            Balijuri F. M. High School
          </a>{' '}
          is under{' '}
          <a href="https://www.sohopathi.com/board/dhaka-education-board/">
            Dhaka Education Board
          </a>
          .
        </p>
        <p className="overview">
          While many other high schools teach numerous disciplines, you can find
          the major disciplines that they teach in this high school as{' '}
          <a
            href="https://www.sohopathi.com/discipline/science/"
            itemprop="url"
          >
            Science
          </a>
          ,{' '}
          <a
            href="https://www.sohopathi.com/discipline/humanities/"
            itemprop="url"
          >
            Humanities
          </a>
          ,{' '}
          <a
            href="https://www.sohopathi.com/discipline/business-studies/"
            itemprop="url"
          >
            Business Studies
          </a>
          . The management type of this institute is Managing. The region in
          which it is located is Pouro with geographic location as Plain Land.
          The institute is in the constituency no 3. Average age of the teachers
          at{' '}
          <a
            href="https://www.sohopathi.com/balijuri-f-m-high-school/"
            itemprop="url"
          >
            Balijuri F. M. High School
          </a>{' '}
          is 44 years.
        </p>
      </div>
    </div>
  );
};

export default Overview;
