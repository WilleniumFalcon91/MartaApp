import React, { Component } from 'react';
import axios from 'axios';

const MARTA_URL = 'http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1'

const getMartaData = () => {
  return axios.get(MARTA_URL)
    .then( (response) => {
      console.log(response);
      return response.data;
    })
    // fetch('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1', {
    //   method: 'get',
    // }).then(function(response) {
    //   return response.json()
    // }).then(function(jsonData) {
    //    cb(jsonData);
    // }).catch(function(err) {
    // });

}

class MartaDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      martaData: []
    };
  }

  componentWillMount() {
    this.martaDataGrabber = setInterval( () => {
      getMartaData((jsonData) => {
        this.setState({
          martaData: jsonData
        });
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.martaDataGrabber);
  }

  render() {

    let martaOutput = this.state.martaData.map((datum) => {
      return (<div>
        {/* <p>{datum.DESTINATION}</p>
        <p>{datum.DIRECTION}</p>
        <p>{datum.EVENT_TIME}</p>
        <p>{datum.LINE}</p>
        <p>{datum.NEXT_ARR}</p>  */}
        {datum.STATION}
        {/* <p>{datum.TRAIN_ID}</p>
        <p>{datum.WAITING_SECONDS}</p>
        <p>{datum.WAITING_TIME}</p>  */}
      </div>)
    });

    // let martaOutput2 = this.state.martaData.split(" ").forEach((datum) => {
    //        <select name="station">
    //       {/* <option value="testing">One</option> */}
    //             <option value="testing">{datum.STATION}</option>
    //         </select>

    // })

    return (
      <div>
        <p>Marta: It's smarta (but not really)</p>
        <div>
            {martaOutput}
        </div>
      </div>
    )
  }
}

export default MartaDashboard;
