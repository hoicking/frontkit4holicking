performance optimization

页面层面
1.优化dom：删除不必要的代码，利用gzip压缩文件
2.优化cssom: cssom 和dom通常是并行构建的，css加载不会阻塞dom的解析，
但是渲染树需要dom 和 cssom都构建完成
3.优化javascript：script标签会阻塞dom的解析，如果脚本不会修改dom 或者cssom时，可以使用async

4.rendertree 已经构建完成并进行渲染：这个时候就要避免重绘和回流，
重绘： 元素样式改变不影响文档流
回流： 尺寸结构发生改变 clientWidth、clientHeight、clientTop、clientLeftoffsetWidth、offsetHeight、offsetTop、


5.图片懒加载 将图片的src默认设置为一张默认图片  当滚动到可视区域时，进行展示


5.减少http请求个数


5.使用cdn使资源下载速度变快
6.使用cache control，让长时间不需要变动的资源进行缓存
7.减少cookie大小：服务器返回的cookie，之后客户端请求头上都要带上，减小cookie的大小能够减少带宽的使用
cookie 失效时间可以设置（1）没设置默认关闭浏览器就失效 （2）设置的话 根据expires设置的时间






代码层面

1.