# home-work

## 启动服务
### 进入本地模拟服务文件夹
```
cd mock-server
```
### 安装模拟服务依赖
```
yarn
```
### 启动模拟服务
```
yarn json
```

## 启动项目
### 切换到home-work根目录安装项目依赖
```
yarn
```

### 启动开发环境
```
yarn dev
```

### 编译生产包
```
yarn dist
```

### 项目文件说明

``` bash
home-work/
    ├── mock-server             # 本地模拟数据服务
    ├── src/                    # 源码根目录
    │   ├── main.js             # 入口文件
    │   ├── App.vue             # vue根组件入口
    │   ├── assets/             # 静态资源文件夹
    │   ├── component/          # 页面
    │   │    ├── Common         # 公共组件、util.js
    │   │    ├── Main           # 页面正文主组件
    │   │    ├── RoutrGages     # 可路由页面
    │   │    ├── Section        # header、footer
    │   ├── mock/               # 数据接口
    │   ├── router/             # 路由
    │   ├── store               # vuex状态管理
    │   ├── style/              # 响应式布局css、公共样式
    ├── public/                 # 公共资源文件夹
    ├── .gitignore              # git版本控制时忽略的文件和目录
    ├── package.json            # 配置文件
    ├── README.md               # 项目说明入口
```
