import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
//connect reducer to firestore
import {firestoreReducer} from 'redux-firestore'

//for auth
import { firebaseReducer } from 'react-redux-firebase'

//root reducer file combines all reducers into one reducer file with combineReducer method
//reducer will return state object
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    //firestore reducer syncs the data from firestore database
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer