import React, { useEffect, useState } from 'react';
import { TbCalendarTime } from "react-icons/tb";

const blogs = [
  {
    question: "What is useState and how does it work in React?",
    answer: "UseState is a Hook that allows you to have state variables in functional components...",
    time: "2025-04-27"
  },
  {
    question: "What is the purpose of useEffect in React?",
    answer: "UseEffect is used to perform side effects like data fetching, subscriptions, etc...",
    time: "2025-05-21"
  },
  {
    question: "What is a custom hook in React and when should you use one?",
    answer: "Custom hooks are JavaScript functions that start with 'use' and can call other hooks...",
    time: "2025-07-20"
  },
  {
    question: "Difference between controlled and uncontrolled components. Which one is better?",
    answer: "Controlled components are managed by React state, while uncontrolled rely on DOM...",
    time: "2025-04-24"
  },
  {
    question: "Tell us something about useFormStatus() in React.",
    answer: "UseFormStatus is a hook from React that helps track the status of a form submission...",
    time: "2025-03-23"
  }
];

const Blogs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl text-primary"></span>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 w-full mx-auto space-y-6 max-w-4xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">React Blogs</h2>

      {blogs.map((blog, idx) => (
        <div key={idx} className="bg-base-200 p-4 sm:p-5 rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.01]">
          <h3 className="text-lg sm:text-xl font-semibold p-2">{blog.question}</h3>
          <hr className="border-dashed border-1 border-gray-300" />

          <span className="text-xl text-blue-600 p-2 font-medium">Answer:</span>
          <p className="mt-2 text-sm sm:text-base text-gray-700">{blog.answer}</p>

          <hr className="border-dashed border-1 border-gray-300" />

          <div className="flex items-center p-2 gap-2 text-sm sm:text-base text-gray-600">
            <span className="text-lg">
              <TbCalendarTime />
            </span>
            <span>Added at</span>
            <span>{blog.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
