import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";
function QuestionList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => setData(data));
    //console.log("on mount ");
  }, []);

  function handleDelete(id) {
   // console.log("id");
    const updatedData = data.filter((question) => id !== question.id);
    setData(updatedData);
  }

  function handleUpdate(id, correctIndex) {
    //console.log("id");
    const updatedData = data.map((question) => {
      if (id === question.id) {
        return { ...question, correctIndex };
      }
      return question;
    });
    setData(updatedData);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {data.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
