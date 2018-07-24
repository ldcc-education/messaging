# messaging
롯데정보통신 86 메시징 서버 교육



## 텍스트 메시지 친구톡

```json
{
	"msg_id" : `{여기에 본인 핸드폰 번호 입력, 중괄호 제거}`,
	"dest_phone" : {여기에 본인 핸드폰 번호 입력, 중괄호 제거},
	"send_phone" : "01045843552",
	"sender_key" : "d6b73318d4927aa80df1022e07fecf06c55b44bf",
	"msg_body" :{여기에 보낼 내용 입력, 중괄호 제거},
	"ad_flag" : "N"
}
```



## 이미지, 버튼까지 발송하는 친구톡

```json
{
	"msg_id" : `{여기에 본인 핸드폰 번호 입력, 중괄호 제거}`,
	"dest_phone" : {여기에 본인 핸드폰 번호 입력, 중괄호 제거},
	"send_phone" : "01045843552",
	"sender_key" : "d6b73318d4927aa80df1022e07fecf06c55b44bf",
	"msg_body" :{여기에 보낼 내용 입력, 중괄호 제거},
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
```
