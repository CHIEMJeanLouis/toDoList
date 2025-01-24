import { useState } from "react";
import "./App.css";

// components

import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("");
  const [search, setSearch] = useState("");

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
    //trier avec sort en fonction si le tache est cochée ou non.
    const sortedTasks = newTab.sort((a, b) => a.status - b.status);
    setTasks(sortedTasks);
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
            <div className="inputSearch">
              <input
                className="input"
                type="text"
                placeholder="Rechercher une tâche..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {tasks
              .filter((task) =>
                task.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((task, index) => {
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
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    )}
                  </div>
                );
              })}
          </div>
          <div className="main">
            <input
              className="input"
              type="text"
              placeholder="Ajoutez une tâche"
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
