import React, { useState } from "react";
import Layout from '../Layout'
import NormalMenu from './NormalMenu'
import "./Norm.css"
const Posttest = () => {
	const [questions, setQuestions] = useState([
		{
		  question: "1. In the __________ normal form, a composite attribute is converted to individual attributes.",
		  options: [
			"First",
			"Second",
			"Third",
			"Fourth",
		  ],
		  correctAnswer: "First",
		  selectedOption: null,
		},
		{
		  question: "2.Tables in second normal form (2NF):",
		  options: ["Eliminate all hidden dependencies", "Eliminate the possibility of a insertion anomalies", "Have a composite key", "Have all non key fields depend on the whole primary key"],
		  correctAnswer: "Eliminate all hidden dependencies",
		  selectedOption: null,
		},
		{
		  question: "3. A table on the many side of a one to many or many to many relationship must:",
		  options: [" Be in Second Normal Form (2NF)", "Be in Third Normal Form (3NF)", "Have a single attribute key", "Have a composite key"],
		  correctAnswer: "Have a composite key",
		  selectedOption: null,
		},
		{
		  question: "4.Which-one ofthe following statements about normal forms is FALSE?",
		  options: ["BCNF is stricter than 3 NF", " Lossless, dependency -preserving decomposition into 3 NF is always possible", "Loss less, dependency – preserving decomposition into BCNF is always possible", "Any relation with two attributes is BCNF"],
		  correctAnswer: "Loss less, dependency – preserving decomposition into BCNF is always possible",
		  selectedOption: null,
		},
		{
		  question: "5. Functional Dependencies are the types of constraints that are based on______",
		  options: ["Key", "Key revisited", "Superset key", "None of the mentioned"],
		  correctAnswer: "Key",
		  selectedOption: null,
		},
		{
			question: "6. Functional Dependencies are the types of constraints that are based on______",
			options: ["Key", "Key revisited", "Superset key", "None of the mentioned"],
			correctAnswer: "Key",
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
          <h1>Posttest of normalization</h1>
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
              Your score is <span className="score">{score}</span> out of 6
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</div>
  )
}

export default Posttest
