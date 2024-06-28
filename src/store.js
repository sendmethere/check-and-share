import { create } from 'zustand';

// 샘플 시트 데이터
const sheetsData = {
  SEL : [{
    no : 1,
    qtext: '교과 학습 및 사회정서능력 지원을 위한 자기평가를 실시했는가?',
    qtype: 'likert-5',
    value: '0',
  },{
    no : 2,
    qtext: '개별 학생의 성장을 지원하기 위한 수업 전략을 수립했는가?',
    qtype: 'likert-5',
    value: '0',
  },{
    no : 3,
    qtext: '학생들의 성공경험을 누적시키기 위한 노력을 기울였는가?',
    qtype: 'likert-5',
    value: '0',
  },{
    no : 4,
    qtext: 'AIDT를 활용하여 개별 학생의 특성을 고려한 수업을 설계했는가?',
    qtype: 'likert-5',
    value: '0',
  },{
    no : 5,
    qtext: '학습 데이터를 기반으로 효과적인 수업 전략을 도출했는가?',
    qtype: 'likert-5',
    value: '0',
  },{
    no : 6,
    qtext: '데이터 기반 설계가 학생들의 학습 경험에 긍정적인 영향을 미쳤는가?',
    qtype: 'likert-5',
    value: '0',
  },{
    no : 7,
    qtext: '대시보드의 데이터가 유효하지 않을 경우, 개선을 요구했는가?',
    qtype: 'likert-5',
    value: '0',
  },],
  digital: [
    {
      no: 1,
      qtext: '디지털 기반 수업 설계에 대해 잘 아시나요?',
      qtype: 'Y/N',
      value: 'Y',
    },
    {
      no: 2,
      qtext: '디지털 기반 수업 설계에 대해 자주 하시나요?',
      qtype: 'likert-7',
      value: '0',
    },
    {
      no: 3,
      qtext: '디지털 기반 수업 설계에 대해 어떤 생각을 가지고 계신가요?',
      qtype: 'open',
      value: '',
    },
    {
      no: 4,
      qtext: '디지털 기반 수업 설계에 대해 자주 하시나요?',
      qtype: 'likert-7',
      value: '0',
    },
  ],
  // 다른 시트들 추가
};

const useStore = create(
    (set) => ({
      sheets: sheetsData,
      currentSheet: 'SEL',
      setCurrentSheet: (sheetName) => set({ currentSheet: sheetName }),
      updateQuestionValue: (sheetName, questionNo, newValue) =>
        set((state) => {
          const updatedSheet = state.sheets[sheetName].map((q) =>
            q.no === questionNo ? { ...q, value: newValue } : q
          );
          return { sheets: { ...state.sheets, [sheetName]: updatedSheet } };
        }),
    }),
    {
      name: 'survey-storage', // LocalStorage에 저장될 키 이름
    }
);

export default useStore;
