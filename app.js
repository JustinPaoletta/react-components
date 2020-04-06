// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  mouseOn() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    }

    return (
    <li style={style} onMouseEnter={this.mouseOn.bind(this)} onMouseLeave={this.mouseOn.bind(this)}> {this.props.item} </li>
    )
  }

}

var GroceryList = (props) => (

  <ul>
    <h2>Groceries</h2>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>

);



ReactDOM.render(<GroceryList items={['Carrots', 'Oranges']}/>, document.getElementById('app'));