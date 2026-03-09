
export const getPatientColor = (color: string | undefined) => {
	switch (color) {
		case 'red':
			return 'bg-card-red shadow-red-50 shadow-lg shadow-red-500/50';
		case 'blue':
			return 'bg-card-blue shadow-blue-50 shadow-lg shadow-blue-500/50';
		case 'yellow':
			return 'bg-card-yellow shadow-yellow-50 shadow-lg shadow-yellow-500/50';
		default:
			return 'bg-gray-300 shadow-gray-50 shadow-lg shadow-gray-500/50';
	}
};
