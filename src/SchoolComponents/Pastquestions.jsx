import React, { useState, useEffect } from "react";

function Pastquestions() {
  const [subjects, setSubjects] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSubjects([
      "Mathematics", "English", "Physics", "Chemistry", "Biology",
      "Economics", "Government", "History", "Geography", "Commerce",
      "Agriculture", "Literature",
    ]);

    const yearList = [];
    for (let y = 2024; y >= 2000; y--) {
      yearList.push(y.toString());
    }
    setYears(yearList);
  }, []);

  const fetchQuestions = async () => {
    if (!selectedSubject || !selectedYear) {
      alert("Please select both a subject and a year.");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:3000/api/past-questions?subject=${selectedSubject}&year=${selectedYear}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Fetched questions:", data);
        setQuestions(data || []);
      } else {
        setQuestions([]);
        alert(data.message || "Error fetching questions");
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      setQuestions([]);
      alert("Error fetching questions, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Past Questions</h1>

      {/* Subject Selector */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Select a Subject:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`p-4 border rounded-md shadow-sm ${
                selectedSubject === subject
                  ? "bg-[orangered] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>

      {/* Year Selector */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Select a Year:</h2>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded-md shadow-sm bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Fetch Button */}
      <div className="mb-8 text-center">
        <button
          onClick={fetchQuestions}
          className="bg-[orangered] text-white px-6 py-2 rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Questions"}
        </button>
      </div>

      {/* Questions Output */}
      <div>
        {loading ? (
          <p className="text-center text-blue-500">Fetching questions...</p>
        ) : questions.length > 0 ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">Questions:</h2>
            <ul className="space-y-6">
              {questions.map((q, index) => (
                <li
                  key={index}
                  className="p-4 border rounded-md shadow-md bg-gray-50"
                >
                  <p className="font-semibold mb-2">
                    {index + 1}. {q.question}
                  </p>
                  {/* Display options as A, B, C, D, E */}
                  <ul className="mb-2">
                    {q.options.map((option, i) => (
                      <li key={i} className="flex items-center">
                        <span className="font-semibold">
                          {String.fromCharCode(65 + i)}.{" "}
                        </span>
                        {option}
                      </li>
                    ))}
                  </ul>
                  <p className="text-green-600 font-medium">
                    Answer: {q.answer}
                  </p>
                  {/* Solution Part */}
                  <p className="text-blue-500 mt-2">
                    Solution: {q.solution}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No questions available. Please select a subject and year.
          </p>
        )}
      </div>
    </div>
  );
}

export default Pastquestions;
