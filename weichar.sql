#选择语言
SET NAMES UTF8;
#删除库
DROP DATABASE IF EXISTS wx;
#语言
CREATE DATABASE wx CHARSET=UTF8;
#选择微信库
USE wx;
#创建表名及表内容

#登录
CREATE TABLE wx_login(
#id
uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
#uname 账号
uname varchar(32),
#upass 密码
upass varchar(32),
#phone 手机
phone INT,
#qq邮箱
email varchar(32),
#注册时间
data_time varchar(64),
#密保问题1 也要加密md5()
protection varchar(64),
#密保答案1 也要加密md5()
protection_password varchar(64),
#小头像
img varchar(64)
);
insert into wx_login(uid,uname,upass,phone,email,data_time,protection,protection_password,img)values
(null,'caocao','caocao','14587565875','1945252875@qq.com','2019/6/2','null','null','http://172.242.19.42:3000/wechat/headerimg.png'),
(null,'guanyu','guanyu','14583535875','1945252875@qq.com','2019/6/2','null','null','http://172.242.19.42:3000/wechat/headerimg.png'),
(null,'sunquan','sunquan','17835658755','1945252875@qq.com','2019/6/2','null','null','http://172.242.19.42:3000/wechat/headerimg.png'),
(null,'simayi','simayi','14583535875','1945252875@qq.com','2019/6/2','null','null','http://172.242.19.42:3000/wechat/headerimg.png'),
(null,'tom123','123456','14587565875','1945252875@qq.com','2019/6/2','null','null','http://172.242.19.42:3000/wechat/headerimg.png'),
(null,'mike','123456','14587564875','1945252875@qq.com','2019/6/2','null','null','http://172.242.19.42:3000/wechat/headerimg.png');

#储存登录时id再根据id查找titie_id,在查找当前表下的聊天列表id

CREATE TABLE wx_login_chat(

#id自增 添加好友成功后会自动向当前表发送 对方的id
lc_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
#获取到id 进行遍历 再去查找 列表查找符合的用户
login_char varchar(1500),
istruechat varchar(6500),
istruenews varchar(6500),
issearch varchar(6500)
);
insert into wx_login_chat(lc_id,login_char,istruechat,istruenews,issearch) values
(null,'1,2,3,4,5,6','false,false,false,false
,false,false','true,true,true,true,true,true'
,'true,true,true,true,true,true'),
(null,'1,3,4,6','false,false,false,false'
,'true,true,true,true','true,true,true,true'),
(null,'2,3,4,5,6','false,false,false,false,false'
,'true,true,true,true,true','true,true,true,true,true'),
(null,'1,3,4,5,6','false,false,false,false,false'
,'true,true,true,true,true','true,true,true,true,true'),
(null,'2,3,4,6','false,false,false,false'
,'true,true,true,true','true,true,true,true'),
(null,'3,4,5,6','false,false,false,false'
,'true,true,true,true','true,true,true,true');

#是否在聊天列表框里如果在就添加 不在就移除 表
#根据wx_login_chat表id
#暂时没写空着


#聊天列表
CREATE TABLE wx_chatlist(
lid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
#char uname对方微信名
uname varchar(16),
#自己给对的备注
remarks varchar(16),
#性别bool型1为男0为女
sex tinyint(1),
#地区 所在市 如郑州
region varchar(32),
#所在 区 如金水区
area varchar(32),
#标签
title varchar(128),
#朋友圈id
release_content_id INT,
#他的头像
img varchar(64),
#我和他共同
common varchar(128),
#来源source 判断是通过那个方法添加
source varchar(128)
);

insert into wx_chatlist(lid,uname,remarks,sex,region,area,title,img,release_content_id,common,source)values
(null,'曹操','曹曹？',1,'河南','洛阳',"宁我负人","http://172.242.19.42:3000/wechat/headerimg.png",1,null,null),
(null,'关羽','关羽？',1,'河南','洛阳',"玉可碎不可改其质","http://172.242.19.42:3000/wechat/headerimg.png",2,null,null),
(null,'孙权','孙权？',1,'河南','洛阳',"吾有甘兴霸","http://172.242.19.42:3000/wechat/headerimg.png",3,null,null),
(null,'司马懿','司马懿？',1,'河南','洛阳',"不逃则死","http://172.242.19.42:3000/wechat/headerimg.png",4,null,null),
(null,'tom','tom',1,'河南','禹州',"吾有兴霸","http://172.242.19.42:3000/wechat/headerimg.png",5,null,null),
(null,'mike','mike',0,'河南','禹州',"不逃则死","http://172.242.19.42:3000/wechat/headerimg.png",6,null,null);


