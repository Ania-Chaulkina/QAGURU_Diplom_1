import { test } from '@playwright/test';
import {API_URL} from '../helpers/fixtures/index';

export class ChallengesService {
	constructor(request) {
		this.request = request;
	}
	async get(token) {
		return test.step('post /challenges', async () => {
			const response = await this.request.get(`${API_URL}challenges`, {
				headers: {
					'x-challenger': token,
				},
			});
			return response;
		});

		
	}
}