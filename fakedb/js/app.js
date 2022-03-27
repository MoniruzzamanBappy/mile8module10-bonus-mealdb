// const nirbacon = ['a', 'b', 'c' , 'a', 'b', 'a', 'c', 'a']
// const nirbacon2 = {
//     a:4,
//     b:2,
//     c:2
// }

let db = {}
const addToDB = item =>{
    // db['a'] = 1;
    // db.a=1;

    const storedNirbacon = localStorage.getItem('nirbacon')
    if(storedNirbacon){
        db = JSON.parse(storedNirbacon)
    }
    
    if(item in db){
        db[item] = db[item] + 1;
    }
    else{
        db[item] = 1;
    }
    localStorage.setItem('nirbacon', JSON.stringify(db))
}
 const removeFromDB = item =>{
     const storedNirbacon = localStorage.getItem('nirbacon')
     if(storedNirbacon){
         const storedObject = JSON.parse(storedNirbacon);
         delete storedObject[item]
         localStorage.setItem('nirbacon',JSON.stringify(storedObject))
     }
 }