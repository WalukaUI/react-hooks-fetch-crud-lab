

function QuestionList({ populateList, deleteHandle, handlePatch }) {

  const allQuestions = populateList.map((e) => {
    const options = e.answers.map((answer, index) => {
      return <select defaultValue={e.correctIndex} >
                <option key={index} value={index}>
                    {answer}
                </option>
              </select>
    })

    return <li key={e.id}>
      <h4>Question {e.id}</h4>
      <h5>Prompt: {e.prompt}</h5>

      <label>
        Correct Answer:
        
          {options}
        
      </label>

      <button onClick={deleteHandle} style={{ background: "red" }} name={e.id}>Delete Question</button>
      <button onClick={handlePatch} style={{ background: "green" }} name={e.id}>View Question</button>
    </li>
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{allQuestions} </ul>
    </section>
  );
}

export default QuestionList;
