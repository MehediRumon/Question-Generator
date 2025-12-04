import { useState } from 'react';
import QuestionForm from './components/QuestionForm';
import QuestionDisplay from './components/QuestionDisplay';
import { generateQuestions } from './utils/questionData';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [settings, setSettings] = useState(null);

  const handleGenerate = (formData) => {
    const generatedQuestions = generateQuestions(formData);
    setQuestions(generatedQuestions);
    setSettings(formData);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Question Generator</h1>
        <p>Generate MCQ questions for exams</p>
      </header>
      
      <main className="app-main">
        <QuestionForm onGenerate={handleGenerate} />
        
        {settings && questions.length > 0 && (
          <QuestionDisplay questions={questions} settings={settings} />
        )}
      </main>
      
      <footer className="app-footer">
        <p>Question Generator App - Built with React</p>
      </footer>
    </div>
  );
}

export default App;
