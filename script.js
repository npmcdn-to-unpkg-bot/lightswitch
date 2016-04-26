class Lightswitch extends React.Component {
  render() {
    return (
      <div>
        <button disabled={this.props.on} onClick={this.props.turnOn}>On</button>
        <br/>
        <button disabled={!this.props.on} onClick={this.props.turnOff}>Off</button>
      </div>
    );
  }
}

class Room extends React.Component {
  constructor() {
    super();
    this.state = {
      light: false
    };
  }

  render() {
    return (
        <div style={{
          height: '30em',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: this.state.light ? 'yellow' : 'gray'
        }}>
          <h1>{this.state.light ? 'On' : 'Off'}</h1>
          <Lightswitch on={this.state.light}
                       turnOn={() => this.setState({light: true})} 
                       turnOff={() => this.setState({light: false})}/>
        </div>
    );
  }
}

ReactDOM.render((
    <Room/>
), document.getElementById('container'));
