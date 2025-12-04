// Sample questions data for demonstration
// In real use, this would come from a database or API

const sampleQuestions = {
  Chemistry: [
    {
      questionBengali: "কোন গ্রুপের মৌলসমূহকে 'হ্যালোজেন' বলা হয়?",
      questionEnglish: "The elements of which group are called 'Halogens'?",
      options: [
        { bengali: "গ্রুপ-13", english: "Group-13", isAnswer: false },
        { bengali: "গ্রুপ-15", english: "Group-15", isAnswer: false },
        { bengali: "গ্রুপ-17", english: "Group-17", isAnswer: true },
        { bengali: "গ্রুপ-18", english: "Group-18", isAnswer: false }
      ],
      explanationBengali: "গ্রুপ-17 কে হ্যালোজেন বা সামুদ্রিক লবণ উৎপন্নকারী মৌল বলা হয়।",
      explanationEnglish: "Group-17 elements are called halogens or sea salt producers.",
      correctAnswer: "c",
      optionShuffle: "1"
    },
    {
      questionBengali: "নিষ্ক্রিয় গ্যাস কোন গ্রুপে অবস্থিত?",
      questionEnglish: "In which group are the noble gases located?",
      options: [
        { bengali: "গ্রুপ-1", english: "Group-1", isAnswer: false },
        { bengali: "গ্রুপ-17", english: "Group-17", isAnswer: false },
        { bengali: "গ্রুপ-18", english: "Group-18", isAnswer: true },
        { bengali: "গ্রুপ-2", english: "Group-2", isAnswer: false }
      ],
      explanationBengali: "নিষ্ক্রিয় গ্যাস বা Noble gas গ্রুপ-18 তে অবস্থিত।",
      explanationEnglish: "Noble gases are located in Group-18.",
      correctAnswer: "c",
      optionShuffle: "1"
    },
    {
      questionBengali: "পর্যায় সারণিতে সবচেয়ে বেশি তড়িৎ ঋণাত্মক মৌল কোনটি?",
      questionEnglish: "Which element is the most electronegative in the periodic table?",
      options: [
        { bengali: "অক্সিজেন", english: "Oxygen", isAnswer: false },
        { bengali: "ক্লোরিন", english: "Chlorine", isAnswer: false },
        { bengali: "ফ্লোরিন", english: "Fluorine", isAnswer: true },
        { bengali: "নাইট্রোজেন", english: "Nitrogen", isAnswer: false }
      ],
      explanationBengali: "ফ্লোরিন সর্বাধিক তড়িৎ ঋণাত্মক মৌল, এর ইলেক্ট্রোনেগেটিভিটি 4.0",
      explanationEnglish: "Fluorine is the most electronegative element with electronegativity of 4.0",
      correctAnswer: "c",
      optionShuffle: "1"
    }
  ],
  Physics: [
    {
      questionBengali: "নিউটনের গতির প্রথম সূত্র কী বর্ণনা করে?",
      questionEnglish: "What does Newton's first law of motion describe?",
      options: [
        { bengali: "বল ও ত্বরণ", english: "Force and acceleration", isAnswer: false },
        { bengali: "জড়তা", english: "Inertia", isAnswer: true },
        { bengali: "ক্রিয়া-প্রতিক্রিয়া", english: "Action-reaction", isAnswer: false },
        { bengali: "ভরবেগ সংরক্ষণ", english: "Conservation of momentum", isAnswer: false }
      ],
      explanationBengali: "নিউটনের প্রথম সূত্র জড়তার সূত্র হিসেবে পরিচিত।",
      explanationEnglish: "Newton's first law is also known as the law of inertia.",
      correctAnswer: "b",
      optionShuffle: "1"
    },
    {
      questionBengali: "আলোর বেগ কত?",
      questionEnglish: "What is the speed of light?",
      options: [
        { bengali: "3×10⁸ m/s", english: "3×10⁸ m/s", isAnswer: true },
        { bengali: "3×10⁶ m/s", english: "3×10⁶ m/s", isAnswer: false },
        { bengali: "3×10¹⁰ m/s", english: "3×10¹⁰ m/s", isAnswer: false },
        { bengali: "3×10⁴ m/s", english: "3×10⁴ m/s", isAnswer: false }
      ],
      explanationBengali: "শূন্যস্থানে আলোর বেগ প্রায় 3×10⁸ m/s।",
      explanationEnglish: "The speed of light in vacuum is approximately 3×10⁸ m/s.",
      correctAnswer: "a",
      optionShuffle: "1"
    }
  ],
  Biology: [
    {
      questionBengali: "DNA এর পূর্ণরূপ কী?",
      questionEnglish: "What is the full form of DNA?",
      options: [
        { bengali: "ডিঅক্সিরাইবোনিউক্লিক এসিড", english: "Deoxyribonucleic Acid", isAnswer: true },
        { bengali: "ডাইনিউক্লিক এসিড", english: "Dinucleic Acid", isAnswer: false },
        { bengali: "ডাই অক্সি নিউক্লিক এসিড", english: "Di Oxy Nucleic Acid", isAnswer: false },
        { bengali: "ডিউটেরিয়াম নিউক্লিক এসিড", english: "Deuterium Nucleic Acid", isAnswer: false }
      ],
      explanationBengali: "DNA হলো Deoxyribonucleic Acid যা জেনেটিক তথ্য বহন করে।",
      explanationEnglish: "DNA is Deoxyribonucleic Acid which carries genetic information.",
      correctAnswer: "a",
      optionShuffle: "1"
    },
    {
      questionBengali: "সালোকসংশ্লেষণ কোথায় ঘটে?",
      questionEnglish: "Where does photosynthesis occur?",
      options: [
        { bengali: "মাইটোকন্ড্রিয়া", english: "Mitochondria", isAnswer: false },
        { bengali: "ক্লোরোপ্লাস্ট", english: "Chloroplast", isAnswer: true },
        { bengali: "রাইবোজোম", english: "Ribosome", isAnswer: false },
        { bengali: "নিউক্লিয়াস", english: "Nucleus", isAnswer: false }
      ],
      explanationBengali: "সালোকসংশ্লেষণ ক্লোরোপ্লাস্টে ঘটে যেখানে ক্লোরোফিল থাকে।",
      explanationEnglish: "Photosynthesis occurs in chloroplasts which contain chlorophyll.",
      correctAnswer: "b",
      optionShuffle: "1"
    }
  ],
  Math: [
    {
      questionBengali: "পাই (π) এর মান কত?",
      questionEnglish: "What is the value of Pi (π)?",
      options: [
        { bengali: "3.14159...", english: "3.14159...", isAnswer: true },
        { bengali: "2.71828...", english: "2.71828...", isAnswer: false },
        { bengali: "1.41421...", english: "1.41421...", isAnswer: false },
        { bengali: "1.61803...", english: "1.61803...", isAnswer: false }
      ],
      explanationBengali: "π হলো একটি গাণিতিক ধ্রুবক যার মান প্রায় 3.14159",
      explanationEnglish: "π is a mathematical constant approximately equal to 3.14159",
      correctAnswer: "a",
      optionShuffle: "1"
    }
  ]
};

