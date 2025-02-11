/**
 * 
 * @param date `Date` object
 * @param join a character for joining numbers
 * @returns A normal date string
 */
export function getDateString(date: Date, join: string = ".") {
	const y = date.getFullYear().toString()
	const m = (date.getMonth() + 1).toString().padStart(2, "0")
	const d = date.getDate().toString().padStart(2, "0")
	return y + join + m + join + d
}

/**
 * 
 * @param start start date of work
 * @param end (Optional) end date of work
 * @returns An organized date range string
 */
export function getWorkingDateString(start: Date, end: Date | undefined, join: string = ".") {
	function convertDate(date: Date) {
		return getDateString(date, join).slice(0, 7)
	}

	const startString = convertDate(start)
	const endString = end ? convertDate(end) : null

	if (startString === endString) {
		return startString
	} else if (endString) {
		return `${startString} ~ ${endString}`
	} else {
		return `${startString} ~`
	}
}
