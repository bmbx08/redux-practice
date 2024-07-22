let initialState={
    count:0,
    id:"",
    password:"",
    decCount: 100,
}


function reducer(state=initialState,action){
    console.log("action",action);
    if(action.type==="INCREMENT"){  //reducer는 return문으로 state를 바꾸고 객체 형태로 store에 반환한다.
        return{...state,count:state.count + action.payload.num};  //->다른 state값들은 유지하되, count의 state값만 바꾼다는 뜻 
    } else if(action.type==="LOGIN"){
        return{...state,id:action.payload.id, password:action.payload.password};
    } else if(action.type==="REDUCTION"){
        return{...state,decCount:state.decCount - action.payload.decAmount};
    }

    return {...state};

    // switch(action.type){
    //     case "INCREMENT":
    //         return {...state,count:state.count+1};
    //     default:
    //         return {...state};
    // } 
}


export default reducer