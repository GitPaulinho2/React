import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
function App() {
  const [tasks, setTasks] = useState(() => {
  const storedTasks = localStorage.getItem("tasks");
  if (!storedTasks) return [];
  try {
    return JSON.parse(storedTasks);
  } catch (error) {
    console.error("Erro ao carregar tarefas do localStorage:", error);
    return [];
  }
});

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // preciso atualizar essa tarefa,
      // então vou retornar uma nova tarefa com o isCompleted invertido
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      // não preciso atualizar essa tarefa, então apenas retorno ela
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>

        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

// [{
//     id: 1,
//     title: 'Estudar React',
//     description: 'Estudar React para o trabalho',
//     isCompleted: false
//   }, {
//     id: 2,
//     title: 'Estudar React Native',
//     description: 'Estudar React Native para o trabalho',
//     isCompleted: false
//   },{
//     id: 3,
//     title: 'Estudar Node.js',
//     description: 'Estudar Node.js para o trabalho',
//     isCompleted: false
//   }]
