import './QuestionDisplay.css';

function QuestionDisplay({ questions, settings }) {
  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <div className="question-display">
      <div className="question-header">
        <h1 className="exam-title">{settings.examTitle}</h1>
        <h2 className="exam-subtitle">
          Daily MCQ Exam {settings.subject}-01 
          {settings.examSubtitle && ` (${settings.examSubtitle})`}
        </h2>
        <div className="set-indicator">Set-{settings.set}</div>
      </div>

      <table className="question-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>{settings.subjectShortName || settings.subject}</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q, index) => (
            <QuestionRow key={index} question={q} number={index + 1} setName={settings.set} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function QuestionRow({ question, number, setName }) {
  return (
    <>
      <tr className="question-row">
        <td className="question-number">{number}</td>
        <td className="question-text">
          <div className="question-bengali">{question.questionBengali}</div>
          <div className="question-english">{question.questionEnglish}</div>
        </td>
      </tr>
      <tr className="set-row">
        <td className="set-cell">(Set {setName})</td>
        <td className="set-cell">(Set {setName})</td>
      </tr>
      {question.options.map((option, idx) => (
        <tr key={idx} className={`option-row ${option.isAnswer ? 'answer-row' : ''}`}>
          <td className="option-bengali">
            {option.bengali}
            {option.isAnswer && <span className="answer-marker">(Answer)</span>}
          </td>
          <td className="option-english">
            {option.english}
            {option.isAnswer && <span className="answer-marker">(Answer)</span>}
          </td>
        </tr>
      ))}
      <tr className="explanation-row">
        <td className="explanation-bengali">{question.explanationBengali}</td>
        <td className="explanation-english">{question.explanationEnglish}</td>
      </tr>
      <tr className="answer-row-final">
        <td className="correct-answer">{question.correctAnswer}</td>
        <td className="option-shuffle">{question.optionShuffle}</td>
      </tr>
    </>
  );
}

export default QuestionDisplay;
