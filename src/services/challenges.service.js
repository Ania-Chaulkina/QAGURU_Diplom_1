import { test } from '@playwright/test';
//const URL = 'https://apichallenges.herokuapp.com/';

export class ChallengesService {
	constructor(request) {
		this.request = request;
	}
	async get(token) {
		return test.step('post /challenges', async () => {
			const response = await this.request.get(`${process.env.API_URL}challenges`, {
				headers: {
					'x-challenger': token,
				},
			});
			return response;
		});

		
	}
}