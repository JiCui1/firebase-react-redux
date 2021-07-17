export const createProject = (project) =>{
    //thunks allows actions to return functions instead of objects so dispatch will be halt until data gets back from request
    //get firebase and get firestore is argument passed down from think.withExtraArgument in index.js
    return (dispatch, getState, {getFirebase,getFirestore}) => {
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        const firestore = getFirestore();
        //adding new document to firestore
        firestore.collection('projects').add({
            //...project is the title and content that we passed down
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=>{

             //make async call to db
            dispatch({
                type: "CREATE_PROJECT", 
                project
            })
            
        }).catch((err)=>{
            dispatch({
            type:"CREATE_PROJECT_ERROR",
            err
        })
    })


    }
} 