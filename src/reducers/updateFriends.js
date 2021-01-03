// import addFriend from '../actions/addFriend';

let user = {
    id:1,
    name:"junaid",
    token:"gvcbcnc",
    friends:['rohit','akash','rishi','guddu','pawan']
}

let updateFriends = (state=user,action)=>{
    switch(action.type){
        case 'ADDFRIEND':
            state.friends.push(action.payload);
            console.log(state)
            return state

        case 'REMOVEFRIEND':
            state.friends.pop();
            console.log(state);
            return state;

        default:
            return state;
    }
}

export default updateFriends;

