/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, ReactNode, createContext, useMemo, useReducer } from "react";
import { activityReducers, initialState, ActivityActions, ActivityState } from '../reducers/activity-reducer';
import { categories } from "../data/categories";
import { Activity } from "../types";


type ActivityProviderProps = {
    children: ReactNode
}

type  ActivityContextProps = {
    state: ActivityState,
    dispatch: Dispatch<ActivityActions>
    caloriesConsumed: number
    caloriesBurned: number
    netCalories: number
    categoryName: (category: Activity['category']) => string[]
    isEmptyActivity: boolean
}
export const ActivityContext = createContext<ActivityContextProps>({} as ActivityContextProps)


export const ActivityProvider = ({children}: ActivityProviderProps) => {

    const [state, dispatch] = useReducer(activityReducers, initialState)

    //contadores
    const caloriesConsumed = useMemo(() => state.activities.reduce((total,activity) => activity.category === 1  ? total + activity.calories : total, 0),[state.activities])
    const caloriesBurned = useMemo(() => state.activities.reduce((total,activity) => activity.category === 2  ? total + activity.calories : total, 0),[state.activities])
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned,[state.activities])

    
    const categoryName = useMemo(() => (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name: ''),[state.activities])
  
    const isEmptyActivity = useMemo(() => state.activities.length === 0 ,[state.activities])

    return (
        <ActivityContext.Provider value={{
            state,
            dispatch,
            caloriesConsumed,
            caloriesBurned,
            netCalories,
            categoryName,
            isEmptyActivity,
        }}>
            {children}
        </ActivityContext.Provider>
    )
}