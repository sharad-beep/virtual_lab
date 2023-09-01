import React, { useState } from 'react';
import Layout from '../Layout'
import PlsqlMenu from './PlsqlMenu'

const Pposttest = () => {
	const [questions, setQuestions] = useState([
		{
		  question: "1.Which SQL command is used to create a new procedure?",
		  options: [
			"CREATE FUNCTION",
			"CREATE TRIGGER",
			"CREATE PROCEDURE",
			"CREATE TABLE",
		  ],
		  correctAnswer: "CREATE PROCEDURE",
		  selectedOption: null,
		},
		{
		  question: "2.Which keyword is used in SQL to handle exceptions in a procedure or trigger?",
		  options: ["CATCH", "RAISE", "EXCEPTION", "TRY"],
		  correctAnswer: "RAISE",
		  selectedOption: null,
		},
		{
		  question: "3.What SQL statement is used to remove a trigger from a table?",
		  options: ["DROP", "DELETE", "REMOVE", "UNTRIGGER"],
		  correctAnswer: "DROP",
		  selectedOption: null,
		},
		{
		  question: "4.What type of trigger in SQL is fired automatically before an INSERT operation?",
		  options: ["BEFORE INSERT trigger", "AFTER INSERT trigger", "INSTEAD OF INSERT trigger", "PRE-INSERT trigger"],
		  correctAnswer: "BEFORE INSERT trigger",
		  selectedOption: null,
		},
		{
		  question: "5.What is the primary purpose of an AFTER UPDATE trigger in SQL?",
		  options: ["To prevent updates from occurring", "To perform actions after a row has been updated", "To rollback updates automatically", "To create a new table"],
		  correctAnswer: "To perform actions after a row has been updated",
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
          <h1>Posttest of PL/SQL</h1>
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
