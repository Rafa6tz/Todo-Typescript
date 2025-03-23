import React, { ChangeEvent, FormEvent, useState } from 'react'

//interface
import { ITask } from '../interfaces/Task'

type Props = {
    btnText: string,
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>,
    taskList: ITask[]
}

const TaskForm = ({btnText, setTaskList, taskList}: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')


    // Atribui o resultado do input ao mudar
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === 'title') {
            setTitle(e.target.value)
        } else {
            setDescription(e.target.value)
        }
    }

    // Adiciona ou Atualiza tarefa
    const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // cria um id aleatório
        const id = Math.floor(Math.random() * 1000)

        const newTask: ITask = {id, title, description}

        setTaskList!([...taskList, newTask])
        setTitle('')
        setDescription('')
    }

  return (
    <div className='w-full flex justify-center items-center h-52 my-4'>
    <form onSubmit={addTaskHandle} className='flex justify-center flex-col items-center w-full'>
        <div className='py-2 flex justify-center flex-col items-center w-full'>
            <label className='font-semibold text-lg' htmlFor='title'>Título da tarefa: </label>
            <input onChange={handleChange} value={title} id='title' name='title' type='text' className='border border-slate-600 rounded-lg w-3/5 p-1.5 md:w-2/5' />
        </div>
        <div className='py-2 flex justify-center flex-col items-center w-full'>
            <label className='font-semibold text-lg' htmlFor='description'>Descrição: </label>
            <input onChange={handleChange} value={description} id='description' name='description' type='text' className='border border-slate-600 rounded-lg w-3/5 p-1.5 md:w-2/5' />
        </div>
        <input type='submit' value={btnText} className='bg-slate-400 border border-slate-700 w-46 rounded-3xl h-10 my-2 text-lg font-bold cursor-pointer hover:text-white'/>
    </form>
    </div>
  )
}

export default TaskForm