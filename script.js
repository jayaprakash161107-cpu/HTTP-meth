//            GET


const api_bace_url = "https://6ab26ad65b9b60f39d34af22.mockapi.io/user";

async function fetchuser(){

    const rec = await fetch(`${api_bace_url}/users`)

    const data = await rec.json();

    console.log(data);
}

async function user(id){
    const rec =await fetch(`${api_bace_url}/users/${id}`)
    const data = await rec.json();

    console.log(data);
}

//        POST




async function senddata(send){

     const rec =await fetch(`${api_bace_url}/users`,{
        method : "POST",
        headers:{
            "content-type":"application/json" 
        },
        body:JSON.stringify(send)
    })
    const data = await rec.json();

    console.log(data);
}

const send={

name: "jayaprakash",
    mobilenum: "8127671287",
    contry: "tamilnadu"
}


//        PUT

async function updatedata(update,id){

     const rec =await fetch(`${api_bace_url}/users/${id}`,{
        method : "PUT",
        headers:{
            "content-type":"application/json" 
        },
        body:JSON.stringify(update)
    })
    const data = await rec.json();

    console.log(data);
}

const update={

name: "sakthi",
    mobilenum: "8127671287",
    contry: "tamilnadu"
}



//    DELETE



async function delet(id){
    const rec= await fetch(`${api_bace_url}/users/${id}`,{
        method:"DELETE"
        });
}


delet(7);

// updatedata(update,5)



// senddata(send)


// user(4)

fetchuser();