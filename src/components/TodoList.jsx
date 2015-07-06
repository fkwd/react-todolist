var TodoList = React.createClass({
    getInitialState: function () {
        return {items: [], text: ''};
    },
    handleSubmit: function (e) {
        e.preventDefault();
        this.setState({items: this.state.items.concat([this.state.text]), text: ''});
    },
    onChange: function (e) {
        this.setState({text: e.target.value});
    },
    render: function () {
        var createTodoListItem = function (label) {
            return (<TodoListItem label={label} />);
        };
        return (
            <Panel title={this.props.title}>
                <ul className="list-group">
                    {this.state.items.map(createTodoListItem)}
                </ul>
                <div className="panel-footer">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Input text here..." onChange={this.onChange} value={this.state.text} />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="submit">Add!</button>
                            </span>
                        </div>
                    </form>
                </div>
            </Panel>
        );
    }
});
