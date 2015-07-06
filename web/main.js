var App = React.createClass({displayName: "App",
    getInitialState: function () {
        return {items: []};
    },
    handleAddButtonClick: function (e) {
        e.preventDefault();
        this.setState({items: this.state.items.concat({items: [], title: 'New todolist'})});
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Header, {addButtonClickHandler: this.handleAddButtonClick}), 
                React.createElement(TodoListGallery, {items: this.state.items})
            )
        );
    }
});

var Header = React.createClass({displayName: "Header",
    getDefaultProps: function () {
        return {
            addButtonClickHandler: function (e) {
                e.stopPropagation();
            }
        };
    },
    onLogoLinkClick: function (e) {
        e.preventDefault();
    },
    render: function () {
        return (
            React.createElement("header", {className: "container"}, 
                React.createElement("nav", {className: "navbar navbar-default"}, 
                    React.createElement("div", {className: "container-fluid"}, 
                        React.createElement("div", {className: "navbar-header"}, 
                            React.createElement(ToggleNavigation, null), 
                            React.createElement("a", {className: "navbar-brand", href: "#"}, "React TodoList")
                        ), 
                        React.createElement("div", {className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1"}, 
                            React.createElement(SearchForm, null), 
                            React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
                                React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.props.addButtonClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-plus"})))
                            )
                        )
                    )
                )
            )
        );
    }
});

var Panel = React.createClass({displayName: "Panel",
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
            React.createElement("div", {className: "col-md-4"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, 
                        React.createElement("h3", {className: "panel-title"}, 
                            this.props.title, 
                            React.createElement("span", {className: glyphClassName, onClick: this.handleClick})
                        )
                    ), 
                    React.createElement("div", {className: childClassName}, this.props.children)
                )
            )
        )
    }
});

var SearchForm = React.createClass({displayName: "SearchForm",
    render: function () {
        return (
            React.createElement("form", {className: "navbar-form navbar-left", role: "search"}, 
                React.createElement("div", {className: "form-group"}, 
                    React.createElement("input", {type: "text", className: "form-control", placeholder: "Search", autofocus: true})
                )
            )
        );
    }
});

var TodoList = React.createClass({displayName: "TodoList",
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
            return (React.createElement(TodoListItem, {label: label}));
        };
        return (
            React.createElement(Panel, {title: this.props.title}, 
                React.createElement("ul", {className: "list-group"}, 
                    this.state.items.map(createTodoListItem)
                ), 
                React.createElement("div", {className: "panel-footer"}, 
                    React.createElement("form", {onSubmit: this.handleSubmit}, 
                        React.createElement("div", {className: "input-group"}, 
                            React.createElement("input", {type: "text", className: "form-control", placeholder: "Input text here...", onChange: this.onChange, value: this.state.text}), 
                            React.createElement("span", {className: "input-group-btn"}, 
                                React.createElement("button", {className: "btn btn-default", type: "submit"}, "Add!")
                            )
                        )
                    )
                )
            )
        );
    }
});

var TodoListGallery = React.createClass({displayName: "TodoListGallery",
    getInitialState: function () {
        return {items: []};
    },
    render: function () {
        var createTodoList = function (props) {
            return (React.createElement(TodoList, React.__spread({},  props)));
        };
        return (React.createElement("div", {className: "container"}, this.props.items.map(createTodoList)));
    }
});

var TodoListItem = React.createClass({displayName: "TodoListItem",
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
            React.createElement("li", {className: "list-group-item"}, 
                React.createElement("div", {className: "checkbox"}, 
                    React.createElement("label", null, 
                        React.createElement("input", React.__spread({type: "checkbox"},  attrs, {onClick: this.handleClick})), 
                        React.createElement("span", {className: className}, this.props.label)
                    )
                )
            )
        );
    }
});

var ToggleNavigation = React.createClass({displayName: "ToggleNavigation",
    render: function () {
        return (
            React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false"}, 
                React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"})
            )
        );
    }
});

React.render(React.createElement(App, null), document.getElementById('todolist-app'));
