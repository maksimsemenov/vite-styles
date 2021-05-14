import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { CloseButton } from '../buttons/CloseButton'

import styles from './Dialog.module.css'

interface Props {
	children: React.ReactNode
	isOpen: boolean
	onClose: () => void
}

export function Dialog({
	children,
	isOpen,
	onClose
}: Props): JSX.Element | null {
	const portalRef = useRef<HTMLElement>()

	if (!portalRef.current) {
		const portalEl = document.createElement('div')
		document.body.appendChild(portalEl)
		portalRef.current = portalEl
	}

	if (!isOpen) return null

	return ReactDOM.createPortal(
		<div className={styles.bg} onClick={onClose}>
			<div className={styles.dialog}>
				<CloseButton className={styles.close} onClick={onClose} />
				{children}
			</div>
		</div>,

		portalRef.current
	)
}
