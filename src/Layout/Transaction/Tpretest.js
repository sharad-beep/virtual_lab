import React, { useState } from "react";
import Layout from '../Layout'
import TransMenu from './TransMenu'
import "./Tran.css"

const Tprettest = () => {
	const [questions, setQuestions] = useState([
		{
		  question: "1. Which SQL concept involves grouping one or more SQL statements into a single unit of work?",
		  options: [
			"Transaction",
			"Procedure",
			"Trigger",
			"Cursor",
		  ],
		  correctAnswer: "Transaction",
		  selectedOption: null,
		},
		{
		  question: "What does the A in ACID properties of transactions stand for?",
		  options: ["Atomicity", "Auditing", "Abstraction", "Authorization"],
		  correctAnswer: "Atomicity",
		  selectedOption: null,
		},
		{
		  question: "What is the primary goal of serializability in a database system?",
		  options: ["To ensure that transactions are executed concurrently", "To guarantee that transactions are executed in isolation", "To minimize database storage space", "To prevent data backups"],
		  correctAnswer: "To guarantee that transactions are executed in isolation",
		  selectedOption: null,
		},
		{
		  question: "In the context of concurrency control, what is a deadlock?",
		  options: ["A situation where a transaction fails to commit successfully", "A condition where two or more transactions are waiting for each other to release locks", "A type of trigger in SQL", "A database inconsistency issue"],
		  correctAnswer: "A condition where two or more transactions are waiting for each other to release locks",
		  selectedOption: null,
		},
		{
		  question: "In SQL, what is a cursor used for?",
		  options: ["To manage database transactions", "To store temporary data", "To retrieve and manipulate data from a result set one row at a time", "To define user roles and permissions"],
		  correctAnswer: "To retrieve and manipulate data from a result set one row at a time",
		  selectedOption: null,
		},
	  ]);
	  const [score, setScore] = useState(0);
  
	const handleQuestionChange = (questionIndex, selectedOption) => {
	  const updatedQuestions = [...questions];
	  updatedQuestions[questionIndex].selectedOption = selectedOption;
	  setQuestions(updatedQuestions);
	};
  
	const handleSubmit = () => {
	  let newScore = 0;
	  questions.forEach((question) => {
		if (question.selectedOption === question.correctAnswer) {
		  newScore++;
		}
	  });
	  setScore(newScore);
	};
  
  return (
	<div>
  <Layout>
    <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <TransMenu/>
        </div>
        <div className="col-md-9">
          <h1>Pretest of Transaction</h1>
          <div className="quiz-container">
            <ul className="question-list">
              {questions.map((question, index) => (
                <li key={index} className="question-box">
                  <h2 className="question-text">{question.question}</h2>
                  <ul className="options-list">
                    {question.options.map((option, optionIndex) => (
                      <li key={optionIndex} className="option">
                        <label>
                          <input
                            type="radio"
                            name={`question-${index}`}
                            value={option}
                            checked={option === question.selectedOption}
                            onChange={() => handleQuestionChange(index, option)}
                          />
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
            <div className="result-box">
              Your score is <span className="score">{score}</span> out of 5
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</div>
  )
}

export default Tprettest
