const addFriend = (newFriend)=>{
    return{
        type:'ADDFRIEND',
        payload:newFriend
    }
}

export default addFriend;
