const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'rrr',
    password: '123456',
    
});

const sql = `create table if not exists users(
    id int primary key auto_increment,
    name varchar(255) not null,
    price int not null
)`;
   
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    else console.log("Таблица создана");
});
connection.end();