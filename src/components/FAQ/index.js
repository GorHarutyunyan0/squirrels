import { useState } from 'react';
import { getQuestions } from '../../data';
import Question from './Question';
import "./index.css";

const FAQ = () => {
  const [questions, setQuestions] = useState(getQuestions());

  const handleQuestionOpen = idx => {
    setQuestions(questions.map((question, index) => {
      question.isExpanded = index === idx ? !question.isExpanded : false;

      return question;
    }));
  };

  return (
    <div className="questions" id="faqId">
      <h1>Frenquently ask <span>Questions</span></h1>
      <div className="qu">
        {questions.map((question, idx) => (
          <Question key={idx} idx={idx} {...question} handleQuestionOpen={handleQuestionOpen} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;