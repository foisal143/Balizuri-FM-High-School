import React from 'react';

const Teacher = ({ teacher }) => {
  const { catagory, name, picture } = teacher;
  return (
    <div data-aos="fade-down" className="mx-auto">
      <img
        className="w-80 rounded-md h-96"
        src={
          picture
            ? picture
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
        }
        alt=""
      />
      <div className="mt-5">
        <h3>জনাব {name}</h3>
        <p>{catagory}</p>
      </div>
    </div>
  );
};

export default Teacher;
