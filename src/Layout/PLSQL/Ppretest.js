import React, { useState } from 'react';
import Layout from '../Layout'
import PlsqlMenu from './PlsqlMenu'


const Ppretest = () => {
	const [questions, setQuestions] = useState([
		{
		  question: "1. What is a stored procedure in SQL?",
		  options: [
			"A temporary table used for storing data",
			"A predefined SQL statement that can be executed",
			"A type of SQL join operation",
			"A table that holds trigger definitions",
		  ],
		  correctAnswer: "A predefined SQL statement that can be executed",
		  selectedOption: null,
		},
		{
		  question: "2.What is a trigger in SQL?",
		  options: ["A database error message", "A type of exception", "A procedure that runs automatically in response to an event", "A cursor used to retrieve data from a database"],
		  correctAnswer: "A procedure that runs automatically in response to an event",
		  selectedOption: null,
		},
		{
		  question: "3.What is the purpose of using cursors in SQL?",
		  options: ["To create temporary tables", "To manage transactions", "To retrieve and manipulate data row by row", "To define user roles and permissions"],
		  correctAnswer: "To retrieve and manipulate data row by row",
		  selectedOption: null,
		},
		{
		  question: "4.In SQL, what is an exception?",
		  options: ["A type of cursor", "A predefined stored procedure", "A condition that disrupts normal program flow", "A type of table"],
		  correctAnswer: "A condition that disrupts normal program flow",
		  selectedOption: null,
		},
		{
		  question: "5.In SQL, what is the main difference between a function and a procedure?",
		  options: ["A function returns a value, while a procedure does not.", "A function cannot have parameters, while a procedure can", " A procedure can be called from a trigger, while a function cannot.", "A function can execute DDL statements, while a procedure cannot."],
		  correctAnswer: "A function returns a value, while a procedure does not.",
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
				<PlsqlMenu />
			  </div>
			  <div className="col-md-9">
				<h1>Pretest of PL/SQL</h1>
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
	  
	);
  };
  
  export default Ppretest;
  
