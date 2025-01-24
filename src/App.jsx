import { useState } from "react";
import "./App.css";

// components

import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("");

  const handleSubmit = () => {
    const newTab = [...tasks];
    if (input !== "") {
      newTab.push({ title: input, status: false });
      setTasks(newTab);
      setInput("");
    }
  };

  const handleStatus = (index) => {
    const newTab = [...tasks];
    newTab[index].status = !newTab[index].status;
    setTasks(newTab);
  };

  const handleDelete = (index) => {
    const newTab = [...tasks];
    newTab.splice(index, 1);
    setTasks(newTab);
  };

  return (
    <div className={mode && "darkBody"}>
      <div>
        <Header mode={mode} setMode={setMode} />
      </div>
      <div className="container">
        <div className={mode ? "dark" : null}>
          <div>
            {tasks.map((task, index) => {
              return (
                <div key={index} className="task">
                  <input
                    checked={task.status ? true : false}
                    type="checkbox"
                    onChange={() => {
                      handleStatus(index);
                    }}
                  />
                  <span className={task.status && "line"}>{task.title}</span>
                  {task.status && (
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  )}
                </div>
              );
            })}
          </div>
          <div className="main">
            <input
              className="input"
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button type="submit" onClick={handleSubmit} className="addButton">
              +
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
