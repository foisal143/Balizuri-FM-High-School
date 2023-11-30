import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ResultTr from './ResultTr/ResultTr';

const Result = () => {
  const datas = useLoaderData();

  return (
    <div className="overflow-x-auto px-5 md:px-12 my-12">
      <h2 className="text-3xl font-semibold text-center mb-12">
        SSC ALL YEAR RESULT HERE
      </h2>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Board</th>
            <th>Appeared</th>
            <th>Passed</th>
            <th>Failed</th>
            <th>A+ </th>
            <th>Pass Rate</th>
            <th>A+ Rate</th>
            <th>Board Rand</th>
            <th>National Rand</th>
          </tr>
        </thead>
        <tbody>
          {datas.map(data => (
            <ResultTr key={data.year} data={data}></ResultTr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
