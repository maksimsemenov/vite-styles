import React from 'react'
import dayjs from 'dayjs'
import { Link } from 'wouter'
import { formatPhone } from '../../modules/patients'

import { Avatar } from '../Avatar/Avatar'

import { Patient } from 'Types'

import styles from './PatientCard.module.css'

interface Props {
	patient: Patient
}

export function PatientCard({ patient }: Props): JSX.Element {
	return (
		<Link
			className={styles.card}
			href={`${import.meta.env.BASE_URL || '/'}${patient.id}`}
		>
			<Avatar
				className={styles.avatar}
				firstName={patient.firstName}
				lastName={patient.lastName}
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
		</Link>
	)
}
