import { FC } from 'react'
import { IVideo } from '../../types/Video.interface'

interface Item {
	item: IVideo
	videoRef: React.RefObject<HTMLVideoElement>
}
const GridTime: FC<Item> = ({ item, videoRef }) => {
	const date = new Date(item.timestamp)
	const dateStr =
		('00' + date.getMinutes()).slice(-2) +
		':' +
		('00' + date.getSeconds()).slice(-2) +
		':' +
		('' + date.getMilliseconds())

	const dateStr3 = item.timestamp / 1000
	const getVideoTimeCode = () => {
		if (videoRef.current) {
			videoRef!.current!.currentTime = dateStr3
		}
	}
	return (
		<>
			<button onClick={() => getVideoTimeCode()}>
				<span className='bg-black text-white w-[110%]  cursor-pointer p-1'>
					{dateStr}
				</span>
			</button>{' '}
		</>
	)
}

export default GridTime
