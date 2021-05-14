import React from 'react'
import cn from 'clsx'
import dayjs from 'dayjs'

import { formatPhone, usePatient } from '../../modules/patients'

import styles from './PatientProfile.module.css'
import { Loader } from '../Loader/Loader'
import { Avatar } from '../Avatar/Avatar'
import { usePatientAppointments } from '../../modules/appointments'

interface Props {
	id: string
}

export function PatientProfile({ id }: Props): JSX.Element {
	const { data: patient, isLoading } = usePatient(id!)
	const { data: appointments, isLoading: isLoadingAppointments } =
		usePatientAppointments(id)

	if (isLoading || !patient) {
		return (
			<div className={cn(styles.profile, styles.empty)}>
				<Loader />
			</div>
		)
	}

	return (
		<section className={styles.profile}>
			<div className={styles.patient} role="button" tabIndex={0}>
				<Avatar
					className={styles.avatar}
					firstName={patient.firstName}
					lastName={patient.lastName}
					size={64}
				/>
				<div className={styles.name}>
					{patient.firstName} {patient.lastName}
				</div>
				<div className={styles.dob} aria-label="date of birth">
					{dayjs(patient.dob).format('MM/DD/YYYY')}
				</div>
				<div className={styles.phone} aria-label="phone">
					{formatPhone(patient.phone)}
				</div>
			</div>
			<ul
				className={cn(
					styles.appointments,
					isLoadingAppointments && styles.empty
				)}
			>
				{isLoadingAppointments && <Loader />}
				{appointments &&
					appointments.map((appointment) => (
						<li key={appointment.id} className={styles.appointment}>
							<div className={styles.date}>
								{dayjs(appointment.occursAt).format('D MMM YYYY [at] h:mm a')}
							</div>
							<div className={styles.type}>{appointment.type}</div>
						</li>
					))}
			</ul>
		</section>
	)
}
