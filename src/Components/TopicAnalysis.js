import React from 'react';
import { useSelector } from 'react-redux';

function TopicAnalysis() {
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
          <th style={{ border: '1px solid red' }}>TOPICS</th>
          <th style={{ border: '1px solid red' }}>PROBABILITY</th>
        </tr>
      </thead>
      <tbody>
        {result &&
          result.map((r, index) => {
            return (
              <tr key={index}>
                <td align="center" style={{ border: '1px solid red' }}>
                  {r.term}
                </td>
                <td align="center" style={{ border: '1px solid red' }}>
                  {r.probability}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TopicAnalysis;
