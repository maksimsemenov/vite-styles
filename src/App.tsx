import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { PatientsList } from './components/PatientsList/PatientsList'

import './index.css'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<PatientsList />
		</QueryClientProvider>
	)
}

export default App
