"use client"

import { create } from "zustand";

const TaskStore = (set, get) => ({
    tasks: [
        // {
        //     id: Date.now(),
        //     taskName: 'Sample Task Name.',
        //     typeTask: 'Sample type Task',
        //     progressTask: 'on',
        // },
    ],
    loading: false,
    changeStateLoading: () => {
        const loading = !get().loading;
        // console.log(loading)
        set(() => ({
            loading: loading,
        }));
        setTimeout(() => {
            set(() => ({
                loading: false,
            }));
        }, 300);

    },
    deleteTask: (id: string) => {
        // console.log(id)
        get().changeStateLoading()

        set((state) => (
            { 
                tasks: state.tasks.filter((task: { id: string; }) => task.id !== id)

             })
        )
    },
    addTask: (objectTest: object) => {
        set((state: { tasks: never }) => ({
            tasks: [...state.tasks, { id: Date.now(), ...objectTest }],
        }))

        // set((state: { tasks: never }) => ({
        //     tasks: [...state.tasks, { ...objectTest }],
        // }));
    },
    reset: () => {
        set({
            tasks: []
        });
    },
});

const useTaskStore = create(TaskStore);

export default useTaskStore;
