const db = require('../../config/db')

const query = "SELECT * FROM users WHERE mbti = ?;";
db.query(query, 'ENTP', function(err, results){
    if (err) throw err;  // 에러 있으면 띄우고

    res.render('getlist', {users : results});  // getlist.ejs 에 render 해줄건데 , users 에 쿼리문 날리고난 results 를 담을거다 
});

fetch("/friends", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
    })
    .then((response) => response.json())
    .then((data) => res.render('friends', {users : data}));