/**
 * Created by pengguangyu on 2016/5/10.
 */
var article;
$.ajax({
    url:"/users/queryAll",
    type:"get",
    dataType:"json",
    async:false,
    success:function(data){
        article = data[0];
    }
});
//alert(article);

var myElement = React.createElement('h1', null, '第一章');
ReactDOM.render(
    myElement,
    document.getElementById('nav')
);

//var article = "这天很蓝";
var MyStory = React.createClass({
    render:function(){
        return (
            <article>{this.props.article.id}</article>
        );
    }
});
ReactDOM.render(
    <MyStory article={article} />,
    document.getElementById('container')
);

var LikeButton = React.createClass({
    getInitialState: function() {
        return {liked: false};
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    render: function() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick}>
                <i className={this.props.src}></i>
                You {text} this.
            </p>
        );
    }
});

var src = "icon-thumbs-up";

React.render(
    <LikeButton src={src} />,
    document.getElementById('likeButton')
);
