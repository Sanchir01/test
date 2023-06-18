import { useRef, useState } from 'react'
import { shallow } from 'zustand/shallow'
import './App.css'
import GridTime from './components/gridTime/gridTime'
import MiniBlock from './components/miniBlocks/miniBlock'
import { timeCode } from './hooks/useGetTimeCode'
import { timeCodeStore } from './store/store'

function App() {
	const store = timeCodeStore(state => state.time, shallow)
	const { data } = timeCode()

	const videoRef = useRef<HTMLVideoElement>(null)

	const [block, setBlock] = useState<boolean>(false)

	const timeCodes = timeCodeStore(state => state.videoTimeCode)

	const hanleTimeUpdata = () => {
		const video = videoRef.current

		const currentTime = video?.currentTime
		const shouldShowElement = timeCodes.some(tc => {
			return currentTime! >= tc && currentTime! <= tc + 2
		})
		setBlock(shouldShowElement)
	}

	return (
		<main className='flex flex-col'>
			<h1 className='text-5xl text-red-400 items-center text-center h-20 p-3'>
				Видео плеер
			</h1>
			<video
				onTimeUpdate={hanleTimeUpdata}
				className=' relative'
				ref={videoRef}
				controls
			>
				<source
					src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
					type='video/mp4'
				></source>
			</video>
			<div className='  text-center items-center  mt-20'>
				{data?.map(element => (
					<MiniBlock item={element} videoRef={videoRef} key={element.id} />
				))}
			</div>
			<div className='grid grid-cols-5 gap-4 text-center mt-10'>
				{store.length ? (
					store.map(item => (
						<GridTime videoRef={videoRef} key={item.id} item={item} />
					))
				) : (
					<span>Loading ...</span>
				)}
			</div>
		</main>
	)
}

export default App
