import React from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import useTaskStore from "../context/TaskStore";

export default function PopOverDialog() {
    const openDialog = useTaskStore((state) => state.openDialog)
    const changeStatePopOver = useTaskStore((state) => state.changeStatePopOver)
    const currentTask = useTaskStore((state) => state.currentTask)
    const changeStateLoading = useTaskStore((state) => state.changeStateLoading)
    const addTask = useTaskStore((state) => state.addTask)

    const handleCreateTask = () => {
        changeStatePopOver()
        changeStateLoading()
        addTask(currentTask)
    }

    return (
        <>
            <Dialog open={openDialog}
                handler={changeStatePopOver}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
            >
                <DialogHeader
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}>

                    <h2 className="text-left text-lg/7 font-semibold text-indigo-600">Bien hecho</h2>
                </DialogHeader>
                <DialogBody
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}>
                    <p className="mt-1 text-base/7 text-gray-600 font-semibold">
                        Te recomendamos conseguir una GYM Sis, un GYM Bro, a un amigo, hechale porras y motivense juntos :D
                    </p>


                </DialogBody>
                <DialogFooter
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}>
                    <div className="mt-6 flex items-center justify-end gap-x-6 mr-2">
                        <button
                            onClick={changeStatePopOver}
                            className="rounded-md bg-indigo-100 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100"
                        >
                            Lo pensare mejor
                        </button>
                    </div>
                    
                     <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            onClick={handleCreateTask}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            A entrenar!!
                        </button>
                    </div>
                </DialogFooter>
            </Dialog>
        </>
    );
}