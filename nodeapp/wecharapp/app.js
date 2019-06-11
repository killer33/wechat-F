const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const mysql = require("mysql");

var pool = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "wx",
  connectionLimit: 60
});

//创建web服务器
var server = express();

server.use(
  cors({
    origin: [
      "http://127.0.0.1:5500",
      "http://127.0.0.1:8080",
      "http://localhost:5500",
      "http://localhost:8080"
    ],
    credentials: true
  })
);
server.listen(3000);

//添加session功能
server.use(
  session({
    secret: "128位字符串",
    resave: true,
    saveUninitialized: true
  })
);

server.use(express.static("public"));
//要在路有的前边使用中间件检查->body—parser
server.use(
  bodyParser.urlencoded({
    extended: false
  })
);
//获取用户头像
server.get("/loginuname", (req, res) => {
  var uname = req.query.uname;
  if (!uname) return;
  var sql = " SELECT img FROM wx_login WHERE uname=?";
  pool.query(sql, uname, (err, result) => {
    if (err) console.log(err);
    if (result.length == 0) {
      res.send({
        code: -1,
        msg: "该账户不存在"
      });
    } else {
      res.send({
        code: 1,
        msg: "成功",
        data: result
      });
    }
  });
});
//接受用户登录请求
server.get("/login", (req, res) => {
  var uname = req.query.uname;
  var upass = req.query.upass;
  if (req.session.sid != undefined) {
    pool.query("SELECT uid, uname, phone, img FROM wx_login", (err, result) => {
      res.send({
        code: 1,
        msg: "登录成功",
        data: result
      });
    });
  } else {
    var sql = " SELECT uid,uname,phone,img FROM wx_login";
    sql += " WHERE uname = ? AND upass = ?";
    pool.query(sql, [uname, upass], (err, result) => {
      if (err) throw console.log(err);
      if (result.length == 0) {
        res.send({
          code: -1,
          msg: "用户或密码错误"
        });
      } else {
        req.session.sid = result[0].uid;
        res.send({
          code: 1,
          msg: "登录成功",
          data: result
        });
      }
    });
  }
});
//判断是否已登录否则跳转到登录页面进行登录
server.get("/sessiony", (req, res) => {
  var id = req.session.sid;
  if (!id) {
    res.send({
      code: -1,
      msg: "请登入用户"
    });
  } else {
    res.send({
      code: 1,
      msg: "已登录"
    });
  }
});
server.get("/chartone", (req, res) => {
  var lid = req.query.lid;
  if (!lid) return;
  pool.query(`select*from wx_chatlist Where lid=?`, [lid], (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});
server.get("/weixin", (req, res) => {
  var uid = req.session.sid;
  if (!uid) return;
  var sql = `SELECT * from wx_login_chat where lc_id=${uid}`;
  pool.query(sql, (err, result) => {
    if (err) console.log(err);
    var id = result[0].login_char.split(",");
    var results = [{}];
    for (var i = 0; i < id.length; i++) {
      var isi = id[i];
      var c = 0;
      pool.query(
        "select * from wx_chatlist where lid=?",
        [isi],
        (err, resultess) => {
          c++;
          results[c - 1] = resultess;
          if (c == id.length) {
            res.send({
              code: 1,
              msg: "响应成功",
              data: results
            });
          }
        }
      );
    }
  });
});
Array.prototype.indexVf = function (arr) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == arr) {
      return i;
    }
  }
};
server.get("/sends", (req, res) => {
  var sid = req.session.sid;
  var id = req.query.lid;
  if (!id & sid) return;
  var sql = "select lc_id,login_char,istruechat from";
  sql += " wx_login_chat Where lc_id=?";
  var sqli = "UPDATE wx_login_chat SET istruechat=? WHERE lc_id=?";
  pool.query(
    sql,
    [sid],
    (err, result) => {
      if (err) console.log(err);
      for (var i = 0; i < result.length; i++) {
        var arr = result[i].login_char.split(",");
        var arrlen = arr.indexVf(id);
        var arr1 = result[0].istruechat.split(",");
        var arr2 = arr1.splice(arrlen, 1, "true");
        var arr3 = arr1; //result[0].istruechat
        pool.query(sqli, [arr3.join(","), sid], (err, result) => {
          if (err) console.log(err);
          // var arriilen = [];
          // for (var ii = 0; ii < arr3.length; ii++) {
          //   if (arr3[ii] == "true") arriilen.push(arr[ii]);
          // }
          var slq2 = "SELECT * FROM wx_chatlist WHERE lid=?";
          // for (var p of arriilen) {
          //   console.log(p);
          pool.query(slq2, id, (err, resulti) => {
            if (err) console.log(err);
            res.send({
              code: 1,
              data: result,
              path: "/weixin"
            });
          });
          // }
        });
      }
    },
    pool.query(sql, [id], (err, result) => {
      if (err) console.log(err);
      var arr = result[0].login_char.split(",");
      var arrlen = arr.indexVf(sid);
      var arr1 = result[0].istruechat.split(",");
      var arr2 = arr1.splice(arrlen, 1, "true");
      var arr3 = arr1.join(",");
      pool.query(sqli, [arr3, id], (err, result) => {
        if (err) console.log(err);
      });
    })
  );
});
//获得好友聊天列表
server.get("/wload", (req, res) => {
  var sid = req.session.sid;
  if (!sid) return;
  var sql = "select login_char,istruechat from wx_login_chat Where lc_id=?";
  pool.query(sql, [sid], (err, result) => {
    if (err) console.log(err);
    var arr = [],
      arr1 = [];
    arr3 = [{}];
    var istruearr = result[0].istruechat.split(",");
    for (var i = 0; i < result[0].login_char.split(",").length; i++) {
      if (istruearr[i] == "true") {
        arr.push(i);
      }
    }
    if (arr.length > 0) {
      for (var p of arr) {
        arr1 += result[0].login_char.split(",")[p];
      }
      req.session.lid = arr1;
      for (var i = 0; i < arr1.length; i++) {
        var c = 0;
        pool.query(
          "select*from wx_chatlist Where lid=?",
          [arr1[i]],
          (err, results) => {
            if (err) console.log(err);
            c++;
            arr3[c - 1] = results;
            if (c == arr.length) {
              res.send({
                code: 1,
                msg: "快去聊天吧",
                data: arr3
              });
            }
          }
        );
      }
    } else {
      res.send({
        code: -1,
        msg: "您还没有聊过天"
      });
    }
  });
});
//获得列表聊天时间及对话
server.get("/detailstime", (req, res) => {
  var sid = req.session.sid;
  var lids = req.session.lid;
  if (!sid | !lids) return;
  var sql = "Select*FROM wx_details WHERE";
  sql += " wx_myid_lid=? and wx_thid_lid=?";
  var arr = [{}];
  var arrindex = [];
  for (var i = 0; i < lids.length; i++) {
    var c = 0;
    var ld = Number(lids[i]);
    pool.query(sql, [sid, ld], (err, result) => {
      c++;
      arr[c - 1] = result;
      // console.log(arr[c - 1]);
      if (c == lids.length) {
        for (var ii = 0; ii < lids.length; ii++) {
          if (arr[ii].length <= 0) {
            arrindex.push(ii);
          }
        }
        // console.log(arrindex, c);
        if (arrindex.length != 0) {
          for (var p of arrindex) {
            var d = 0;
            pool.query(sql, [Number(lids[p]), sid], (err, results) => {
              d++;
              if (results.length > 0) {
                arr[d - 1] = results;
              }
              if (d == arrindex.length) {
                res.send({
                  code: 1,
                  data: arr,
                  myid: sid
                });
              }
            });
          }
        } else {
          res.send({
            code: 1,
            data: arr,
            myid: sid
          });
        }
      }
    });
    //    //for循环内
  }
  //for循环外
});
server.get("/details", (req, res) => {
  var mid = req.session.sid;
  var tid = req.query.lid;
  if (!mid && tid) {
    res.send({
      code: -1,
      msg: "404"
    });
    return;
  }
  var sql = "Select * FROM wx_details Where";
  sql += " wx_myid_lid=? and wx_thid_lid=?";
  pool.query(sql, [mid, tid], (err, result) => {
    if (result.length <= 0) {
      pool.query(sql, [tid, mid], (err, result) => {
        if (err) console.log(err);
        res.send({
          code: 1,
          msg: "",
          data: result
        });
        return;
      });
    } else {
      if (err) console.log(err);
      res.send({
        code: 1,
        msg: "",
        data: result
      });
    }
  });
});
//朋友圈
server.get("/pengyouquan", (req, res) => {
  var sid = req.session.sid;
  var lids = req.session.lid;
  if (!sid | !lids) return;
  var arr = [{}],
    n = 0;
  pool.query(
    "SELECT*FROM wx_myfriendship WHERE wx_myfriendship_id=?",
    [sid],
    (err, myresult) => {
      if (err) console.log(err);
      var sql =
        "SELECT * FROM wx_release_content WHERE wx_release_content_id=?";
      for (var i = 0; i < lids.length; i++) {
        var ld = Number(lids[i]);
        pool.query(sql, [ld], (err, result) => {
          n++;
          arr[n - 1] = result;
          if (n == lids.length) {
            res.send({
              code: 1,
              data: {
                myresult,
                arr
              }
            });
          }
        });
      }
    }
  );
});
server.get("/loginzhuce", (req, res) => {
  var uname = req.query.uname,
    upass = req.query.upass,
    phone = req.query.phone;
  var uid;
  if (!uname & upass) return;

  function Ane1() {
    var p = new Promise(() => {
      pool.query("select uname from wx_login where uname=?", [uname], (err, result) => {
        if (err) console.log(err);
        if (result.length <= 0) {
          setTimeout(() => {
            pool.query("insert into wx_login set uname=?,upass=?,phone=?", [uname, upass, phone], (err, result) => {
              if (err) console.log(err);
              uid = result.insertId;
              Ane2();
              Ane3();

            });
          }, 300);
        } else {
          res.send({
            code: -1,
            msg: "该账户已存在",
            data: result
          });
        }
      })
      return p;
    })
  }

  function Ane2() {
    var p = new Promise(function () {
      setTimeout(() => {
        pool.query("insert into wx_chatlist set uname=?", [uname], (err, result) => {
          if (err) console.log(err);
        })
        pool.query("insert into wx_login_chat set login_char=?,istruechat='true',istruenews='true',issearch='true'", [
          uid
        ], (err, result) => {
          if (err) console.log(err);

        })
      }, 300);
    });
    return p;
  }

  function Ane3() {
    var p = new Promise(function () {
      setTimeout(() => {
        pool.query("insert into wx_myfriendship set wx_release_id=?", [uid], (err, result) => {
          if (err) console.log(err);
          res.send({
            code: 1,
            msg: "注册成功",
            data: result
          });
        })
      })
    })
    return p;
  }
  Ane1()
});
server.get("/loginchazhao", (req, res) => {
  var uname = req.query.uname;
  var phone = req.query.phone;
  var email = req.query.email;
  if (uname == "" || phone == "" || email == "") return;
  pool.query(`select * from wx_login Where uname=?||phone=?||email=?`, [uname, phone, email], (err, result) => {

})
//
    if (err) console.log(err);
    if (result.length <= 0) {
      res.send({
        code: -1,
        msg: "该用户不存在"
      });
    } else {
      req.session.tjid = result[0].uid;
      res.send({
        code: 1,
        msg: "查找到该用户",
        data: result
      });
    }
  })
})
server.get("/logintianjia", (req, res) => {
  var sid = req.session.sid;
  var tjid = req.session.tjid;
  console.log(tjid);
  if (tjid == undefined) return;
  pool.query("select * from wx_login_chat Where lc_id=?", [sid], (err, result) => {
    if (err) console.log(err);
    var arr, arr1;
    arr = result[0].login_char + "," + tjid;
    console.log(arr);
    console.log(result[0].login_char);
    res.send(result);
    // pool.query("update ")
  })
})
