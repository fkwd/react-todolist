var Header = React.createClass({
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
            <header className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <ToggleNavigation />
                            <a className="navbar-brand" href="#">React TodoList</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <SearchForm />
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#" onClick={this.props.addButtonClickHandler}><span className="glyphicon glyphicon-plus"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
});
