import TaskListItem from '../components/TaskListItem'


export default function TaskList() {
    return (

        <div className="space-y-12">

            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-left text-lg/7 font-semibold text-indigo-600">Lista de retos deportivos</h2>
                <p className="mt-1 text-base/7 text-gray-600 font-semibold">Aqui se forja el espiritu de los campeones</p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                    <TaskListItem></TaskListItem>   
                </div>
            </div>
        </div>
    )
}
