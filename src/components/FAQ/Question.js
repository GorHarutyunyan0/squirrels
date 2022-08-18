const Question = ({ question, isExpanded, answer, idx, handleQuestionOpen }) => (
  <div className={isExpanded ? "question1" : "question"}>
    <div className="quiz">
      <h2>{question}</h2>
      {isExpanded && <p>{answer}</p>}
    </div>
    <img src={`./assets/photo/${isExpanded ? "Vector" : "Vector1"}.svg`} alt="vector" onClick={() => handleQuestionOpen(idx)} />
  </div>
);

export default Question;