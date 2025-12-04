import { useState } from 'react';
import './QuestionForm.css';

function QuestionForm({ onGenerate }) {
  const [formData, setFormData] = useState({
    subject: '',
    subjectShortName: '',
    totalQuestions: 10,
    set: 'A',
    examTitle: 'Varsity Admission Program-2022',
    examSubtitle: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <h2>Question Generator Settings</h2>
      
      <div className="form-group">
        <label htmlFor="examTitle">Exam Title</label>
        <input
          type="text"
          id="examTitle"
          name="examTitle"
          value={formData.examTitle}
          onChange={handleChange}
          placeholder="e.g., Varsity Admission Program-2022"
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g., Chemistry"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="subjectShortName">Subject Short Name</label>
        <input
          type="text"
          id="subjectShortName"
          name="subjectShortName"
          value={formData.subjectShortName}
          onChange={handleChange}
          placeholder="e.g., Chem"
        />
      </div>

      <div className="form-group">
        <label htmlFor="examSubtitle">Exam Subtitle (Bengali)</label>
        <input
          type="text"
          id="examSubtitle"
          name="examSubtitle"
          value={formData.examSubtitle}
          onChange={handleChange}
          placeholder="e.g., মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="totalQuestions">Total Questions</label>
          <input
            type="number"
            id="totalQuestions"
            name="totalQuestions"
            value={formData.totalQuestions}
            onChange={handleChange}
            min="1"
            max="100"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="set">Set</label>
          <select
            id="set"
            name="set"
            value={formData.set}
            onChange={handleChange}
          >
            <option value="A">Set A</option>
            <option value="B">Set B</option>
            <option value="C">Set C</option>
            <option value="D">Set D</option>
          </select>
        </div>
      </div>

      <button type="submit" className="generate-btn">
        Generate Questions
      </button>
    </form>
  );
}

export default QuestionForm;
