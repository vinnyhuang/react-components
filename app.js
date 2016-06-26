// TODO
var Cheese = () => (<li>Cheese</li>);
var Yogurt = () => (<li>Yogurt</li>);

var GroceryList = (props) => (
    <ul>
        {props.groceryItems.map(grocery =>
            (<GroceryListItem grocery={grocery} />)
        )}
    </ul>
);

var App = () => (
    <div>
        <GroceryList groceryItems={['Cheese', 'Yogurt', 'Milk']}/>
    </div>
);

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        };
    }

    onListItemHover() {
        //console.log(this.state.done);
        this.setState({
            done: !this.state.done
        });
    }

    render() {
        var style = {
            fontWeight: this.state.done ? 'bold' : 'normal'
        };

        return (
            <li style={style} onMouseOver={this.onListItemHover.bind(this)} onMouseOut={this.onListItemHover.bind(this)}>{this.props.grocery}</li>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<GroceryList groceryItems={['Cheese', 'Yogurt', 'Milk']}/>, document.getElementById('app'));