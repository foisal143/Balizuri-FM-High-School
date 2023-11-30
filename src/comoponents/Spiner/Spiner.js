import React from 'react';

const Spiner = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] flex justify-center items-center">
      <p className="flex text-4xl  font-semibold justify-center items-center ">
        L
        <div className="w-6 mt-2 h-6 animate-spin rounded-full border-4 border-blue-500 border-dashed"></div>
        ading....
      </p>
    </div>
  );
};

export default Spiner;
