import React from 'react';

const Result = ({ userChoice, computerChoice, result }) => {
  return (
    <div className="result">
      <p>Your Choice: {userChoice ? userChoice : '-'}</p>
      <p>Computer's Choice: {computerChoice ? computerChoice : '-'}</p>
      <p>{result}</p>
    </div>
  );
};

export default Result;
