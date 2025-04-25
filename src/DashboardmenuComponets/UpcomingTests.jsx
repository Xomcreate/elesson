import React, { useEffect, useState } from "react";
import axios from "axios";

const UpcomingTests = () => {
  const [upcomingTests, setUpcomingTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this with your backend base URL if needed
    axios
      .get("http://localhost:3000/api/upcoming-tests")
      .then((res) => {
        setUpcomingTests(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching upcoming tests:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-500">Loading upcoming tests...</p>;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-bold mb-4 text-blue-700">Upcoming Tests</h2>
      {upcomingTests.length === 0 ? (
        <p>No upcoming tests available.</p>
      ) : (
        <ul className="space-y-4">
          {upcomingTests.map((test, index) => (
            <li key={index} className="border p-3 rounded-md hover:bg-gray-50">
              <div className="text-lg font-semibold">{test.subject}</div>
              <div className="text-sm text-gray-600">
                Date: {test.date} | Time: {test.time} | Duration: {test.duration}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingTests;
