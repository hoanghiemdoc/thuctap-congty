const express = require("express"); 
const app = express();
const PORT = 3000;
Customers = [{
    "_id": "4LRALA7GC59M",
    "full_name": "Nguyễn Thị Kim Ngân",
    "gender": "male",
    "birthday": "1955-04-12",
    "code": "2021042200001"
  },{
    "_id": "RDL7POQAQOJS",
    "full_name": "Nguyễn Minh Huy",
    "gender": "male",
    "birthday": "1996-04-12",
    "code": "2021042200002"
  },{
    "_id": "5AAKT8TUCP0L",
    "full_name": "Nguyễn Minh Quân",
    "gender": "male",
    "birthday": "1996-02-12",
    "code": "2021042200003"
  },{
    "_id": "C2MPWU8ZZVXI",
    "full_name": "Nguyễn Văn Hiệp",
    "gender": "male",
    "birthday": "1996-11-08",
    "code": "2021042200004"
  },{
    "_id": "DM3999G4K8O2",
    "full_name": "Nguyễn Thúy Vân",
    "gender": "female",
    "birthday": "2002-08-08",
    "code": "2021042200005"
  },{
    "_id": "3LOXVJCEPGJR",
    "full_name": "Lê Văn Giang",
    "gender": "male",
    "birthday": "2016-12-08",
    "code": "2021042200006"
  },{
    "_id": "HPK0WCEJ08GJ",
    "full_name": "Âu Mạnh Quang",
    "gender": "male",
    "birthday": "2016-02-08",
    "code": "2021042200007"
  },{
    "_id": "09PQFM0TO6RG",
    "full_name": "Dương Việt Anh",
    "gender": "male",
    "birthday": "1992-02-08",
    "code": "2021042200008"
  },{
    "_id": "2THPIPRCRVC4",
    "full_name": "Trần Trung Hiếu",
    "gender": "male",
    "birthday": "1995-02-08",
    "code": "2021042200009"
  },{
    "_id": "CY03A5LWMIRW",
    "full_name": "Trần Trung Hiếu",
    "gender": "male",
    "birthday": "2013-06-18",
    "code": "2021042200010"
  }]

// app.get("/list" , (req,res) => {
//     const name = [];
//     users.map(user => {
//         name.push(user.name);
//     })
//     res.json(name);
// })
//fe login --- name ,pass

//params, get/1, get/2, get/3
// app.get("/get/:id" ,(req,res) => {
//     const id = req.params.id; 
//     const user = [];
//     for (let i = 0; i<users.length ; i++) {
//         if (users[i].id == id) {
//             user.push(users[i]);
//         }
//     }
//     res.json(user);
// })

//querry get?id=1&&name=hoa
// app.get("/get" , (req,res) => {
//     const id = req.query.id;
//     const name = req.query.name
//     const user = [];
//     for (let i = 0; i<users.length ; i++) {
//         if (users[i].id == id) {
//             user.push(users[i]);
//         }
//     }
//     // //function checkUser(id,name) {
            
//     // }
//     res.json(user);
// })

//Post // login/ dang nhap http://localhost:3000/login
// app.post("/login" ,(req,res) => {
//     const name = req.body.name; //input
//     const pass = req.body.pass; //input handle e.target.value
//     const data = {
//         name,
//         pass
//     }
//     ////////////////logic//////////////////////
//     // function Login(user,pass) {
//     //     return true, false
//     // }

//     // res.json()
// })


//layer api fe (reactjs) ---> http://localhost:3000/list
//reacjs http://localhost:4200
//fetch, axios

// app.listen(PORT, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     // console.log("Server listen on " + PORT);
//     console.log(`Server listen on ${PORT}`);
// })

// 1. Filter theo gioi tinh có tuổi nhỏ hơn 40

// 2. Search tên customers



app.get("/get" , (req,res) => {
    const id = req.query.gender;
    const name = req.query.birthday;
    // const user = [];
    // for (let i = 0; i<users.length ; i++) {
    //     if (users[i].id == id) {
    //         user.push(users[i]);
    //     }
    // }
    // //function checkUser(id,name) {
      let checkUser = Customers.filter(function (gender,birthday) {
         checkUser=Customers.split(" ");
          let user = [];
          for (let i = 0; i < user.length; i++) {
              if (user[i].Customers == gender && user[i].Customers == birthday) {
                user.push(Customers[i]);
              }      
          }
         return Customers.gender > 40;  
        //  đoạn birthday em chưa hiểu lắm anh chỉ giáo phần này
        //  em vẫn chưa hiểu đoạn số năm trừ đi để tính được birday  
      });
      
      console.log(checkUser);
      res.json(user);
    // }
    // res.json(user);
})



// p1

function login(user, pass) {
  //log null == "", true hay false

  let customer = [];
  for (let i = 0; i < customer.length; i++) {
    customer.push(users[i]);

    if (user == "" || user !== users[username]) {
      console.log("tai khoan ko ton tai vui long nhap lai");
      return false;
    } else {
      if (user == pass || pass != users[passTK] || pass == "") {
        console.log("pass ko ton tai vui long nhap lai");
        return false;
      } else if (true) {
        console.log("nhap tk dung");
        console.log("nhap pass word dung");
        console.log("dang nhap thanh cong nhap thanh cong");
      }
      //user ss name users[], ss pass users[]
      // em cần support
    }

    // return true,false -- boolean
  }
}
// checkname --- rong || name khac vs name users => user k ton tai
// (user) => check pass => login
// pass sai => wrong pass
console.log(login);

