import { useState } from "react"
import TaskForm from "./components/TaskForm"

//interface
import { ITask } from "./interfaces/Task"
import TaskList from "./components/TaskList"

function App() {

  const [ taskList, setTaskList ] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)
  
  //modal
  const [modal, setModal] = useState<boolean>(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => {
      return task.id !== id
    }))
  }

  const editTask = (task: ITask): void => {
    setModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, description: string) => {

    const updatedTask = {id, title, description}

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })
    setTaskList(updatedItems)
    toggleModal()
  }

  return (
    <>
    {modal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen flex justify-center items-center">
          <div className="absolute inset-0 bg-[rgba(49,49,49,0.8)] z-10"></div>
          <div className="relative z-20 bg-slate-200 md:w-2/3 w-5/6 rounded-2xl">
          <button onClick={toggleModal} className="text-2xl font-semibold absolute right-0 py-3 px-4 cursor-pointer">x</button>
            <TaskForm btnText="Salvar edição" taskList={taskList} task={taskToUpdate} handleUpdate={updateTask}/>
          </div>
        </div>
      )}
    
      <header className="w-full flex justify-center items-center h-20 bg-slate-400">
        <h2 className="font-bold text-2xl">Todo Typescript</h2>

        
      </header>
      <TaskForm btnText="Cadastrar tarefa" taskList={taskList} setTaskList={setTaskList}/>
      <div className="w-full flex flex-col justify-center items-center">
      <TaskList taskList={taskList} handleDelete={deleteTask} handleModal={toggleModal} handleEdit={editTask}/>
      </div>
    </>
  )
}

export default App
