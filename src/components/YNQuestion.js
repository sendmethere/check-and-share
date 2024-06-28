
import React from 'react';

const YNQuestion = ({ question, onChange }) => {
  const options = ['Y', 'N'];
  return (
    <div className="flex space-x-2">
      {options.map((option) => (
        <div
          key={option}
          className={`rounded-xl p-2 cursor-pointer w-10 h-10 text-center ${
            question.value === option ? 'bg-green-100 text-green-600' : 'bg-gray-200'
          }`}
          onClick={() => onChange(question.no, option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default YNQuestion;
