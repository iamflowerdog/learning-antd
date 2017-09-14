## learning antd

* 9.13
* button 

#### 项目启动
* 下载项目后 `npm install` 安装依赖
* 启动项目 `npm start` 项目启动，默认地址 `localhost:9000`

#### 注意事项

> React 在组件里面绑定事件函数的时候，记得用this

```
<Radio.Group onClick={this.handleClick}>
    <Radio.Button value="large">large</Radio.Button>
    <Radio.Button value="default">default</Radio.Button>
    <Radio.Button value="small">small</Radio.Button>
</Radio.Group>

```

#### React 中this的指向问题

* `React.createClass` 中，会自动绑定
```
在原来 React.createClass 中， handleClick() 在onClick事件触发的时候，
会自动绑定到LikeButton实例上，这时候该函数的this的上下文就是该实例。
```

* ES6 中类的写法中 facebook 取消了自动绑定

```
不过在ES6的class的写法中，Facebook取消了自动绑定，实例化LikeButton后，handleClick()的上下文是div的支撑实例（ backing instance ），
而 handleClick() 原本要绑定的上下文是LikeButton的实例

```

* 解决办法：

```

// '=' 前面的 this.handleClick 相当于修改 handleClick这个变量的值
// '=' 后面的 this.handleClick 是下面的函数对象 
// 语句执行完毕，相当于 handleClick 被指向一个新的函数对象，这个函数对象的this始终指向组件实例
constructor(props) {
    super(props);
    console.log(this);
    this.state = {
        size: 'default'
    };
    this.handleClick = this.handleClick.bind(this);
}

handleClick(event){
    console.log(this);
    console.log(event.target.value);
    this.setState({
        size: event.target.value
    })
};


```

