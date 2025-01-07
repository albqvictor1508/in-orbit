import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './button'
import { DialogTrigger } from './dialog'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './progress-bar'
import { Separator } from './separator'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from '../../../http/get-summary'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import { PendingGoals } from './pending-goals'

dayjs.locale(ptBR)

export function Summary() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, //sixty seconds
  })

  if (!data) {
    return null
  }

  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

  const percentualDeCompletos = Math.round((data.completed * 100) / data.total)

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold capitalize">
            {firstDayOfWeek} - {lastDayOfWeek}
          </span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={data?.completed} max={data?.total}>
          <ProgressIndicator style={{ width: `${percentualDeCompletos}%` }} />
        </Progress>
      </div>

      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span>
          Você completou <span className="text-zinc-100">{data.completed}</span>{' '}
          de <span className="text-zinc-100">{data.total}</span> metas nessa
          semana.
        </span>
        <span>{percentualDeCompletos}%</span>
      </div>

      <Separator />

      <PendingGoals />

      <div className="flex flex-col gap-6">
        <h2 className="text-xl">Sua Semana</h2>

        {Object.entries(data.goalsPerDay).map(([data, metas]) => {
          const month = dayjs(data).format("MMMM");
          const monthDay = dayjs(data).format("D");
          const weekDay = dayjs(data).format('dddd')
          return (
            <div key={data} className="flex flex-col gap-4">
              <h3 className="font-medium capitalize">
                {weekDay}{' '}
                <span className="text-zinc-400 text-xs">({monthDay} <span className='lowercase'>de</span> {month})</span>
              </h3>

              <ul className="flex flex-col gap-3">
                {metas.map(meta => {
                  const time = dayjs(meta.completedAt).format('HH:mm')
                  return (
                    <li key={meta.id} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-pink-500" />
                      <span className="text-sm text-zinc-400">
                        Você completou{' '}
                        <span className="text-zinc-100">{meta.title}</span> às{' '}
                        <span className="text-zinc-100">{time}h</span>{' '}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
