import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addHandler(e) {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTasks((t) => [...t, inputValue]);
      setInputValue("");
    }
  }

  function deleteHandler(i) {
    const updatedTasks = tasks.filter((_, index) => i !== index);
    setTasks(updatedTasks);
  }

  function upHandler(i) {
    if (i > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[i], updatedTasks[i - 1]] = [
        updatedTasks[i - 1],
        updatedTasks[i],
      ];
      setTasks(updatedTasks);
    }
  }

  function downHandler(i) {
    if (i < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[i], updatedTasks[i + 1]] = [
        updatedTasks[i + 1],
        updatedTasks[i],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <h1>Todo-list</h1>
      <div className="container">
        <div className="input-container">
          <form className="input-container">
            <input
              type="text"
              placeholder="Add a task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" onClick={addHandler}>
              Add
            </button>
          </form>
        </div>
        <ul className="tasks-container">
          {tasks.map((task, index) => (
            <li key={index} name={index}>
              <p>{task}</p>
              {tasks.length > 0 && (
                <div className="btn-container">
                  <button
                    onClick={() => deleteHandler(index)}
                    className="delete"
                  >
                    Delete
                  </button>
                  <button onClick={() => upHandler(index)} className="up">
                    Up
                  </button>
                  <button onClick={() => downHandler(index)} className="down">
                    Down
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default App;
