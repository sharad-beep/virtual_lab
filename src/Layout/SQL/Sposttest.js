import React, { useState } from "react";
import Layout from '../Layout'
import SqlMenu from './SqlMenu'




const Sposttest = () => {
	const [questions, setQuestions] = useState([
		{
		  question: "1.Which SQL command is used to create a table?",
		  options: [
			"CREATE TABLE",
			"INSERT INTO",
			"UPDATE",
			"DELETE",
		  ],
		  correctAnswer: "CREATE TABLE",
		  selectedOption: null,
		},
		{
		  question: "2.Which SQL command is used to add a new column to an existing table?",
		  options: ["ALTER TABLE", "UPDATE TABLE", "MODIFY COLUMN", "ADD COLUMN"],
		  correctAnswer: "ALTER TABLE",
		  selectedOption: null,
		},
		{
		  question: "3.What is the purpose of the SQL command GRANT?",
		  options: [" To create a new table", "To modify table data", "To provide user access privileges", "To delete a database"],
		  correctAnswer: "To provide user access privileges",
		  selectedOption: null,
		},
		{
		  question: "4.Which SQL command is used to retrieve data from a database table?",
		  options: ["GET", "SELECT", "FETCH", " RETRIEVE"],
		  correctAnswer: "SELECT",
		  selectedOption: null,
		},
		{
		  question: "5.What is the primary purpose of the SQL command DELETE?",
		  options: ["To update records", "To retrieve data", "To remove records from a table", "To join multiple tables"],
		  correctAnswer: "To remove records from a table",
		  selectedOption: null,
		},
		{
			question: "6.What SQL command is used to commit a transaction in a database?",
			options: [" SAVE", "COMMIT", "ROLLBACK", "BEGIN"],
			correctAnswer: "COMMIT",
			selectedOption: null,
		  },
		  {
			question: "7.What type of SQL join returns all rows from both tables, joining records based on a common column?",
			options: [" INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
			correctAnswer: "FULL OUTER JOIN",
			selectedOption: null,
		  },
		  {
			question: "8.In SQL, which command is used to revoke previously granted permissions from a user?",
			options: ["REVOKE", "DENY", "REMOVE", " WITHDRAW"],
			correctAnswer: "REVOKE",
			selectedOption: null,
		  },
		  {
			question: "9.What SQL command is used to change the structure of an existing table?",
			options: ["MODIFY TABLE", "CHANGE TABLE", "ALTER TABLE", "UPDATE TABLE"],
			correctAnswer: "ALTER TABLE",
			selectedOption: null,
		  },
		  {
			question: "10.What is the purpose of the SQL command UNION?",
			options: ["To combine the results of two or more SELECT statements", "To delete records from a table", "To create a new table", "To group rows in a table"],
			correctAnswer: " To combine the results of two or more SELECT statements",
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
          <h1>Posttest of SQL</h1>
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
              Your score is <span className="score">{score}</span> out of 10
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</div>
  )
}

export default Sposttest
