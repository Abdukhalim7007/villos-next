import { useEffect, useState } from 'react';

const useDeviceDetect = () => {
	const [device, setDevice] = useState<string>('desktop'); // Default to desktop to avoid empty string

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
			const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
			setDevice(isMobile ? 'mobile' : 'desktop');
		}
	}, []);

	return device;
};

export default useDeviceDetect;

