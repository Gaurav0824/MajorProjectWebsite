import React from 'react';
import { useSelector } from 'react-redux';

function SpamAnalysis() {
  const data = useSelector(({ data }) => data?.data);
  const result = useSelector(({ result }) => result?.result);
  return (
    <table
      style={{
        color: 'white',
        border: '1px solid red',
        borderCollapse: 'collapse',
      }}
    >
      <thead>
        <tr>
          <th style={{ border: '1px solid red' }}>COMMENTS</th>
          <th style={{ border: '1px solid red' }}>SPAM ANALYSIS RESULT</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((d, index) => {
            return (
              <tr key={index}>
                <td align="center" style={{ border: '1px solid red' }}>
                  {d.v2}
                </td>
                <td align="center" style={{ border: '1px solid red' }}>
                  {result[index]}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default SpamAnalysis;
