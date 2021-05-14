export const getColorForName = (name: string): string => {
	const hue = parseInt(name.replace(/[^\s]/, '').toLowerCase(), 32) % 360

	return `hsl(${hue}, 70%, 80%)`
}

export const getInitials = (firstName: string, lastName: string) => {
	return `${firstName?.[0]}${lastName?.[0]}`.toUpperCase()
}

const PHONE_REGEXP = /^\+?1?\D{0,3}(\d{3})\D*(\d{3})\D*(\d{4})/
export const formatPhone = (phone: string): string => {
	if (!phone) return ''
	const match = phone.match(PHONE_REGEXP)

	if (!match) return ''

	const [_, first, second, third] = match

	return `(${first}) ${second}-${third}`
}
