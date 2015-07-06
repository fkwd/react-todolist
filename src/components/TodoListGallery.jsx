var TodoListGallery = React.createClass({
    getInitialState: function () {
        return {items: []};
    },
    render: function () {
        var createTodoList = function (props) {
            return (<TodoList {...props} />);
        };
        return (<div className="container">{this.props.items.map(createTodoList)}</div>);
    }
});
