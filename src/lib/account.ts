import auth from '$lib/auth';
import api from '$lib/api';

interface AccountData {
	rank: number;
	points: number;
	name: string;
	mail: string;
	tel: string;
	address: string;
	city: string
}

export const fetchAccountData = async (): Promise<AccountData | null> => {
	const token = auth.getToken();
	console.log("Toekn:", token);
	if (!token)
		return null;

	const rawData = await api.getStudentData(token);
	return {
		rank: -1,
		points: rawData.score,
		name: rawData.completeName,
		// mail: rawData.mail,
		// tel: rawData.phone,
		// address: rawData.address,
		mail: "",
		tel: "",
		address: "",
		city: "",
	};
}

export const saveAccountData = (accountData: AccountData): void => {
	if (typeof localStorage === 'undefined')
		return;

	if (accountData.rank > 0)
		localStorage.setItem('rank', accountData.rank.toString());

	if (accountData.points > 0)
		localStorage.setItem('points', accountData.points.toString());

	localStorage.setItem('name', accountData.name);
	localStorage.setItem('mail', accountData.mail);
	localStorage.setItem('tel', accountData.tel);
	localStorage.setItem('address', accountData.address);
	localStorage.setItem('city', accountData.city);
}

export const getSavedAccountData = (): AccountData => {
	if (typeof localStorage === 'undefined')
		throw new Error('localstorage is udnefined');

	const rank = parseInt(localStorage.getItem('rank') || "-1");
	const points = parseInt(localStorage.getItem('points') || "-1");
	const name = localStorage.getItem('points') || "";
	const mail = localStorage.getItem('mail') || "";
	const tel = localStorage.getItem('tel') || "";
	const address = localStorage.getItem('address') || "";
	const city = localStorage.getItem('city') || "";

	return {
		rank,
		points,
		name,
		mail,
		tel,
		address,
		city,
	};
}

export type {
	AccountData
};

const Account = {
	fetchAccountData,
	saveAccountData,
	getSavedAccountData,
};

export default Account;
