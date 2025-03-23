import {FaPen, FaTrash} from 'react-icons/fa'

//interface
import { ITask } from '../interfaces/Task'

type Props = {
    taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {
  return (
    <>
    {taskList.length > 0 ? (
        taskList.map((task) => (
            <div key={task.id} className='bg-slate-200 m-2 rounded-2xl w-4/5 flex flex-col items-center h-50 md:h-42 md:w-2/4 p-2'>
                <p className='font-bold text-2xl mt-1'>{task.title}</p>
                <p className='text-sm font-semibold pt-1'>Descrição:</p>
                <p className='overflow-hidden text-center text-sm px-2 h-3/4'>{task.description}</p>
                <div className='flex justify-around w-full items-end h-2/3 md:items-center'>
                    <button className='bg-amber-400 w-12 h-12 rounded-2xl flex justify-center items-center cursor-pointer hover:scale-115'><FaPen/></button>
                    <button className='bg-red-600 w-12 h-12 rounded-2xl flex justify-center items-center cursor-pointer hover:scale-115'><FaTrash/></button>
                </div>
            </div>
        ))
    ) : (
        <p className='text-2xl p-6'>Não há tarefas cadastradas</p>
    )}
    </>
  )
}

export default TaskList