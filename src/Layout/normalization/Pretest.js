import React, { useState } from "react";
import Layout from '../Layout'
import NormalMenu from './NormalMenu'

const Prettest = () => {
	const [questions, setQuestions] = useState([
		{
		  question: "1. What is the primary goal of normalization in database design?",
		  options: [
			"a) Enhancing data redundancy",
			"b) Organizing data for ease of storage",
			"c) Minimizing data redundancy and ensuring data integrity",
			"d) Increasing data duplication",
		  ],
		  correctAnswer: "c) Minimizing data redundancy and ensuring data integrity",
		  selectedOption: null,
		},
		{
		  question: "What is the name of the current US president?",
		  options: ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"],
		  correctAnswer: "Joe Biden",
		  selectedOption: null,
		},
		{
		  question: "What is the chemical formula for water?",
		  options: ["H2O", "H2S", "H2CO3", "H2O2"],
		  correctAnswer: "H2O",
		  selectedOption: null,
		},
		{
		  question: "What is the square root of 16?",
		  options: ["4", "8", "12", "16"],
		  correctAnswer: "4",
		  selectedOption: null,
		},
		{
		  question: "What is the sum of 1 + 1?",
		  options: ["2", "3", "4", "5"],
		  correctAnswer: "2",
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
          <NormalMenu/>
        </div>
        <div className="col-md-9">
          <h1>Pretest of normalization</h1>
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

export default Prettest
