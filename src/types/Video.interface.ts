export interface zone {
	left: number
	top: number
	width: number
	height: number
}

export interface IVideo {
	time: any
	id: number
	timestamp: number
	duration: number
	zone: zone
}
