import React from 'react';

const OpenQuestion = ({ question, onChange }) => {
  return (
    <input
      type="text"
      value={question.value}
      onChange={(e) => onChange(question.no, e.target.value)}
      className="rounded-full border p-2 w-full"
    />
  );
};

export default OpenQuestion;
