
import { useEffect, useMemo, useReducer } from 'react';
import Form from "./components/Form"
import { activityReducers, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"
import CaloriesTracker from './components/CaloriesTracker';

function App() {
 const [state, dispatch] = useReducer(activityReducers, initialState)
 
 useEffect(() =>{
   localStorage.setItem('activities', JSON.stringify(state.activities))
  },[state.activities])
  
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
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>
      
      <section className="bg-blue-300 py-10 px-3">
        <div className="max-w-4xl mx-auto">
          <CaloriesTracker
            activities={state.activities}
            // dispatch={dispatch}
            // state={state}
          />
        </div>
      </section>


      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList 
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
    </>
  )
}

export default App
