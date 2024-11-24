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
    loading: false,
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
    deleteTask: (id: string) => {
        get().changeStateLoading()

        set((state: { tasks: any; }) => (
            {
                tasks: state.tasks.filter((task: { id: string; }) => task.id !== id)

            })
        )
    },
    // issueBook: (id) => {
    //     const books = get().books;
    //     const updatedBooks = books?.map((book) => {
    //         if (book.id === id) {
    //             return {
    //                 ...book,
    //                 status: "issued",
    //             };
    //         } else {
    //             return book;
    //         }
    //     });
    //     set((state) => ({
    //         books: updatedBooks,
    //         noOfAvailable: state.noOfAvailable - 1,
    //         noOfIssued: state.noOfIssued + 1,
    //     }));
    // },
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
    addTask: (objectTest: object) => {
        set((state: { tasks: any }) => ({
            tasks: [...state.tasks, { id: Date.now(), ...objectTest }],
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
