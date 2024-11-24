/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { create } from "zustand";

const TaskStore = (set: any, get: any) => ({
    tasks: [
        // {
        //     id: Date.now(),
        //     taskName: 'Sample Task Name.',
        //     typeTask: 'Sample type Task',
        //     progressTask: 'on',
        // },
    ],
    currentTask:{},
    loading: false,
    openDialog: false,
   
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
    editTaskProgress: (id: string) => {
        get().changeStateLoading()
        const tasks = get().tasks;
        const updatedTasks = tasks?.map((task: {
            progressTask: string; id: string;
        }) => {
            if (task.id === id && task.progressTask === "Done") {
                return {
                    ...task,
                    progressTask: "notdone",
                };
            } else {
                return {
                    ...task,
                    progressTask: "Done",
                };
            }
        }
        )

        set((state: any) => ({
            tasks: updatedTasks
        }));

        // console.log(test)

        // test.taskName = "changed"

        // set((state: { tasks: never }) => ({
        //     tasks: [...state.tasks, { ...test }],
        // }))
    },
    addTask: (task: object) => {
        console.log(task)
        set((state: { tasks: any }) => ({
            tasks: [...state.tasks, { id: Date.now(), ...task }],
        }))

    },

    addCurrentTask: (currentTask: object) => {
        set((state: { currentTask: any }) => ({
            currentTask: {  ...currentTask }
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
