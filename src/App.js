import React from 'react';
import useStore from './store';
import YNQuestion from './components/YNQuestion';
import LikertQuestion from './components/LikertQuestion';
import OpenQuestion from './components/OpenQuestion';

function App() {
  const { sheets, currentSheet, setCurrentSheet, updateQuestionValue } = useStore();

  const handleSheetChange = (e) => {
    setCurrentSheet(e.target.value);
  };

  const handleInputChange = (questionNo, newValue) => {
    updateQuestionValue(currentSheet, questionNo, newValue);
  };

  const renderQuestionInput = (question) => {
    switch (question.qtype) {
      case 'Y/N':
        return <YNQuestion question={question} onChange={handleInputChange} />;
      case 'likert-5':
        return <LikertQuestion question={question} onChange={handleInputChange} scale={5} />;
      case 'likert-7':
        return <LikertQuestion question={question} onChange={handleInputChange} scale={7} />;
      case 'open':
        return <OpenQuestion question={question} onChange={handleInputChange} />;
      default:
        return null;
    }
  };

  const calculateTotalScore = () => {
    return sheets[currentSheet]
      .filter((question) => question.qtype.startsWith('likert'))
      .reduce((total, question) => total + parseInt(question.value || '0', 10), 0);
  };

  return (
    <div className="w-full min-h-screen flex justify-center px-4 py-8 bg-[#f3f5f8]">
      <div className='w-full md:w-[768px]'>
      <h1 className="text-4xl font-bold mb-4">📄 Check & Share</h1>

      <div className="flex mb-4 items-center gap-4">
        <label htmlFor="sheet-select" className="block text-gray-400 mb-2 ">
          질문지를 선택하세요
        </label>
        <select
          id="sheet-select"
          value={currentSheet}
          onChange={handleSheetChange}
          className="border p-2 px-4 rounded-full"
        >
          {Object.keys(sheets).map((sheetName) => (
            <option key={sheetName} value={sheetName}>
              {sheetName}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {sheets[currentSheet].map((question) => (
          <div key={question.no} className="border p-4 rounded-xl bg-white">
            <p className="mb-2">{question.no}. {question.qtext}</p>
            {renderQuestionInput(question)}
          </div>
        ))}
          <div className="flex justify-center items-center border p-4 text-2xl rounded-xl bg-white">
            총점: {calculateTotalScore()}
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
