import { test } from '@playwright/test';
import {API_URL} from '../helpers/fixtures/index';

export class Heartbeat {
    constructor (request) {
        this.request = request;
    }

        async getDeleteStatusCode(token) {
            return test.step('Проверяем статус кода DELETE', async () => {
                const response = this.request.delete(`${API_URL}heartbeat`,
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