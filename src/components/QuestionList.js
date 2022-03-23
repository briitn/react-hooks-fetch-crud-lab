import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";
function QuestionList() {

  const [questions, setQuestions]=useState([])

useEffect(() => {
  fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((items) => setQuestions(items));
}, []
);

const mapQs=questions.map(item=>{return ( 
  <ul key={item.id}>{item.prompt}</ul>
  )
}
)

function handleUpdateItem(updatedItem) {
    console.log(updatedItem)
  const updatedItems = questions.map((item) => {
  if (item.id === updatedItem.id) {
      return updatedItem;
    } else {
      return item;
    }
  });
  setQuestions(updatedItems);  
}
function handleDeleteItem(deletedItem) {
  const updatedItems = questions.filter((item) => item.id !== deletedItem.id);
  setQuestions(updatedItems);
}

const mapAgain=questions.map(item=>{return (<QuestionItem 
  key={item.id} 
  question={item}
  onDelete={handleDeleteItem}
  onUpdate={handleUpdateItem}/>)})

  return (
    <div>
    <section>
      <h1>Quiz Questions</h1>
      <p>lorem testum 2/g</p>
      <p>lorem testum 1/g</p>
      <ul>{mapQs}</ul>

    </section>
 {mapAgain}
    </div>

  );
}

export default QuestionList;
