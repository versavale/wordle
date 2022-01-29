import { GameStats } from '../../lib/localStorage'

type Props = {
  gameStats: GameStats
}

const StatItem = ({
  label,
  value,
}: {
  label: string
  value: string | number
}) => {
  return (
    <div className="items-center justify-center m-1 w-1/4">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-xs">{label}</div>
    </div>
  )
}

export const StatBar = ({ gameStats }: Props) => {
  return (
    <div className="flex justify-center my-2">
      <StatItem label="Tentativi totali" value={gameStats.totalGames} />
      <StatItem
        label="Percentuale di successo"
        value={`${gameStats.successRate}%`}
      />
      <StatItem label="Vittorie Consecutive" value={gameStats.currentStreak} />
      <StatItem
        label="Miglior numero di vittorie consecutive"
        value={gameStats.bestStreak}
      />
    </div>
  )
}
