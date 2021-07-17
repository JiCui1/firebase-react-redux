const initState = {
    //dummy data for testing
    projects:[
        {id: "1", title: "help me", content: "blah"},
        {id: "2", title: "collect all", content: "blah blah"},
        {id: "3", title: "egg hunt", content: "blah blah blah"},
    ]
} 



 const projectReducer = (state = initState, action) => {

    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state

        case "CREATE_PROJECT_ERROR":
            console.log('create project error', action.err)
            return state
        
        default:
            return state
    }
    
}

export default projectReducer