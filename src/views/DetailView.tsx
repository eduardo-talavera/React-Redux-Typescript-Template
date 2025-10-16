import { getTodosById } from "@/api/todosApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import type { Todo } from "store/todos/todos";

export const DetailView = () => {
  const { id } = useParams()
  const [todo, setTodo] = useState<Todo>()

  useEffect(() => {
    getTodosById(id!)
    .then((res) => {
      setTodo(res)
    })
    .catch((err) => {
      console.log(err)
      toast.error('Error al obtener todo')
    })
  }, [id])

  return (
    <div>
      <h1 className="text-2xl">{ todo?.title }</h1>
    </div>
  )
}
