declare module 'Types' {
	export interface Appointemnt {
		id: number
		patientId: number
		/** ISO String */
		occursAt: string
		type: string
	}
}
