const greetFriends=(...friends:string[])=>{

friends.forEach(friend => {
    console.log(`hi ${friend}`)
});
}

greetFriends('saaki','saami', 'touhid')