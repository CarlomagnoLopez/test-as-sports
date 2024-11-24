/* eslint-disable @typescript-eslint/no-explicit-any */
import useTaskStore from "../context/TaskStore";

export default function TaskListItem(item: { id: any; taskName: any; typeTask: any; progressTask: any; }) {
    const deleteTask = useTaskStore((state) => state.deleteTask);
    const editTaskProgress = useTaskStore((state) => state.editTaskProgress)
    const showDrawing = useTaskStore((state) => state.showDrawing)

    const { id, taskName, typeTask, progressTask } = item;

    return (
        <ul role="list" className="
            border-b border-indigo-600/50 divide-y divide-gray-100">
            <li className="flex justify-between gap-x-6 py-2">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                        <p className="text-left text-base/7 text-indigo-600">{typeTask}
                        </p>
                        <div className="shrink-0 sm:flex sm:flex-col sm:items-left">
                            {progressTask === 'Done' ? (
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full bg-green-300/20 p-1">
                                        <div className="size-1.5 rounded-full bg-green-300" />
                                    </div>
                                    <p className="text-sm/5 text-gray-500"> LLegaste a la  meta!</p>
                                </div>
                            ) : (
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full bg-orange-500/20 p-1">
                                        <div className="size-1.5 rounded-full bg-orange-500" />
                                    </div>
                                    <p className="text-sm/5 text-gray-500">Entrenando duro</p>
                                </div>
                            )}
                        </div>
                        <span className="whitespace-wrap text-gray-500 text-base/7">{taskName}</span>

                    </div>
                </div>
                <div className="ml-auto grid place-items-center justify-self-end">
                    <button
                        // onClick={() => deleteTask(id)}
                        // onClick={showDrawing}
                        onClick={() => showDrawing(id)}
                        className="rounded-md border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                        </svg>

                    </button>
                    <button
                        onClick={() => deleteTask(id)}
                        // onClick={showDrawing}
                        className="rounded-md border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                        </svg>

                    </button>
                    <button
                        onClick={() => editTaskProgress(id)}
                        className="rounded-md border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        {progressTask === 'Done' ? (
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeWidth="2" d="M12 4.392v14.832M8.476 9.38l-4.553.36c-.888.07-1.248 1.165-.572 1.737l3.47 2.934a.98.98 0 0 1 .322.98l-1.06 4.388c-.206.855.736 1.531 1.497 1.073l3.898-2.351c.32-.193.723-.193 1.044 0l3.898 2.351c.76.458 1.703-.218 1.497-1.073l-1.06-4.388a.982.982 0 0 1 .322-.98l3.47-2.934c.676-.572.316-1.667-.572-1.737l-4.553-.36a1 1 0 0 1-.845-.606l-1.754-4.165c-.342-.812-1.508-.812-1.85 0L9.321 8.774a1 1 0 0 1-.845.606Z" />
                            </svg>


                        )

                        }


                    </button>
                </div>

            </li>
        </ul>
    )
}
