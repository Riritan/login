"use strict";

class UserStorage{
    static #users={
        id:["leepaka","라이즈","방탄소년단"],
        psword:["1234","1234","123456"],
        name:["쇼타로","성찬","원빈"],
    };



    static getUsers(...fields){
        const users = this.#users;
        const newUsers =fields.reduce((newUsers,field)=>{
          
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
            }
            return newUsers;
        },{}); 
        return newUsers;
 }

 static getUserInfo(id){
    const users =this.#users;
    const idx = users.id.indexOf(id);
    const userKey = Object.keys(users);//[id,pW,name]
    const userInfo =userKey.reduce((newUser,info)=>{
        newUser[info] = users[info][idx];
        return newUser;
    },{});

    return userInfo;
 }
 static save(userInfo){
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return{success:true};


 }
}

module.exports =UserStorage;