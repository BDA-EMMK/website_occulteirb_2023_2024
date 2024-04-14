import API from './api';
import type { Allo } from './api';

interface AlloTask {
	taskId: number;
	taskName: string;
	price: number;
	picture: {};
	description: string;
	state: "enabled" | "disabled";
}

interface AlloSubmit {
  address: string; 
  city: string;
  phone: string;
	name: string;
  requestText: string;
  allos: AlloRequestSubmit[];
}

interface AlloRequestSubmit {
	taskName: string;
  taskId: number;
  quantity: number;
}

interface AlloRequest {
  taskId: number;
  quantity: number;
}

export function cleanAlloRequest() {
	sessionStorage.setItem('allo_request', '{}');
}

export function saveAlloRequest(alloRequest: AlloRequest) {
	const currentRequest = sessionStorage.getItem('allo_request') || "{}";
	const new_request = {...JSON.parse(currentRequest)};

	new_request[alloRequest.taskId] = alloRequest;

	sessionStorage.setItem('allo_request', JSON.stringify(new_request));
}

export function getSavedAlloRequests(): AlloRequest[] {
	const currentRequest = sessionStorage.getItem('allo_request') || "{}";
	const allos = {...JSON.parse(currentRequest)};
	const out = [];

	for (let taskId in allos) 
		out.push(allos[taskId]);

	return out;
}

export async function submitAllo(token: string, alloSubmit: AlloSubmit): Promise<void> {
	const requestURL = API.APIUrl(`/allos/submit`);

	const options: RequestInit = {
		method: 'POST',
		headers: [
			['Authorization', `Bearer ${token}`],
			['Accept', 'application/json'],
			['Content-Type', 'application/json'],
		],
		body: JSON.stringify(alloSubmit),
	};

	const res = await (fetch(requestURL, options).catch(e => {
			console.error(e);
			console.error(requestURL);
			console.error(options);
			throw new Error("Error while sending /allos/submit: requestURL: "
				+ requestURL)
		}));

	switch (res.status) {
		case 201:
			return;

		case 400:
			throw new Error("Bad token in /allos/submit request");

		case 403:
			throw new Error("Illegal time");

		default:
			throw new Error("Unhandled /allos/submit statusCode: " + res.status)
	}
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
			throw new Error("Unhandled /allos/tasks statusCode: " + res.status)
	}

	return [
		{
			taskId: 0,
			taskName: "Crèpes",
			price: .5,
			picture: {},
			description: 'lorem ipsum',
			state: "enabled",
		},
		{
			taskId: 1,
			taskName: "Crèpes2",
			price: 50,
			picture: {},
			description: 'lorem ipsum',
			state: "enabled",
		},
	];
}


export async function getAllos(token: string): Promise<Allo[]> {
	const requestURL = API.APIUrl('/allos');
	const options: RequestInit = {
		headers: [
			['Authorization', `Bearer ${token}`],
		],
	};

	const res = await (fetch(requestURL, options).catch(e => {
			console.error(e);
			throw new Error("GET /allos request failed; request: " + requestURL);
		})
	);

	switch(res.status) {
		case 401:
			throw new Error("Need auth: " + requestURL);

		case 200:
			const out = await res.json();
			return out.map((el: any) => ({
				...el,
				address: el.address, 
				city: el.city,
				phone: el.phone,
				name: el.name,
				casId: el.CASUId,
				requestText: el.dataValues.requestText,
				state: el.dataValues.state,
				allos: el.askedTasks,
				}));

		default:
			throw new Error("Unhandled /allos statusCode: " + res.status)
	}
}

export type {
	AlloTask,
	AlloRequest,
	AlloSubmit,
};

const AlloOut = {
	getAllos,
	getAvailableAllos,
	saveAlloRequest,
	getSavedAlloRequests,
  submitAllo,
	cleanAlloRequest,
};

export default AlloOut;
