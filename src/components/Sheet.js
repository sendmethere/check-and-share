import React from 'react';
import useStore from '../store';

const Sheet = () => {
  const { sheets, currentSheetIndex, setAnswer, setCurrentSheetIndex } = useStore();
  const currentSheet = sheets[currentSheetIndex];

  const handleAnswerChange = (value) => {
    setAnswer(currentSheetIndex, value);
  };

  const renderOptions = () => {
    switch (currentSheet.qtype) {
      case 'Y/N':
        return (
          <div>
            <button onClick={() => handleAnswerChange('Y')} className="bg-blue-500 text-white px-4 py-2 rounded m-2">Yes</button>
            <button onClick={() => handleAnswerChange('N')} className="bg-red-500 text-white px-4 py-2 rounded m-2">No</button>
          </div>
        );
      case 'likert-5':
        return [1, 2, 3, 4, 5].map(num => (
          <button key={num} onClick={() => handleAnswerChange(num)} className="bg-gray-300 text-black px-4 py-2 rounded m-2">{num}</button>
        ));
      case 'likert-7':
        return [1, 2, 3, 4, 5, 6, 7].map(num => (
          <button key={num} onClick={() => handleAnswerChange(num)} className="bg-gray-300 text-black px-4 py-2 rounded m-2">{num}</button>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">{currentSheet.qtext}</h2>
      <div>{renderOptions()}</div>
      <div className="flex mt-4">
        <button 
          onClick={() => setCurrentSheetIndex(currentSheetIndex > 0 ? currentSheetIndex - 1 : 0)} 
          className="bg-gray-500 text-white px-4 py-2 rounded m-2"
          disabled={currentSheetIndex === 0}
        >
          Previous
        </button>
        <button 
          onClick={() => setCurrentSheetIndex(currentSheetIndex < sheets.length - 1 ? currentSheetIndex + 1 : currentSheetIndex)} 
          className="bg-gray-500 text-white px-4 py-2 rounded m-2"
          disabled={currentSheetIndex === sheets.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Sheet;
