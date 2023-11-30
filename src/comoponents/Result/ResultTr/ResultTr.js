import React from 'react';

const ResultTr = ({ data }) => {
  const {
    plus,
    nationalrank,
    boardrank,
    appeared,
    plusrate,
    passrate,
    failed,
    passed,
    year,
    board,
  } = data;
  return (
    <tr>
      <td>{board}</td>
      <td>{year}</td>
      <td>{appeared}</td>
      <td>{passed}</td>
      <td>{failed}</td>
      <td>{plus}</td>
      <td>{passrate}</td>
      <td>{plusrate}</td>
      <td>{boardrank}</td>
      <td>{nationalrank}</td>
    </tr>
  );
};

export default ResultTr;
