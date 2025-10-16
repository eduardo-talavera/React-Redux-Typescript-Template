import { getTodos } from "@/api/todosApi"
import { Card } from "@/ui/Card"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import type { Todo } from "store/todos/todos"



export const HomeView = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    getTodos()
    .then((res) => {
      setTodos(res)
    })
    .catch((err) => {
      console.log(err)
      toast.error('Error al obtener todos')
    })
  }, [])

  return (
    <div>
      <h1 className="text-3xl mb-10">Home</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {
          todos.map(todo => (
            <Card 
              key={todo.id}
              onClick={() => navigate(`/${todo.id}`)} 
            >
              <h3 className="text-xl mb-5">{ todo.title }</h3>
              <p>
                {
                  todo.completed 
                    ? 'Completada'
                    : 'No completada'
                }
              </p>
            </Card>
          ))
        }
      </div>
    </div>
  )
}
