
const API_PREFIX = 'http://localhost:8080';

export type Allo = {
  UID: string;
  CAS_UID: string;
  state: "Finished" | "In Progress";
  title: string;
  creationDate: string;
  finishDate: string;
  requestText: string;
};

function APIUrl(route: string): string {
	return API_PREFIX + route;
}

export async function getAlloHist(ticket: string): Promise<Allo[]> {
	const requestURL = APIUrl('/getAlloHist?ticket=' + ticket);

	const res = await (fetch(requestURL).catch(e => {
			console.error(e);
			throw new Error("/getAlloHist request failed; request: " + requestURL);
		}));

	switch(res.status) {
		case 400:
			throw new Error("Bad or missing ticket in /submitAllo request; request: "
				+ requestURL);

		case 200:
			let data: Allo[];
			const resText = await res.text();

			try {
				data = JSON.parse(resText);
			}
			catch (e) {
				console.error(e);
				throw new Error("Error while parsing /getAlloHist response; text: "
					+ resText);
			}

			return data;

		default:
			throw new Error("Unhandled submitAllo statusCode: " + res.status)
	}
}

export async function submitAllo(ticket: string, allo: Allo) {
	const data = {
		ticket: ticket,
		allo: allo
	};

	const requestURL = APIUrl(`/submitAllo`);

	const options = {
		method: 'POST',
		body: JSON.stringify(data)
	};

	const res = await (fetch(requestURL, options).catch(e => {
			console.error(e);
			console.error(requestURL);
			console.error(options);
			throw new Error("Error while sending /submitAllo: requestURL: "
				+ requestURL)
		}));

	switch (res.status) {
		case 200:
			const completedAlloRaw = await res.text();
			let completedAllo: Allo;

			try {
				completedAllo = JSON.parse(completedAlloRaw);
			}
			catch {
				throw new Error("Error while parsing JSON of submitAllo: "
					+ completedAlloRaw);
			}

			return completedAllo;

		case 400:
			throw new Error("Bad or missing ticket in submitAllo request");

		case 403:
			throw new Error("Illegal time");

		default:
			throw new Error("Unhandled submitAllo statusCode: " + res.status)
	}
}

