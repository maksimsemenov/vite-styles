import React from 'react'
import cn from 'clsx'

import styles from './Loader.module.css'

export function Loader({
	className,
	...rest
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
	return (
		<div
			className={cn(styles.loader, className)}
			aria-label="loading in progress"
			{...rest}
		>
			<div className={styles.dot} />
			<div className={styles.dot} />
			<div className={styles.dot} />
		</div>
	)
}
