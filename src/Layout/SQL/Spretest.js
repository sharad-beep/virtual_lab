import React, { useState } from "react";
import Layout from '../Layout'
import SqlMenu from './SqlMenu'




const Spretest = () => {
	const [questions, setQuestions] = useState([
		{
		  question: "1. What does SQL stand for?",
		  options: [
			"Structured Test Language",
			"Sequential Transfer Language",
			"Structured Query Language",
			"Systematic Query Language",
		  ],
		  correctAnswer: "Structured Query Language",
		  selectedOption: null,
		},
		{
		  question: "2.What type of SQL command is used to define the structure of a database table?",
		  options: ["DML (Data Manipulation Language)", "DDL (Data Definition Language)", "DCL (Data Control Language)", "TCL (Transaction Control Language)"],
		  correctAnswer: "DDL (Data Definition Language)",
		  selectedOption: null,
		},
		{
		  question: "3.Which of the following is not a valid SQL type?",
		  options: ["FLOAT", "NUMERIC", "DECIMAL", "CHARACTER"],
		  correctAnswer: "DECIMAL",
		  selectedOption: null,
		},
		{
		  question: "4. _________commands in SQL allow controlling access to data within database.",
		  options: ["Database", "Data", "Data control", "All of the Mentioned"],
		  correctAnswer: "Data control",
		  selectedOption: null,
		},
		{
		  question: " DCL Provides Commands To Perform Actions Like _____________",
		  options: ["Change The Structure Of Tables", "Insert, Update Or Delete Records And Data Values", "Authorizing Access And Other Control Over Database", "None of the Mentioned"],
		  correctAnswer: "Authorizing Access And Other Control Over Database",
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
          <SqlMenu/>
        </div>
        <div className="col-md-9">
          <h1>Pretest of SQL</h1>
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

export default Spretest
