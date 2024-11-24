import { FormEvent, useState } from "react";
import useTaskStore from "../context/TaskStore";
import SkeletonProgress from "../components/SkeletonProgress";

export default function FormEditTask() {


    const currentTask = useTaskStore((state) => state.currentTask)
    const editTask = useTaskStore((state) => state.editTask)
    const { taskName, typeTask }: any = currentTask;
    const [valueType, setValueType] = useState(typeTask);
    const [valueName, setValueName] = useState(taskName);
    // const closeDrawing = useTaskStore((state) => state.closeDrawing)


    const handleSubmitButton = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.currentTarget))
        const editedTask = { ...currentTask, ...formData }
        editTask(editedTask);
    }

    return (
        <div >
            <form
                onSubmit={handleSubmitButton}
                noValidate className="group">

                <div className="space-y-6">

                    <div className="border-b border-indigo-600/50 pb-8">
                        <h2 className="text-left text-lg/7 font-semibold text-indigo-600">Editar reto</h2>
                        <p className="mt-1 text-base/7 text-gray-600 font-semibold"> Los retos se cumplen en el entrenamiento</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="taskName" className="
                            block text-left text-base/7 text-indigo-600
                            ">
                                    Reto
                                </label>
                                <div className="mt-2">
                                    <input
                                        // value={"hol"}
                                        value={valueName}
                                        onChange={(e) => {
                                            setValueName(e.target.value);
                                        }}
                                        required
                                        id="taskName"
                                        name="taskName"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="typeTask" className="
                                block text-left text-base/7 text-indigo-600
                            ">
                                    Deporte
                                </label>
                                <div className="mt-2">
                                    <select required
                                        id="typeTask"
                                        name="typeTask"
                                        autoComplete="typeTask"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                                        value={valueType}
                                        onChange={(e) => {
                                            setValueType(e.target.value);
                                        }}

                                    >
                                        <option value=""></option>
                                        <option value="Natacion">Natacion</option>
                                        <option value="Boxeo">Boxeo</option>
                                        <option value="Yoga">Yoga</option>
                                        <option value="Atletismo">Atletismo</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 group-invalid:pointer-events-none group-invalid:opacity-30"
                    >
                        Editar
                    </button>
                </div>
            </form>
        </div>
    )
}
