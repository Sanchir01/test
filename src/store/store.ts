import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { IVideo } from '../types/Video.interface'

export interface IStore {
	time: IVideo[]
	videoTimeCode: number[]
	getTime: (data: IVideo[]) => void
	swapTimeCode: (data: IVideo[]) => void
}
export const timeCodeStore = create<IStore>()(
	devtools(set => ({
		time: {} as IVideo[],
		videoTimeCode: [],
		getTime: (data: IVideo[]) => {
			const items = data.sort((a, b) => a.timestamp - b.timestamp)
			set({ time: items })
		},
		swapTimeCode: (data: IVideo[]) => {
			const times = data.map(item => item.timestamp / 1000)
			set({ videoTimeCode: times })
		},
		
	}))
)
