import { FormEvent } from "react";
import useTaskStore from "../context/TaskStore";
import SkeletonProgress from "../components/SkeletonProgress";

export default function FormCreateTask() {
    const changeStateLoading = useTaskStore((state) => state.changeStateLoading)
    const addTask = useTaskStore((state) => state.addTask)
    const loading = useTaskStore((state) => state.loading)
    const handleSubmitButton = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        changeStateLoading()
        const formData = Object.fromEntries(new FormData(event.currentTarget))
        addTask(formData)
    }
    return (
        <div >
            {loading ? <SkeletonProgress></SkeletonProgress> :
                <form
                    onSubmit={handleSubmitButton}
                    noValidate className="group">

                    <div className="space-y-6">

                        <div className="border-b border-gray-900/10 pb-8">
                            <h2 className="text-left text-lg/7 font-semibold text-indigo-600">Crear reto</h2>
                            <p className="mt-1 text-base/7 text-gray-600 font-semibold">Crear un reto deportivo para cumplir en 2025</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="taskName" className="
                            block text-left text-base/7 text-indigo-600
                            ">
                                        Reto
                                    </label>
                                    <div className="mt-2">
                                        <input
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

                        <div className="border-b border-gray-900/10 pb-8">
                            <div className="mt-2 space-y-2">
                                <fieldset>
                                    <div className="mt-6 space-y-6">
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    required
                                                    id="progressTask"
                                                    name="progressTask"
                                                    type="checkbox"
                                                    className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="text-sm/6">
                                                <label htmlFor="progressTask" className="text-left text-base/7 text-indigo-600">
                                                    Protesta
                                                </label>
                                                <p className="text-gray-500 text-base/7">Prometo cumplir este reto deportivo bajo mi palabra.</p>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 group-invalid:pointer-events-none group-invalid:opacity-30"
                        >
                            Vamos!
                        </button>
                    </div>
                </form>
            }
        </div>


    )
}
