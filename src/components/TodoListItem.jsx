var TodoListItem = React.createClass({
    getInitialState: function () {
        return {checked: false};
    },
    handleClick: function (event) {
        this.setState({checked: !this.state.checked});
    },
    render: function () {
        var attrs = this.state.checked ? {checked: 'checked'} : {},
            className = this.state.checked ? 'checked' : '';
        return (
            <li className="list-group-item">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" {...attrs} onClick={this.handleClick} />
                        <span className={className}>{this.props.label}</span>
                    </label>
                </div>
            </li>
        );
    }
});
