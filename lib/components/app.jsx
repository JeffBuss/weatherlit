import React from 'react';
import ReactDOM from 'react-dom';
const $ = require ('jquery');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      weather: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ location: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    $.get('http://weatherly-api.herokuapp.com/api/weather/' + this.state.location, (data) => {
      console.log(data);
      this.setState(
        { weather: data,
          location: this.state.location },
          () => {
            localStorage.setItem('location', JSON.stringify(this.state.location));
          }
        );
    });
    debugger;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Location:
          <input type="text" value={this.state.location} onChange={this.handleChange} />
        </label>
        <button
          className='submit-location'
          onClick={ (e) =>{
            this.handleSubmit(e);
          }}
          >
        </button>
        {/* <WeatherCards weather={ this.state.weather }/> */}
      </form>

    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
