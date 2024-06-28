import React from 'react';

const LikertQuestion = ({ question, onChange, scale }) => {
  const options = Array.from({ length: scale }, (_, i) => (i + 1).toString());
  return (
    <div className="flex space-x-2">
      {options.map((option) => (
        <div
          key={option}
          className={`rounded-xl flex justify-center items-center cursor-pointer w-8 h-8 text-center ${
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

export default LikertQuestion;
