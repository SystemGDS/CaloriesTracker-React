
import CalorieDisplay from './CalorieDisplay';
import { useActivity } from "../hooks/useActivity";


export default function CaloriesTracker() {

    const {caloriesBurned, caloriesConsumed, netCalories} = useActivity()

    
    
  return (
    <>
      <h2 className="text-xl font-black text-white text-center">Resumen de Calorias</h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay
            calories = {caloriesConsumed}
            text="Consumidas"
        />
        <CalorieDisplay
            calories = {caloriesBurned}
            text="Ejercicios"
        
        />
        <CalorieDisplay
            calories = {netCalories}
            text="Diferencia"
        
        />
        {/* <p className="text-blue-900 font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-bold text-4xl text-center">
                {caloriesConsumed}
            </span>
            Consumidas
        </p>
        <p className="text-orange-500 font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-bold text-4xl text-center">
                {caloriesBurned}
            </span>
            Ejercicios
        </p> */}
      </div>
      
    </>
  )
}
