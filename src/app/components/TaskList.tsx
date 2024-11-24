
import React from 'react';
import TaskListItem from '../components/TaskListItem'
import useTaskStore from "../context/TaskStore";
import SkeletonProgress from './SkeletonProgress';

export default function TaskList() {
    const taskList = useTaskStore((state) => state.tasks);
    const tasks = useTaskStore((state) => state.tasks)
    const loading = useTaskStore((state) => state.loading)
    const empyTask = tasks.length == 0 ? true : false;

    console.log(empyTask)

    return (
        <div >
            {loading ? <SkeletonProgress></SkeletonProgress> :
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-left text-lg/7 font-semibold text-indigo-600">Lista de retos deportivos</h2>
                        <p className="mt-1 text-base/7 text-gray-600 font-semibold">Aqui se forja el espiritu de los campeones</p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                            {taskList && taskList.map((item: { id: string; taskName: string; typeTask: string; progressTask: string }, index) => (
                                <TaskListItem
                                    key={index}
                                    id={item.id}
                                    taskName={item.taskName}
                                    typeTask={item.typeTask}
                                    progressTask={item.progressTask}
                                ></TaskListItem>

                            ))}
                            {empyTask &&
                                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <p className="font-medium">El 99% es mentalidad, lo demas es fisico!</p>
                                    <p className="font-medium">

                                        LLena el formulario para crear tu priner reto deportivo

                                    </p>

                                </div>
                            }

                        </div>
                    </div>
                </div>
            }

        </div>

    )
}
