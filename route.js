const express = require('express');
const router = express.Router();
const util = require('util');
const moment = require('moment');
const uuid = require('uuid/v4');
const axios = require('axios');

const authorizationGenerator = (key, secret) => 'Basic ' + new Buffer(`${key}:${secret}`).toString('base64');
axios.defaults.headers.common['Authorization'] = authorizationGenerator('key', 'secret');

const ftMessage = {
	"msg_id" : `ldcc_86_ft_${moment().format('YYYYMMDDhhmmssmmm')}`,
	"dest_phone" : null,
	"send_phone" : "01045843552",
	"sender_key" : "d6b73318d4927aa80df1022e07fecf06c55b44bf",
	"msg_body" : null,
	"ad_flag" : "N",
	"button" :[
	      {
	        "name":"앱 링크 버튼",
	        "type":"AL",
	        "scheme_android":"daumapps://open",
	        "scheme_ios":"daumapps://open"
	      },
	      {
	      	"name":"웹 링크 버튼",
	      	"type":"WL",
	      	"url_pc":"http://bizmessage.kakao.com/",
	      	"scheme_android":"daumapps://open",
	      	"url_mobile":"http://bizmessage.kakao.com/"
	      }
	 ],
	 "image":{
	   "img_url":"http://mud-kage.kakao.com/dn/ihFWM/btqgIZSprL7/wvKQlhVKgcGh4Mw8ThNW81/img_l.jpg",
	   "img_link":"http://www.lotte.com"
	 }
}

router.use((req, res, next) => {
  console.log(util.format('[Logger]::[Route]::[Access URL %s]::[Access Ip %s]::[Access Time %s]',
                              req.originalUrl,
                              req.ip,
                              moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss')
                          ));
  next();
});

router.post('/send/ft', (req, res) => {

  const { dest_phone, msg_body } = req.body;

  ftMessage.dest_phone = dest_phone;
  ftMessage.msg_body = msg_body;

	axios.post('http://210.93.181.229:9090/v1/send/kakao-friend', ftMessage)
	.then(result => res.json(result.data))
	.catch(e => res.json(e.response.data));
});

module.exports = router;