// Function to generate questions based on settings
export function generateQuestions(settings) {
  const { subject, totalQuestions } = settings;
  
  // Get questions for the subject, or use first available subject as fallback
  const subjectKeys = Object.keys(sampleQuestions);
  let availableQuestions = sampleQuestions[subject] || 
    (subjectKeys.length > 0 ? sampleQuestions[subjectKeys[0]] : []);
  
  // Return empty array if no questions available
  if (!availableQuestions || availableQuestions.length === 0) {
    return [];
  }
  
  // Generate questions (repeat if needed)
  const questions = [];
  for (let i = 0; i < totalQuestions; i++) {
    const questionIndex = i % availableQuestions.length;
    questions.push({
      ...availableQuestions[questionIndex],
      // Assign correct answer letter based on position
      correctAnswer: getAnswerLetter(availableQuestions[questionIndex].options)
    });
  }
  
  return questions;
}

function getAnswerLetter(options) {
  // Validate options array
  if (!options || !Array.isArray(options) || options.length === 0) {
    return 'a';
  }
  
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const answerIndex = options.findIndex(opt => opt.isAnswer);
  
  // Return corresponding letter or 'a' as fallback if no answer found
  if (answerIndex >= 0 && answerIndex < letters.length) {
    return letters[answerIndex];
  }
  return 'a';
}

// Export sample data for testing
export { sampleQuestions };
