import { FC } from 'react'
import { IVideo } from '../../types/Video.interface'

interface miniBlocksInterface {
	item: IVideo
	i: number
	videoRef: React.RefObject<HTMLVideoElement>
}

const MiniBlock: FC<miniBlocksInterface> = ({ item, videoRef }) => {
	const currentTimes = videoRef.current?.currentTime
	if (
		currentTimes! >= item.timestamp / 1000 &&
		currentTimes! <= item.timestamp / 1000 + item.duration
	) {
		return (
			<div
				className='bg-green-600 text-white p-5'
				style={{
					display: 'inline-block',
					left: item.zone.left,
					top: item.zone.top,
					width: item.zone.width,
					height: item.zone.height
				}}
			></div>
		)
	} else {
		return null
	}
}

export default MiniBlock
