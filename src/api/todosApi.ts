import { isAxiosError } from 'axios'
import api from '@/lib/axios'
import type { Todo } from '../types'


export async function getTodos() {   
    try {
        const { data } = await api.get<Todo[]>('/todos')
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message)
        }
    }
}

export async function getTodoById(todoId: string) {   
    try {
        const url = `/todos/${todoId}`
        const { data } = await api.get<Todo>(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message)
        }
    }
}

