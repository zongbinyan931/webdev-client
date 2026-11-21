import { http } from "@/lib/http";

export interface LabAssignment { id: number; title: string; description: string; due: string; completed: boolean; score: number }
export interface Todo { id: number; title: string; completed: boolean; description: string }
export const getAssignment = async () => (await http.get<LabAssignment>("/lab5/assignment")).data;
export const updateTitle = async (title: string) => (await http.get<LabAssignment>(`/lab5/assignment/title/${encodeURIComponent(title)}`)).data;
export const getTodos = async () => (await http.get<Todo[]>("/lab5/todos")).data;
export const createTodo = async () => (await http.get<Todo[]>("/lab5/todos/create")).data;
export const removeTodo = async (id: number) => (await http.get<Todo[]>(`/lab5/todos/${id}/delete`)).data;
export const postTodo = async (todo: Omit<Todo, "id">) => (await http.post<Todo>("/lab5/todos", todo)).data;
export const deleteTodo = async (id: number) => { await http.delete(`/lab5/todos/${id}`); };
export const updateTodo = async (todo: Todo) => (await http.put<Todo>(`/lab5/todos/${todo.id}`, todo)).data;
export const fetchHello = async () => {
  const response = await fetch("/api/lab5/hello");
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json() as Promise<{ message: string }>;
};
