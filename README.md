# River
## TODO
- 搜索框
- 注册登陆
- story-img需要动态调节大小，使之填满col或者与story同大小
- 利用Ajax实现无缝加载新故事
- 个人页面
- **后台api**


## Navbar
导航栏可以直接复用，主按钮颜色与导航栏取同一个蓝色

登陆前和登陆后的导航栏样式待做

## CSS
自定义类有

    .river-storycontainer {
      background-color: #ffffff;
      box-shadow: 0 1px 3px rgba(0,0,0,.1);
      margin-top: 20px;
      padding: 20px;
      text-align: left;
    }

    .river-story {
      margin-top: 1rem;
    }

    .river-story-time, .river-story-place {
      font-size: 12px;
      color: #A3a3a3;
    }

    .river-img {
      position: relative;
      width: 100%;
      height: auto;
      margin-top: 2rem;
    }

##JS

包含如下模块：
1. 导航栏搜索框
2. 折叠动画
3. 滚动监听的导航特效
