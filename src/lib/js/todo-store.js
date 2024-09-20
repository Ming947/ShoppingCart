import { v4 as uuid } from "uuid";
import { writable } from "svelte/store";

const INITIAL_TODOS = [
  {
    id: "1e7b7f8e-8c4b-4d3b-9b8e-1a2b3c4d5e6f",
    description: "Convince my cat to stop judging me",
    isComplete: false
  },
  {
    id: "2f8e7b6d-9c4a-4d3b-8b7e-1a2b3c4d5e6f",
    description: "Find out if pigeons have secret meetings",
    isComplete: true
  },
  {
    id: "3g9f8e7b-8c4d-4d3b-7b8e-1a2b3c4d5e6f",
    description: "Master the art of parallel parking",
    isComplete: false
  },
  {
    id: "4h0g9f8e-8c4e-4d3b-6b8e-1a2b3c4d5e6f",
    description: "Teach my dog to fetch me snacks",
    isComplete: true
  },
  {
    id: "5i1h0g9f-8c4f-4d3b-5b8e-1a2b3c4d5e6f",
    description: "Write a novel in emojis",
    isComplete: false
  },
  {
    id: "6j2i1h0g-8c4g-4d3b-4b8e-1a2b3c4d5e6f",
    description: "Learn to speak fluent sarcasm",
    isComplete: true
  }
];

// TODO Your code below, for Exercise Five.
  export const todoStore = writable(INITIAL_TODOS);
  todoStore.subscribe((todo)=>console.log(todo));

  export function addTodo(description){
    const todo = {
      id = uuid(),
      description,
      isComplete = false,
    }

    todoStore.update(todos =>[...todos,todo]);
  }

  export function toggleTodo(id){
    if(isComplete != null){
      isComplete = !isComplete;
    }
  }


