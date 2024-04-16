
import { useEffect, useMemo } from 'react';
import Form from "./components/Form"
import ActivityList from "./components/ActivityList"
import CaloriesTracker from './components/CaloriesTracker';
import { useActivity } from './hooks/useActivity';

function App() {
//  const [state, dispatch] = useReducer(activityReducers, initialState)
 
const {state, dispatch} = useActivity()

 useEffect(() =>{
   localStorage.setItem('activities', JSON.stringify(state.activities))
  },[state.activities])
  
  // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/rules-of-hooks
  const canRestApp = () => useMemo (() => state.activities.length,[state.activities])

  return (
    <>
      <header className="bg-lime-800 py-3 ">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de Calorias
          </h1>
          <button 
            className='bg-gray-700 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10'
            disabled={!canRestApp()}
            onClick={() =>dispatch({type:'restart-app'})}
          >
            Reiniciar App
          </button>
        </div>
      </header>

      <section className="bg-lime-600 py-7 px-3 ">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>
      
      <section className="bg-black py-10 px-3">
        <div className="max-w-4xl mx-auto">
          <CaloriesTracker/>
        </div>
      </section>


      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList 
    
        />
      </section>
    </>
  )
}

export default App
