const API_PREFIX = 'https://nemodacremont.me:3000';

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

export interface Allo {
	id: string;
	clientStudentId: number;
	clientStudent: string;
	assignedListeux: object[];
	creationDate: string;
	updatedOn: string;
	quantity: number;
	state: string;
	taskId: number;
	task: {
		taskId: number;
		taskName: string;
		price: number;
		picture: {};
		description: string
	};
	requestText: string;
	finishData: string
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
  return 'https://www.youtube-nocookie.com/embed/sscYIVx4CgY?si=lgTuHIWq101MIrxt';

	const requestURL = APIUrl('/videoLink');
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

const API = {
	getStudentData,
	APIUrl,
  getVideoLink,
};

export default API;
