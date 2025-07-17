import { test } from '@playwright/test';
import {API_URL} from '../helpers/fixtures/index';

export class ChallengerService {
	constructor(request) {
		this.request = request;
	}
	async post() {
		return test.step('post /challenger', async () => {
			const response = await this.request.post(`${API_URL}challenger`);
			const headers = response.headers();
            const token = headers['x-challenger'];
            return token;
		});
	}
	
}