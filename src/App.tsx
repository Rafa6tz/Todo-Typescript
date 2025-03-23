import { useState } from "react"
import TaskForm from "./components/TaskForm"

//interface
import { ITask } from "./interfaces/Task"
import TaskList from "./components/TaskList"

function App() {

  const [ taskList, setTaskList ] = useState<ITask[]>([])

  return (
    <>
      <header className="w-full flex justify-center items-center h-20 bg-slate-400">
        <h2 className="font-bold text-2xl">Todo Typescript</h2>
      </header>
      <TaskForm btnText="Cadastrar tarefa" taskList={taskList} setTaskList={setTaskList}/>
      <div className="w-full flex flex-col justify-center items-center">
      <TaskList taskList={taskList}/>
      </div>
    </>
  )
}

export default App
