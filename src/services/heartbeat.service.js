import { test } from '@playwright/test';
//import{URL} from '../fixtures/config';

export class Heartbeat {
    constructor (request) {
        this.request = request;
    }

        async getDeleteStatusCode(token) {
            return test.step('Проверяем статус кода DELETE', async () => {
                const response = this.request.delete(`${process.env.API_URL}heartbeat`,
                    {
                        headers: {
                            'x-challenger': token,
                        }
                    }
                )
                return response;
            });
        };
}