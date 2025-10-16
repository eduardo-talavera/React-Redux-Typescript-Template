import { isAxiosError } from 'axios'
import api from '@/lib/axios'


export async function getTodos() {   
    try {
        const { data } = await api.get('/todos')
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message)
        }
    }
}

export async function getTodosById(todoId: string) {   
    try {
        const url = `/todos/${todoId}`
        const { data } = await api.get(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message)
        }
    }
}

