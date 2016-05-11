
项目集成了NodeJs、Express、React、Mysql进行开发

项目所需的包依赖
```doc
{
  "name": "nodejs-demo",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "ejs": "~2.3.3",
    "express": "~4.13.1",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0",
    "mysql": "latest",
    "react-tools": "~0.12.0",
    "react": "~0.12.0"
  }
}
```

###app.js [地址](https://github.com/pgy1/Web-Project-Pratice/blob/nodejs/Nodejs-demo/app.js)

```doc
// 视图地址
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// 设置静态文件地址
app.use(express.static(path.join(__dirname, 'public')));
```
当在本地直接使用cmd运行时取消下列注释，
如果在webstorm里面配置的NodeJs的本地服务器，则注释。
```doc
//app.listen(3000);
```

##Express
```doc
config -框架参数配置
model -框架对象关系映射
views -框架视图
dao -框架的数据操作
routes -框架的路由设置 
public -静态文件
```

config/db.js
配置mysql数据库信息

博客-风流三月1[地址](http://boke.iflsy.com/archives/1147)

