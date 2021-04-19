1.iframe

if(window.top != window.self){
    window.top.location.href = 'http://www.baidu.com'  
}

判断当前窗口是否为顶层窗口， 如果不是就是被别的框架所嵌套，直接返回新页面

sandbox


2.open winodw
opener要设置为null

3.csrf攻击： 用户已经登陆状态，拥有登陆的cookie 然后诱导用户点击进入其他页面会携带cookie，然后再向原网站请求
数据修改使用post请求 不用get
服务端进行同源监测 对referer 来源进行过滤（禁止外域）
请求地址添加token
添加验证码进行验证

4.xss攻击
nodejs 使用helmet
避免使用dangerous set inner html

转义用户的输入内容 比如 : ' < >等等
链接跳转 要检查内容， 禁止javascript：开头和其他非法scheme

输入过滤并非完全可靠 所以就要在javascript执行的时候进行阻止


5.点击劫持

 X-FRAME-OPTIONS 
 nginx 配置 add_header X-Frame-Options sameorigin always

 6.cdn劫持

 cdn webpack-subresource-integrity
 <script integrity> 这个属性检验hash码
