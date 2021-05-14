import { camelizeKeys } from 'humps'
import { useQuery } from 'react-query'
import { Patient } from 'Types'
import { useBaseApi } from '../../utils/hooks/useBaseApi'

export { formatPhone, getColorForName, getInitials } from './utils'

export const usePatients = () => {
	const baseApi = useBaseApi()
	const { isLoading, error, data } = useQuery<Patient[]>('patients', () =>
		fetch(`${baseApi}/api/patients`)
			.then((response) => response.json())
			.then((result: { data: Patient[] }) => camelizeKeys(result) as Patient[])
	)

	return { isLoading, error, data }
}

export const usePatient = (id: string | number) => {
	const baseApi = useBaseApi()
	const { isLoading, error, data } = useQuery<Patient>(`patients/${id}`, () =>
		fetch(`${baseApi}/api/patients/${id}`)
			.then((response) => response.json())
			.then((result: { data: Patient }) => camelizeKeys(result) as Patient)
	)

	return { isLoading, error, data }
}
