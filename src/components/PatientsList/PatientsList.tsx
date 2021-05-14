import React from 'react'
import { usePatients } from '../../modules/patients'
import { PatientCard } from '../PatientCard/PatientCard'

import styles from './PatientsList.module.css'
import { Dialog } from '../Dialog/Dialog'
import { useLocation, useRoute } from 'wouter'
import { PatientProfile } from '../PatientProfile/PatientProfile'
import { Loader } from '../Loader/Loader'

const PatientsList = () => {
	const { data: patients, isLoading } = usePatients()
	const [match, params] = useRoute<{ id: string }>(
		`${import.meta.env.BASE_URL || '/'}:id`
	)
	const [_, setLocation] = useLocation()

	return (
		<>
			<header className={styles.header}>
				<h1 className={styles.title}>Patients</h1>
			</header>
			<main>
				{isLoading ? (
					<div className={styles.empty}>
						<Loader />
					</div>
				) : (
					<ul className={styles.list}>
						{patients?.map((patient) => (
							<li key={patient.id}>
								<PatientCard patient={patient} />
							</li>
						))}
					</ul>
				)}
			</main>
			<Dialog
				isOpen={match}
				onClose={() => setLocation!(`${import.meta.env.BASE_URL || '/'}`)}
			>
				{params && <PatientProfile id={params?.id} />}
			</Dialog>
		</>
	)
}

export { PatientsList }
