type CalorieDisplayProps = {
    calories: number,
    text: string
}
export default function CalorieDisplay({calories, text}: CalorieDisplayProps) {
  return (
    <>
      <p className="text-blue-300 font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-bold text-4xl text-center">
                {calories}
            </span>
            {text}
        </p>
    </>
  )
}
