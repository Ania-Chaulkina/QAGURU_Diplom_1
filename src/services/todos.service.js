import { test } from '@playwright/test';
import {API_URL} from '../helpers/fixtures/index';

export class TodosService {
    constructor(request) {
        this.request = request;
    }

    async get(token, filter ='', acceptHeader) {
        return test.step('Получение списка задач', async () =>{
            const response = this.request.get(`${API_URL}todos${filter}`, 
            {
                headers: {
                    'x-challenger': token,
                    'Accept': acceptHeader,
                }
            }
            )
            return response;     
        })
    };

    async getContentType(token, acceptHeader) {
        return test.step("Получение XML,JSON", async () => {
            const response = await this.request.get(`${API_URL}todos`, {
                headers: {
                    'x-challenger': token,
                    'Accept': acceptHeader,
                }
            });
            return response;
        });
    };

    async post(token, title ='', description ='', status = '', id ='') {
        return test.step('Создаем задачу', async () => {
            const response = await this.request.post(`${API_URL}todos${id}`, {
                    headers: {
                        'x-challenger': token,
                    },
                    data:{
                        'title': title,
                        'description': description,
                        'doneStatus': status
                    }
                })
            return response;
        })
    }

    async delete(token, id) {
        return test.step("Удаляем задание", async () => {
            const response = await this.request.delete(`${API_URL}todos/${id}`, {
                headers: {
                    'x-challenger': token,
                }
            });
            return response;
        });
    }
}
