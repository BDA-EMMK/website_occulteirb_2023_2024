import API from './api';
import type { Allo } from './api';

interface AlloTask {
	taskId: number;
	taskName: string;
	price: number;
	picture: {};
	description: string;
}

interface AlloSubmit {
address: string; 
  city: string;
  phone: string;
  requestText: string;
  allos: AlloRequest[];
}

interface AlloRequest {
  taskId: number;
  quantity: number;
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
		},
		{
			taskId: 1,
			taskName: "Crèpes2",
			price: 50,
			picture: {},
			description: 'lorem ipsum',
		},
	];
}


export async function getAllos(ticket: string): Promise<Allo[]> {
	return [
		{
			id: "string",
			clientStudentId: 0,
			clientStudent: "string",
			assignedListeux: [],
			creationDate: "aDate",
			updatedOn: "string",
			quantity: 12,
			state: "In Progress",
			taskId: 1,
			task: {
				taskId: 0,
				taskName: "Des crèpes",
				price: .5,
				picture: {},
				description: "Ceci est une longue description l kjfkeljf joifez ure oiuz"
			},
			requestText: "Ceci est une longue description l kjfkeljf joifez ure oiuz",
			finishData: "string"
		}
	];

	const data = await API.getStudentData(ticket);

	return data.allos;
}

export type {
	AlloTask,
	AlloRequest,
	AlloSubmit,
};

const Allo = {
	getAllos,
	getAvailableAllos,
	saveAlloRequest,
	getSavedAlloRequests,
  submitAllo,
};

export default Allo;
