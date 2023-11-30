import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pictures from '../Pictures/Pictures';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Gallary = () => {
  const photos = useLoaderData();
  useEffect(() => {
    AOS.init({
      offset: 250,
      duration: 1000,
    });
  }, []);
  return (
    <div className="my-12">
      <h1 className="border-b-2 w-fit mx-auto border-orange-500 font-bold text-3xl mb-12">
        Gallary
      </h1>
      <div className="grid grid-cols-1 p-5 md:px-12 md:grid-cols-3 gap-10">
        {photos.map(photo => (
          <Pictures key={photo.id} photo={photo}></Pictures>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
