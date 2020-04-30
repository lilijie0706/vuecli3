#这是我第一次学习VUE，是第一次做项目,第一次使用git和Github存储程序
##希望通过这个项目，能够用心去感受，如何实现一些功能
###希望能够在程序员的道路上继续走下去
####开源协议之间有何异同
  https://www.zhihu.com/question/19568896


 ###将已经存在的项目，进行修改后，如何提交到服务器
1 git add .
2 git commit -m "提交信息"
3 git push

##制作首页App组件
1、完成 Header 区域，使用的是 Mint-UI 中的Header 组件
2、制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
+制作 购物车 小图标操作如下：扩展图标的 css 样式拷贝到项目中，扩展字体 ttf 文件到项目中 
+为购物车小图标添加如下样式：<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
3、要在 中间区域放置一个 router-view 来展示路由匹配到的组件

##改造 tabbar 为 router-link 

##设置路由高亮

##点击 tabbar 中的路由链接，展示对应的路由组件


##加载首页轮播图数据
1、获取数据，如何获取呢，使用vue-resource
2、使用 vue-resource 的 this.$http.get 获取数据
3、获取到的数据，要保存到 data 身上
4、使用 v-for 循环渲染 每个 item 项

##改造 九宫格 区域的样式

##改造 新闻资讯 路由链接

##新闻资讯 页面 制作

1、绘制界面，使用 mui 中的 media-list.html
2、使用 vue-resource 获取数据
3、引入数据 渲染到界面

##实现新闻资讯列表点击 跳转到 新闻详情
1、把列表中的每一项改造为 router-link,同时，在跳转的时候应该提供唯一的Id标识符
2、创建新闻详情组件页面 NewsInfo.vue
3、在路由模块中，将 新闻详情的 路由地址 和组件页面 对应起来

##实现 新闻详情 的 页面布局 和 数据渲染

##单独封装一个 coment.vue 评论子组件
1、先创建一个单独的 comment.vue 组件模板
2、在需要使用 comment 组件 的页面中，先手动导入 comment 组件
+ import comment from './comment.vue'
3、在父组件中，使用 'component' 属性，将刚才导入 component 组件，注册为自己的 子组件
4、将注册子组件时候的，注册名称，以 标签形式 ，在页面中 应用即可

##获取所有的评论数据显示到页面中
1getComments
##实现点击加载更多评论的功能
1、为加载更多按钮，绑定点击事件，在事件中，请求 下一页数据
2、点击加载更多 ，让pageIndex++,然后重新调用 this.getComments() 方法重新获取最新一页的数据
3、为了防止 新数据 覆盖老数据的情况，我们在 点击加载更多的时候 ，每当获取到新数据，应该让 老数据调用 数组的 concat 方法，拼接上新数组

##发表评论
1、把文本框做双向数据绑定
2、为发表按钮绑定一个事件
3、校验评论内容是否为空，如果为空，则Toast 提示用户，评论内容不能为空
4、通过vue-resource 发送一个请求，把评论内容提交给 服务器
5、当发表评论ok后，重新刷新列表，以查看  最新的评论
+如果调用 getComments 方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
+换一种思路，当评论成功后，在客户端，手动拼接出一个 最新的评论对象，然后 调用 数组的 unshift 方法，把最新的评论，追加到data 中 comments 的开头；这样就能完美实现

##改造图片分享 按钮为 路由的链接组件并显示对应的组件页面

##绘制 图片列表 组件页面结构并美化样式
1、顶部的滑动条制作
2、底部图片列表
### 制作顶部滑动条的坑们：
1、需要借助于 MUI 中的 tab-top-webview-main.html
2、需要把 slider 区域的 mui-fullscreen 类去掉
3、滑动条无法正常出发滑动，通过官方文档，发现这是JS组件，需要被初始化一下：
+导入 mui.js
+调用官方提供的 方法 去初始化：
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
....
4、我们在初始化滑动条 的时候，导入 的mui.js ,但是控制台报错，推测：
webpack 打包好的 bundle.js 中，默认是启用严格模式的，所以，这两者冲突了
+解决方案
改动webpack 严格模式禁用 remove "use strict directive"
babel-plugin-transform-remove-strict-mode
1--cnpm i babel-plugin-transform-remove-strict-mode -D
2--
.babel{
  "plugins":["transform-remove-strict-mode"]
}
3、获取所有分类，并渲染 分类列表；

### 制作图片列表区域
1、图片列表需要使用懒加载 技术，我们可以使用 Mint-UI 通过提供的现场的 组件 'lazy-load'
2、根据 'lazy-load' 的使用文档，尝试使用
3、渲染图片列表数据

###实现了 图片列表的 懒加载改造和 样式美化
1、在改造 li 成 router-link 的时候，需要使用 tag="li" 指定要渲染的元素


###实现 详情页面的布局和美化，同时获取数据渲染页面

div.info
h1.title
div.body
h3回车
maxhe---最大高度
item.user.nickname
item.content
item.user.avatarUrl
item.user.userId
##实现图片详情中 缩略图的功能
1、使用 插件 vue-preview 这个缩略图插件
2、获取到所有的图片列表，然后使用 v-for 指令渲染数据
3、注意：img 标签上的class 不能去掉
4、注意：每个图片必须有W和H

##  绘制 商品列表 页面基本结构并美化

=======
## 尝试在手机上 去进行项目的预览和测试
1、要保证自己的手机可以正常运行；
2、要保证 手机 和开发项目的电脑 处于同一个 WIFI 环境中，也就是说 手机 可以 访问到 电脑的IP
3、打开自己的 项目中 package.json 文件，在 dev 脚本中，添加一个 --host 指令，把当前 电脑的 WIFI ip地址，设置为 --host 的指令值：
+如何查看自己电脑所处的 WIFI ip地址呢？cmd 中运行'ipconfig',查看无线网 的 ip 地址
c2930e4... 坚持到最后一集,能否推送到远端,haishibuxing,hainenruhe 















