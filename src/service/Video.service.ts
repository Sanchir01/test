import axios from 'axios'
import { IVideo } from '../types/Video.interface'

export const videoService = {
	async getZone() {
		return (
			await axios.get<IVideo[]>(
				'http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd'
			)
		).data
	}
}
