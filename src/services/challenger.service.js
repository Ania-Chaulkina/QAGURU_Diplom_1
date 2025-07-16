import { test } from '@playwright/test';
//const URL = 'https://apichallenges.herokuapp.com/';

export class ChallengerService {
	constructor(request) {
		this.request = request;
	}
	async post() {
		return test.step('post /challenger', async () => {
			const response = await this.request.post(`${process.env.API_URL}challenger`);
			const headers = response.headers();
            const token = headers['x-challenger'];
            return token;
		});
	}
	
}