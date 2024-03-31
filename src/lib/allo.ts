
import API from './api';
import type { Allo } from './api';

export interface AlloTask {
	taskId: number;
	taskName: string;
	price: number;
	picture: {};
	description: string;
}

export async function getAvailableAllos(): Promise<AlloTask[]> {
	const requestURL = API.APIUrl('/allos/tasks');

	const res = await (fetch(requestURL).catch(e => {
			console.error(e);
			throw new Error("GET /allos/tasks request failed; request: " + requestURL);
		})
	);

	switch(res.status) {
		case 401:
			throw new Error("Need auth: " + requestURL);

		case 200:
			return await res.json();

		default:
			throw new Error("Unhandled submitAllo statusCode: " + res.status)
	}
}


export async function getAllos(ticket: string): Promise<Allo[]> {
	const data = await API.getStudentData(ticket);

	console.log(data);
	console.log('allos:')
	console.log(data.allos);
	return data.allos;
}

export default {
	getAllos,
	getAvailableAllos,
}

