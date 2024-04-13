const API_PREFIX = 'https://bda.nemodacremont.me';

export interface HeadQuarter {
	name: string;
	address: string;
	localStudents: string[];
}

// export interface Allo = {
//   UID: string;
//   CAS_UID: string;
//   state: "Finished" | "In Progress";
//   title: string;
//   creationDate: string;
//   finishDate: string;
//   requestText: string;
// };

interface AlloRequest {
  taskId: number;
  quantity: number;
}

interface Allo {
  address: string; 
  city: string;
  phone: string;
  name: string;
  casId: string;
  requestText: string;
  state: string;
  allos: AlloRequest[];
}

export interface StudentData {
  CASId: string;
  CASUId: string;
  firstName: string;
  completeName: string;
  nickname: string;
  mail: string;
  school: string;
  pathway: string;
  address: string;
  profilePicture: {};
  relatedHqId: 0;
  relatedHq: HeadQuarter;
  phone: string;
  allos: Allo[];
  score: 0;
}

export function APIUrl(route: string): string {
	return API_PREFIX + route;
}

export async function getStudentData(token: string): Promise<StudentData> {
	const requestURL = APIUrl('/student');
	const init: RequestInit = {
		headers: [
			['Authorization', `Bearer ${token}`],
		],
	};

	const res = await (fetch(requestURL, init).catch(e => {
			console.error(e);
			throw new Error("GET /student request failed; request: " + requestURL);
		})
	);

	switch(res.status) {
		case 401:
			throw new Error("Need auth: " + requestURL);

		case 200:
			return await res.json() as StudentData;

		default:
			throw new Error("Unhandled /student statusCode: " + res.status)
	}
}

export async function getVideoLink(token: string): Promise<string> {
	const requestURL = APIUrl('/student/videoLink');
	const init: RequestInit = {
		headers: [
			['Authorization', `Bearer ${token}`],
		],
	};

	const res = await (fetch(requestURL, init).catch(e => {
			console.error(e);
			throw new Error("GET /videoLink request failed; request: " + requestURL);
		})
	);

	switch(res.status) {
		case 401:
			throw new Error("Need auth: " + requestURL);

		case 200:
			return await res.text();

		default:
			throw new Error("Unhandled /videoLink statusCode: " + res.status)
	}
}

export type {
	Allo
};

const API = {
	getStudentData,
	APIUrl,
  getVideoLink,
};

export default API;