#发布内容对应表,朋友圈对应表
CREATE TABLE wx_release_content
(
    #发布表id，以及根据id查看 wx_myfriendship  谁发布的
wx_release_content_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        #发布人
        wx_release_content_name VARCHAR(64),
        #发布标题
        wx_release_content_title VARCHAR(64),
        #发布内容
        wx_release_content_details VARCHAR(3000),
        #发布时间
        wx_release_content_data_time VARCHAR(32),
	#点赞次数
	wx_release_content_fabulous INT,
        #发布img对应表
        wx_release_content_imgid INT
       
);
INSERT INTO wx_release_content (wx_release_content_id,wx_release_content_name,wx_release_content_title,wx_release_content_details,wx_release_content_data_time,wx_release_content_fabulous,wx_release_content_imgid) VALUES
(null, '曹操', 'null', '宁我负人,毋人负我!', '2019',0,1);

INSERT INTO wx_release_content (wx_release_content_id,wx_release_content_name,wx_release_content_title,wx_release_content_details,wx_release_content_data_time,wx_release_content_fabulous,wx_release_content_imgid) VALUES
(null, '关羽', 'null', '玉可碎不可改其质,竹可焚不可毁其节。', '2019',0,2);
INSERT INTO wx_release_content (wx_release_content_id,wx_release_content_name,wx_release_content_title,wx_release_content_details,wx_release_content_data_time,wx_release_content_fabulous,wx_release_content_imgid) VALUES
(null, '孙权', 'null', '曹有张文远，吾有甘兴霸!', '2019',0,3);
INSERT INTO wx_release_content (wx_release_content_id,wx_release_content_name,wx_release_content_title,wx_release_content_details,wx_release_content_data_time,wx_release_content_fabulous,wx_release_content_imgid) VALUES
(null, '司马懿', 'null', '夫将兵者，不战则守，不守则走，不走则逃，不逃则死。','2019/1/1',0,4),
(null, 'tom', 'null', '夫将兵者，不逃则死。', '2012/1/1',0,5),
(null, 'mike', 'null', '夫将兵者，不战则守，不守则走，不走则逃，不逃则死。','1934/1/1',0,6);


#自己朋友圈表信息
    CREATE TABLE wx_myfriendship
    (
        #id自增
    wx_myfriendship_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    #自己空间头背景图
    wx_myfriendship_bgimg VARCHAR
        (64),
    #自己的空间姓名
    wx_myfriendship_name VARCHAR
        (32),
    #自己空间的头像
    wx_myfriendship_img VARCHAR(128),
    #评论
    wx_myfriendship_comment VARCHAR(200),
    #发布内容对应的id
    wx_release_id INT
);
INSERT INTO wx_myfriendship (wx_myfriendship_id,wx_myfriendship_bgimg,wx_myfriendship_name,wx_myfriendship_img,wx_release_id) VALUES
(null, 'http://172.242.19.42:3000/wechat/circlebg.png', 'Caoc', 'http://172.242.19.42:3000/wechat/headerimg.png',1);
INSERT INTO wx_myfriendship (wx_myfriendship_id,wx_myfriendship_bgimg,wx_myfriendship_name,wx_myfriendship_img,wx_release_id) VALUES
(null, 'http://172.242.19.42:3000/wechat/circlebg.png', 'Guany', 'http://172.242.19.42:3000/wechat/headerimg.png',2);

INSERT INTO wx_myfriendship (wx_myfriendship_id,wx_myfriendship_bgimg,wx_myfriendship_name,wx_myfriendship_img,wx_release_id) VALUES
(null, 'http://172.242.19.42:3000/wechat/circlebg.png', 'Sunq', 'http://172.242.19.42:3000/wechat/headerimg.png',3);

INSERT INTO wx_myfriendship (wx_myfriendship_id,wx_myfriendship_bgimg,wx_myfriendship_name,wx_myfriendship_img,wx_release_id) VALUES
(null, 'http://172.242.19.42:3000/wechat/circlebg.png', 'Simy', 'http://172.242.19.42:3000/wechat/headerimg.png',4),
(null, 'http://172.242.19.42:3000/wechat/circlebg.png', 'tom', 'http://172.242.19.42:3000/wechat/headerimg.png',5),
(null, 'http://172.242.19.42:3000/wechat/circlebg.png', 'mike', 'http://172.242.19.42:3000/wechat/headerimg.png',6);
#储存发表图片的表
  CREATE TABLE wx_myimg
    (
        #id自增
    wx_myimg_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    #根据id可查找的编号
    #根据mying_content查找即可，保存多个图片myimg_content id相同即可
    wx_myimg_content INT,
    #大图
    wx_myimg_lg VARCHAR(128),
    #中图
    wx_myimg_md VARCHAR(128),
    #小图
    wx_myimg_sm VARCHAR(128)
);