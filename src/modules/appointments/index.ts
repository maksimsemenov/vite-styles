import { camelizeKeys } from 'humps'
import { useQuery } from 'react-query'
import { Appointemnt } from 'Types'
import { useBaseApi } from '../../utils/hooks/useBaseApi'

export const usePatientAppointments = (patientId: number | string) => {
	const baseApi = useBaseApi()
	const { isLoading, error, data } = useQuery<Appointemnt[]>(
		`appointments-for-${patientId}`,
		() =>
			fetch(`${baseApi}/api/appointments`)
				.then((response) => response.json())
				.then(
					(result: { data: Appointemnt[] }) =>
						camelizeKeys(result) as Appointemnt[]
				)
	)

	return { isLoading, error, data }
}
