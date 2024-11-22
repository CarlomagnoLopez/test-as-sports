/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function FormCreateTask() {
    return (
        <form>
            <div className=" formcss space-y-12 ">

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-left text-lg/7 font-semibold text-indigo-600">Crear reto</h2>
                    <p className="mt-1 text-base/7 text-gray-600 font-semibold">Crear un reto deportivo para cumplir en 2025</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="task-name" className="block
                            text-gray-500 text-base/7
                            ">
                                Reto
                            </label>
                            <div className="mt-2">
                                <input
                                    id="task-name"
                                    name="task-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="type-task" className="block
                            text-gray-500 text-base/7
                            ">
                                Deporte
                            </label>
                            <div className="mt-2">
                                <select
                                    id="type-task"
                                    name="type-task"
                                    autoComplete="type-task-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                                >
                                    <option value="DEFAULT"></option>
                                    <option>Natacion</option>
                                    <option>Boxeo</option>
                                    <option>Yoga</option>
                                    <option>Atletismo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-2 space-y-2">
                        <fieldset>
                            {/* <legend className="text-sm/6 font-semibold text-gray-900">Protesta</legend> */}
                            <div className="mt-6 space-y-6">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="check-disclaimer"
                                            name="check-disclaimer"
                                            type="checkbox"
                                            className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-sm/6">
                                        <label htmlFor="check-disclaimer" className="text-left text-base/7  text-indigo-600">
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
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Vamos!
                </button>
            </div>
        </form>
    )
}
