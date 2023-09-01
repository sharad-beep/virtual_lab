import React, { useState } from "react";
import Layout from '../Layout'
import TransMenu from './TransMenu'
import "./Tran.css"
const Pposttest = () => {
	const [questions, setQuestions] = useState([
		{
		  question: "1. Which SQL statement is used to explicitly release locks held by the current transaction and end the transaction?",
		  options: [
			"UNLOCK",
			"ROLLBACK",
			"COMMIT",
			"RELEASE",
		  ],
		  correctAnswer: "COMMIT",
		  selectedOption: null,
		},
		{
		  question: "What does the term concurrency control refer to in the context of database transactions?",
		  options: ["The ability to ensure data integrity in a multi-user environment", "The process of optimizing SQL queries", "The management of transaction logs", "The encryption of sensitive data"],
		  correctAnswer: "The ability to ensure data integrity in a multi-user environment",
		  selectedOption: null,
		},
		{
		  question: "In SQL, what is the purpose of a ROLLBACK statement?",
		  options: ["To save the changes made in a transaction", "To explicitly start a transaction", "To release locks held by a transaction", "To undo the changes made in a transaction"],
		  correctAnswer: "To undo the changes made in a transaction",
		  selectedOption: null,
		},
		{
		  question: "Which SQL command is used to explicitly start a transaction in most relational database management systems (RDBMS)?",
		  options: ["BEGIN TRANSACTION", "START TRANSACTION", "INITIATE TRANSACTION", "COMMENCE TRANSACTION"],
		  correctAnswer: "START TRANSACTION",
		  selectedOption: null,
		},
		{
		  question: "In SQL, what is the primary role of a cursor?",
		  options: ["To control access to a database", "To create temporary tables", "To manage transactions", "To retrieve and process query results row by row"],
		  correctAnswer: "To retrieve and process query results row by row",
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
          <h1>Posttest of Transaction</h1>
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

export default Pposttest
