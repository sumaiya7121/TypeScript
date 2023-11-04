{
//promise

const  createpromise = () =>{

return new Promise((resolve, reject)=>{
    const data ="something";
    if(data){
        resolve(data)
    }else{
        reject("failed to load data")
    }
})

}

//calling create promise function

const showdata= async()=>{
    const data= await createpromise()
    console.log(data)
}

showdata();














}