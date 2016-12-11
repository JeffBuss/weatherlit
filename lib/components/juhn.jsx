// const React = require('react');
// const ReactDOM = require('react-dom');
// var $ = require('jquery');
//
//
// class Main extends React.Component{
//  constructor(){
//    super()
//    this.state = {
//      location: '',
//      weather: null,
//    }
//  }
//
//  locationAccepted(e){
//    $.get(this.props.source + '/' + this.state.location, (results)=>{
//      this.setState({weather:results}, localStorage.setItem('location',this.state.location))
//    })
//    this.setState({location:''})
//  }
//
//  render(){
//    return(
//      <div>
//        <input placeholder='location'
//               value = {this.state.location}
//               onChange = { (event) => {this.setState({location: event.target.value})} }
//        />
//        <input type ='submit'
//               onClick = { (e) => this.locationAccepted(e) }
//        />
//        <input type ='submit' />
//      <WeatherCards weather={ this.state.weather } />
//      </div>
//    )
//  }
// }
//
// const WeatherCards = (props) => {
//  let { weather } = props
//  if(!weather){
//    return(
//      <div>please enter a city</div>
//  )} else {
//  return(
//    <div className="WeatherCard">
//      { weather.map((card) => <div key={card.date}>
//        <Weather {...card}/>
//        <li>high: {card.temp.high}</li>
//        <li>low: {card.temp.low}</li>
//      </div>
//      )}
//    </div>
//  )}
// }
//
// const Weather = (props) => {
//  let {location, date, temp} = props
//  return(
//    <div>
//      <article>
//        {location} {date}
//      </article>
//    </div>
//  )
// }
//
//
// //denver, san-diego, san-francisco, castle-rock
// ReactDOM.render(<Main source= 'https://weatherly-api.herokuapp.com/api/weather' />, document.getElementById('application'))
