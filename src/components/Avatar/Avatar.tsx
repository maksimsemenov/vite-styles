import React from 'react'
import cn from 'clsx'
import { getColorForName, getInitials } from '../../modules/patients'

import styles from './Avatar.module.css'

interface Props {
	className?: string
	firstName: string
	lastName: string
	size?: number
}

export function Avatar({
	className,
	firstName,
	lastName,
	size = 46
}: Props): JSX.Element {
	return (
		<div
			className={cn(styles.avatar, className)}
			style={{
				backgroundColor: getColorForName(firstName),
				width: size,
				height: size
			}}
			role="presentation"
		>
			{getInitials(firstName, lastName)}
		</div>
	)
}
