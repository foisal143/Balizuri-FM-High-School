import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
  const teachers = useLoaderData();
  console.log(teachers);
  return (
    <div className="my-20">
      <h1 className="border-b-2 w-fit mx-auto border-orange-500 font-bold text-3xl mb-12">
        Teacher's Corner
      </h1>
      <div className="grid px-5 md:px-12 grid-cols-1 md:grid-cols-3 gap-10">
        {teachers.map(teacher => (
          <Teacher key={teacher.id} teacher={teacher}></Teacher>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
