# 河

## 提醒
考虑到后台环境配置不便于浏览，我们另外制作了这个静态版本。注册/登录、写故事、搜索、修改用户信息功能只能提供样式上的演示。默认主页未登录，因此已登录页面的样式附在下面；其他页面默认登录。

## 导航
1. 主题阐释
  - “河”是一个以故事分享为主题的站点。张雨生有一首歌叫《河》，我们从中汲取了不少灵感。我们希望河的用户所分享的故事，能像河流一样呈现给浏览他们的人。
2. 站点结构
  - bootstrap-3.3.7
    - 包含bootstrap 3.3.7的js, css和内置图标
  - jquery
    - jquery版本为1.10.2
  - src
    - css
      - 将样式表拆分成了几个可复用的组件
    - img
      - user-avatar 用户的头像
      - storyimg 故事中包含的图片
    - js
    - stories
      - 存储静态的故事页面
    - users
      - 存储静态的用户详情页面
3. 样式补充展示
  1. 布局
    这一部分依赖于bootstrap的响应式布局，导航栏、主页面均对小屏幕提供了支持。
    ![导航栏-收缩]("pres/img/navbar-collapsed.png")
  2. 已登录的导航栏样式
    ![导航-已登录]("pres/img/navbar-logged.png")
  2. 已登录的主页样式
    ![主页-已登录]("pres/img/mainpage-logged.png")
4. 与后台的数据交互
  1. 搜索
    导航栏里的搜索部分采用ajax，静态页面只给出了搜索框，没有展示搜索结果。
  2. 用户信息
    采用JSON格式，这里给出一个示例
    ![用户信息]("pres/img/userinfo.png")
  3. 故事信息
    采用JSON格式，也给出一个示例
    ![故事信息]("pres/img/storyinfo.png")
5. 跨浏览器兼容
  1. IE8支持
    ![IE8]("pres/img/ie8.png")
  2. CSS
    在编写CSS文件时，我们也充分考虑了跨浏览器支持的问题。
    比如对Safari的支持：
    ![safari支持]("pres/img/flex-safari.png")
    比如一些CSS3特效对各种内核浏览器的支持：
    ![跨浏览器支持]("pres/img/webkit.png")

## 小组信息
  队名：给我幽鬼，不赢砍手
  队长：刘武洋
  队员：张铭诚 苏忠富 张朝辉