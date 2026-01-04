export function getJwtToken(): any {
	if (typeof window !== 'undefined') {
		return localStorage.getItem('accessToken') ?? '';
	}
	return '';
}

export function setJwtToken(token: string) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('accessToken', token);
	}
}

