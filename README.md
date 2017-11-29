# River
## TODO
- 模态框 调用文本编辑器
- 用户个人信息修改 所见即所得
- 主页背景动画
- 生成测试用户


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
