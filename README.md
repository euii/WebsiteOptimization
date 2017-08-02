## 网站性能优化项目

### 项目目录结构

```
.
├── README.md  //说明
├── dist //发布生成目录
│   ├── css
│   │   ├── print.css
│   │   ├── print.min.css
│   │   ├── style.css
│   │   └── style.min.css
│   ├── img
│   │   ├── 2048.png
│   │   ├── buildYourOwn.jpg
│   │   ├── cam_be_like.jpg
│   │   ├── mobilewebdev.jpg
│   │   ├── mwd.jpg
│   │   ├── pizzeria.jpg
│   │   ├── profilepic.jpg
│   │   └── wpo.jpg
│   └── js
│       └── perfmatters.min.js
├── gulpfile.js   //gulp配置文件
├── index.html    //压缩后首页
├── package.json  //npm配置文件
├── project-2048.html
├── project-mobile.html
├── project-webperf.html
├── src  //源文件的目录，未压缩的
│   ├── images
│   │   ├── 2048.png
│   │   ├── buildYourOwn.jpg
│   │   ├── cam_be_like.jpg
│   │   ├── mobilewebdev.jpg
│   │   ├── mwd.jpg
│   │   ├── pizzeria.jpg
│   │   ├── profilepic.jpg
│   │   └── wpo.jpg
│   ├── index.html
│   ├── scripts
│   │   └── perfmatters.js
│   └── styles
│       ├── print.css
│       └── style.css
└── views  //pizza项目
    ├── css //压缩发布CSS目录
    │   ├── bootstrap-grid.css
    │   └── style.css
    ├── images //压缩发布图片目录
    │   ├── pizza.png
    │   └── pizzeria.jpg
    ├── js //压缩发布JS目录
    │   └── main.js
    ├── pizza.html //压缩发布文件
    └── src  //源文件目录
        ├── css //未压缩的CSS
        │   ├── bootstrap-grid.css
        │   └── style.css
        ├── images //未压缩的images
        │   ├── pizza.png
        │   └── pizzeria.jpg
        ├── js //未压缩的js
        │   └── main.js
        └── pizza.html //未压缩的html 
```

### 运行指南

1. clone项目

2. 安装gulp

```bash
npm gulp -g
```

3. 进入工程目录

```bash
npm gulp --save-dev
npm install
```

4. 优化index.html
在工程根目录下
```bash
gulp
```
出现 `Finished 'default' after xx μs` 表示运行完成

5. 优化pizza页面
执行
```bash
gulp pizza
```
出现 `Finished 'pizza' after xxx μs` 表示运行完成


### 优化内容
#### index页面

1. 将 fonts.googleapis.com 引用注释掉
2. 将 perfmatters.js 压缩
3. 将 http://www.google-analytics.com/analytics.js 改为async异步模式
4. 将 style.css压缩后变成内联模式
5. 将 前三个链接的图片，从远程下载到本地并压缩href改为本地链接
6. 将 pizza图片的拷贝一份新的并改变大小并压缩href指向新图片
7. 将所有的css,image,js,html全部压缩

#### 优化pizza网站

1. 修改js/main.js

`453`行，把 `pizzaContainer[i].offsetWidth` 从循环中取出变成 `pizzaContainer[0].offsetWidth` 只读取一次值，然后一直使用。

 `451` 行，将 `document.querySelectorAll(".randomPizzaContainer")` 变成一个变量，一次查询，多次使用。

 `512` 行附近，把 `document.body.scrollTop/1250` 从循环中取出，一次赋值，多次使用。

