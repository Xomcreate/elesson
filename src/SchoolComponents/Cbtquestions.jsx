import React, { useState, useEffect } from "react";
import axios from "axios";

const Cbtquestions = () => {
  const [step, setStep] = useState(1);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [duration, setDuration] = useState(5);
  const [timeLeft, setTimeLeft] = useState(0);
  const [questions, setQuestions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [finalScore, setFinalScore] = useState(null);

  const subjects = [
    "Mathematics", "English", "Biology", "Chemistry", "Physics",
    "History", "Geography", "Economics", "Civic",
    "Literature", "Agric", "Computer"
  ];

  const fetchQuestions = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/cbt/getQuestions", {
        subjects: selectedSubjects,
      });
      setQuestions(response.data.questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    if (step === 2 && selectedSubjects.length > 0) {
      setTimeLeft(duration * 60);
      fetchQuestions();
    }
  }, [step, selectedSubjects, duration]);

  useEffect(() => {
    if (timeLeft > 0 && step === 2) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && step === 2) {
      handleSubmit();
    }
  }, [timeLeft, step]);

  const toggleSubjectSelection = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const startTest = () => {
    if (selectedSubjects.length !== 4) {
      alert("Please select exactly 4 subjects.");
      return;
    }
    if (!selectedSubjects.includes("English")) {
      alert("English is compulsory. Please include English in your selection.");
      return;
    }
    setStep(2);
  };

  const handleAnswerChange = (subjectIndex, questionIndex, selectedOption) => {
    const key = `${subjectIndex}-${questionIndex}`;
    setUserAnswers((prev) => ({ ...prev, [key]: selectedOption }));
  };

  const calculateScore = () => {
    let correctCount = 0;

    selectedSubjects.forEach((subject, subjectIndex) => {
      const subjectQuestions = questions[subject] || [];
      subjectQuestions.forEach((question, questionIndex) => {
        const key = `${subjectIndex}-${questionIndex}`;
        const correctAnswer = question.answer || question.correctAnswer;
        if (
          userAnswers.hasOwnProperty(key) &&
          userAnswers[key] === correctAnswer
        ) {
          correctCount++;
        }
      });
    });

    return correctCount;
  };

  const calculatePercentageAndGrade = (score, total) => {
    const percentage = (score / total) * 100;
    let grade;

    if (percentage >= 75) grade = "A";
    else if (percentage >= 65) grade = "B";
    else if (percentage >= 50) grade = "C";
    else if (percentage >= 40) grade = "D";
    else grade = "F";

    return { percentage, grade };
  };

  const handleSubmit = async () => {
    if (Object.keys(userAnswers).length === 0) {
      alert("Please answer at least one question before submitting.");
      return;
    }

    const scoreResult = calculateScore();
    setFinalScore(scoreResult);
    setStep(3);

    const totalQuestions = selectedSubjects.reduce(
      (sum, subject) => sum + (questions[subject]?.length || 0),
      0
    );

    const { percentage, grade } = calculatePercentageAndGrade(scoreResult, totalQuestions);

    const subjectBreakdown = selectedSubjects.map((subject, subjectIndex) => {
      const subjectQuestions = questions[subject] || [];
      let correct = 0;

      subjectQuestions.forEach((q, questionIndex) => {
        const key = `${subjectIndex}-${questionIndex}`;
        if (userAnswers[key] === (q.answer || q.correctAnswer)) {
          correct++;
        }
      });

      return {
        subject,
        total: subjectQuestions.length,
        correct,
      };
    });

    try {
      await axios.post("http://localhost:3000/api/cbt/submitResult", {
        score: scoreResult,
        percentage,
        grade,
        subjectBreakdown,
        date: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error submitting result:", error);
    }
  };

  const handleNextQuestion = () => {
    const currentQuestions = questions[selectedSubjects[currentSubjectIndex]] || [];
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSubjectIndex < selectedSubjects.length - 1) {
      setCurrentSubjectIndex(currentSubjectIndex + 1);
      setCurrentQuestionIndex(0);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSubjectIndex > 0) {
      setCurrentSubjectIndex(currentSubjectIndex - 1);
      setCurrentQuestionIndex(
        (questions[selectedSubjects[currentSubjectIndex - 1]]?.length || 0) - 1
      );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[orangered] text-white py-4 px-6">
          <h1 className="text-2xl font-semibold text-center">
            {step === 1
              ? "Select Subjects and Start Test"
              : step === 2
              ? "CBT Test"
              : "Test Completed"}
          </h1>
        </div>
        <div className="p-6">
          {step === 1 && (
            <>
              <h2 className="text-lg font-semibold mb-4">Choose 4 Subjects to Begin:</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {subjects.map((subject) => (
                  <button
                    key={subject}
                    className={`py-2 px-4 text-center rounded-lg ${
                      selectedSubjects.includes(subject)
                        ? "bg-[orangered] text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => toggleSubjectSelection(subject)}
                  >
                    {subject}
                  </button>
                ))}
              </div>
              <div className="mt-6">
                <label
                  htmlFor="duration"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Test Duration (Minutes):
                </label>
                <select
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm"
                >
                  {[5, 10, 15, 20].map((min) => (
                    <option key={min} value={min}>
                      {min} Minutes
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={startTest}
                className="mt-6 w-full bg-[orangered] text-white py-2 rounded-lg shadow-md"
              >
                Start Test
              </button>
            </>
          )}

          {step === 2 && selectedSubjects.length > 0 && (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">
                  {selectedSubjects[currentSubjectIndex]} - Question {currentQuestionIndex + 1}
                </h2>
                <p>
                  Time Left: {Math.floor(timeLeft / 60)}:
                  {timeLeft % 60 < 10 ? "0" : ""}
                  {timeLeft % 60}
                </p>
              </div>

              <div className="flex justify-around mb-4 flex-wrap gap-2">
                {selectedSubjects.map((subject, index) => (
                  <button
                    key={subject}
                    onClick={() => {
                      setCurrentSubjectIndex(index);
                      setCurrentQuestionIndex(0);
                    }}
                    className={`py-1 px-3 rounded ${
                      currentSubjectIndex === index
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap mb-4">
                {(questions[selectedSubjects[currentSubjectIndex]] || []).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentQuestionIndex(i)}
                    className={`m-1 w-10 h-10 rounded-full flex items-center justify-center ${
                      userAnswers[`${currentSubjectIndex}-${i}`]
                        ? "bg-green-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <p className="mb-4 text-gray-700">
                {questions[selectedSubjects[currentSubjectIndex]]?.[currentQuestionIndex]?.question || "No question available."}
              </p>
              <div className="space-y-2">
                {questions[selectedSubjects[currentSubjectIndex]]?.[currentQuestionIndex]?.options?.map(
                  (option, index) => (
                    <label key={index} className="block">
                      <input
                        type="radio"
                        name={`question-${currentSubjectIndex}-${currentQuestionIndex}`}
                        value={option}
                        checked={
                          userAnswers[`${currentSubjectIndex}-${currentQuestionIndex}`] === option
                        }
                        onChange={() =>
                          handleAnswerChange(currentSubjectIndex, currentQuestionIndex, option)
                        }
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  )
                )}
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePreviousQuestion}
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
                  disabled={currentQuestionIndex === 0 && currentSubjectIndex === 0}
                >
                  Previous
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
                <button
                  onClick={handleNextQuestion}
                  className="bg-[orangered] text-white py-2 px-4 rounded-lg"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 3 && finalScore !== null && (
            <div className="mt-6 text-center">
              <h2 className="text-xl font-semibold mb-4">Test Completed</h2>
              <p className="text-lg font-medium text-gray-800">
                Your Score: {finalScore} / 180
              </p>
              <button
                onClick={() => {
                  setStep(1);
                  setSelectedSubjects([]);
                  setUserAnswers({});
                  setQuestions({});
                  setCurrentSubjectIndex(0);
                  setCurrentQuestionIndex(0);
                  setFinalScore(null);
                }}
                className="mt-6 w-full bg-[orangered] text-white py-2 rounded-lg shadow-md"
              >
                Restart Test
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cbtquestions;
