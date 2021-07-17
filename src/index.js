import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//connecting redux to firebase

import firebase from 'firebase/app'
//getFirestore is to connect to firestore, redux firestore is to get the config info
import { reduxFirestore, getFirestore,createFirestoreInstance } from 'redux-firestore';
//getFirebase is to connect to firebase, reactReduxFirebase is to get the firebase config info
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
//config info to connect to firebase
import fbConfig from './config/fbConfig'


//create store function from redux, applymiddleware allows middleware to work like thunk
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'

//provider gives access to redux store
import {Provider, useSelector} from 'react-redux'

//check if auth is ready before render
import { isLoaded } from 'react-redux-firebase'

//async request from dispatch
import thunk from 'redux-thunk'



//creating store for states,  thunk is more async request from dispatch
const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
    //passdown the config to connect to firebase
    reduxFirestore(firebase, fbConfig),
    // reactReduxFirebase(fbConfig)
    )
  )

//getting user profile from user collection
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }


const rrfProps = {
    firebase,
    // config: fbConfig,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  };


const AuthIsLoaded = ({ children }) => {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>Loading Screen...</div>;
        return children
}


ReactDOM.render(
  <React.StrictMode>

    {/* provider gives App access to redux store */}
    <Provider store = {store}>

      <ReactReduxFirebaseProvider {...rrfProps}>

        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
