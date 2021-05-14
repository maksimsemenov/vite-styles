import { useEffect, useState } from 'react'

const API_STORAGE_KEY = '@foresight/base-api'

export function useBaseApi(): string {
	const [baseApi, setBaseApi] = useState<string>(
		window.localStorage.getItem(API_STORAGE_KEY) ||
			import.meta.env.VITE_API_BASE
	)

	useEffect(() => {
		function handleStorageChange(): void {
			setBaseApi(
				window.localStorage.getItem(API_STORAGE_KEY) ||
					import.meta.env.VITE_API_BASE
			)
		}
		window.addEventListener('storage', handleStorageChange)

		return () => {
			window.removeEventListener('storage', handleStorageChange)
		}
	}, [])

	return baseApi
}
