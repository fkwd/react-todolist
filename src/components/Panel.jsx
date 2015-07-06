var Panel = React.createClass({
    getInitialState: function () {
        return {expanded: true};
    },
    handleClick: function (event) {
        this.setState({expanded: !this.state.expanded});
    },
    render: function () {
        var childClassName = this.state.expanded ? '' : 'hidden',
            glyphClassName = this.state.expanded ? 'glyphicon glyphicon-resize-small pull-right' : 'glyphicon glyphicon-resize-full pull-right';
        return (
            <div className="col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            {this.props.title}
                            <span className={glyphClassName} onClick={this.handleClick}></span>
                        </h3>
                    </div>
                    <div className={childClassName}>{this.props.children}</div>
                </div>
            </div>
        )
    }
});
