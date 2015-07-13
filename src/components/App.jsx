var App = React.createClass({
    getInitialState: function () {
        return {items: []};
    },
    handleAddButtonClick: function (e) {
        e.preventDefault();
        this.setState({items: this.state.items.concat({
            items: [],
            title: 'Todolist #' + (this.state.items.length + 1)
        })});
    },
    render: function () {
        return (
            <div>
                <Header addButtonClickHandler={this.handleAddButtonClick} />
                <TodoListGallery items={this.state.items} />
            </div>
        );
    }
});
