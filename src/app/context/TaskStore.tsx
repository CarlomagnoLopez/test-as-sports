/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { create } from "zustand";

const TaskStore = (set: any, get: any) => ({
    tasks: [
        // {
        //     id: Date.now(),
        //     taskName: 'Sample Task Name.',
        //     typeTask: 'Natacion',
        //     progressTask: 'on',
        // },
    ],
    alertSuccess: false,
    alertNotSuccess: false,
    currentTask: {},
    loading: false,
    openDialog: false,
    openDrawer: false,
    showDrawing: (id: string) => {
        const openDrawer = !get().openDrawer;
        set((state: { tasks: any; }) => ({
            openDrawer: openDrawer,
            currentTask: state.tasks.filter((task: { id: string; }) => task.id === id)[0]

        }));
    },
    closeDrawing: () => {
        const openDrawer = !get().openDrawer;
        set(() => ({
            openDrawer: openDrawer
        }));
    },
    changeAlertSuccess: () => {
        const alertSuccess = !get().alertSuccess;
        set({
            alertSuccess: alertSuccess
        });
        setTimeout(() => {
            set(() => ({
                alertSuccess: false,
            }));
        }, 2000);
    },
    changeAlertNotSuccess: () => {
        const alertNotSuccess = !get().alertNotSuccess;
        set({
            alertNotSuccess: alertNotSuccess
        });
        setTimeout(() => {
            set(() => ({
                alertNotSuccess: false,
            }));
        }, 2000);
    },
    changeStateLoading: () => {
        const loading = !get().loading;
        set(() => ({
            loading: loading,
        }));
        setTimeout(() => {
            set(() => ({
                loading: false,
            }));
        }, 300);

    },
    changeStatePopOver: () => {
        const openDialog = !get().openDialog;
        set(() => ({
            openDialog: openDialog,
        }));
    },
    deleteTask: (id: string) => {
        get().changeStateLoading()

        set((state: { tasks: any; }) => (
            {
                tasks: state.tasks.filter((task: { id: string; }) => task.id !== id)

            })
        )
    },
    editTask: (editedTask: object) => {
        const { id }: any = editedTask;
        const tasks = get().tasks;
        const updatedTasks = tasks?.map((task: { id: string; }) => {
            if (task.id === id) {
                return {
                    ...editedTask
                };
            }

            return {
                ...task
            };
        }
        )
        // console.log(updatedTasks)

        set(() => ({
            tasks: updatedTasks
        }));

        get().closeDrawing();

    },
    editTaskProgress: (id: string) => {
        // get().changeStateLoading()
        const tasks = get().tasks;
        const updatedTasks = tasks?.map((task: {
            progressTask: string; id: string;
        }) => {
            if (task.id === id && task.progressTask === "Done") {
                get().changeAlertNotSuccess()
                return {
                    ...task,
                    progressTask: "notdone",
                };
            } else {
                get().changeAlertSuccess()
                return {
                    ...task,
                    progressTask: "Done",
                };
            }
        }
        )

        set(() => ({
            tasks: updatedTasks
        }));
    },
    addTask: (task: object) => {
        console.log(task)
        set((state: { tasks: any }) => ({
            tasks: [...state.tasks, { id: Date.now(), ...task }],
        }))

    },

    addCurrentTask: (currentTask: object) => {
        set(() => ({
            currentTask: { ...currentTask }
        }))

    },
    reset: () => {
        set({
            tasks: []
        });
    },
});

const useTaskStore = create(TaskStore);

export default useTaskStore;
