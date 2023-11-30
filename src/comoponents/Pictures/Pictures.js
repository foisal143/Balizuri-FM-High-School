import React from 'react';

const Pictures = ({ photo }) => {
  return (
    <div data-aos="fade-up" className="shadow-md p-5 mx-auto rounded-md">
      <img className="w-full h-96" src={photo.picture} alt="" />
    </div>
  );
};

export default Pictures;
