import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { videoService } from '../service/Video.service'
import { timeCodeStore } from '../store/store'

export const timeCode = () => {
	const time = timeCodeStore(state => state.getTime)
	const getTimes = timeCodeStore(state => state.swapTimeCode)
	const { data, isSuccess } = useQuery({
		queryFn: () => videoService.getZone(),
		queryKey: ['video'],
		refetchOnWindowFocus: false,
		onSuccess: data => {
			time(data)
			getTimes(data)
			toast.success('загрузка завершена')
		},
		onError: () => {
			toast.error('ошибка во время загрузки')
		}
	})
	return { data, isSuccess }
}
