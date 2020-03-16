import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paper from '@material-ui/core/Paper';
import '../src/App.css';
import Barchart from '../src/components/BarCharts';
import Donut from  '../src/components/Donut';
import Circle from 'react-circle';
import { Navbar } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import axios from 'axios';



export default class Index extends React.Component {

 constructor(props) {
   super(props);
   
  

 }
 state = {
  apiResult: []
}
componentDidMount(){
  axios.get(` http://127.0.0.1:4010/data`)
    .then(res => {
      const apiResult = res.data;
      this.setState({ apiResult });
      // console.log(this.state.apiResult);
    })
}
 handleRefresh=()=> {
  axios.get(` http://127.0.0.1:4010/data`)
    .then(res => {
      const apiResult = res.data;
      this.setState({ apiResult });
      // console.log(this.state.apiResult);
    })
}



  render() {

    const rightText={
      textAlign:'right',
    }
    const paper = {
      padding: '1em',
      textAlign: 'left',
      fontStyle: 'bold',
      fontWeight: '700',
      fontSize: 'larger',
    };

    const smal = {
      paddingBottom: '1em',
      paddingTop: '1em',
    }
    const prize = {
      padding: "10px",
      fontSize: '40px',
    }

    const main = {
      padding: "1em",
      fontSize: "15px",
    }
    const but={
      background:'white',
    }
    const result=this.state.apiResult;
    var totalSum=parseInt(result.amazon)+parseInt(result.flip)+parseInt(result.ebay);



    return (

      <div className='darkBack' >
        <Paper style={paper}><h5>Online Retail Dashboard</h5></Paper>
        
        <Navbar style={smal} className='header'>
  <Navbar.Brand href="#home " className='darkBack'>Summary</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end darkBack">
    <Navbar.Text className='darkBack' style={{marginRight:'5px'}}>
      Click to Refresh  
    </Navbar.Text>
    <IconButton aria-label="Change the Values" style={but} onClick={this.handleRefresh} >
  <RefreshOutlinedIcon></RefreshOutlinedIcon>
</IconButton> 
  </Navbar.Collapse>
</Navbar>
        <div className=' container-fluid pr-5 pl-5 section' style={smal}>
          <div className='row'>
            <div className='col-md-3 col-lg-3'>
              <Paper className="darkCard">
                <div className='card-title cardTitleDark' style={main}>
                <p className='compPosition'>Total Revenue  </p><p style={rightText} > <i class="fas fa-money-check-alt"></i></p>
                </div>
                <div className='card-text' style={prize}>
                  <icon style={{ fontSize: '19px' }}>$</icon> {totalSum}K
                </div>
              </Paper>
            </div>
            <div className='col-md-3'>
              <Paper className="darkCard">
                <div className='card-title cardTitleDark' style={main}>
                <p className='compPosition'>Revenue from Amazon  </p><p style={rightText} > <i class="fab fa-amazon"></i></p>

                </div>
                <div className='card-text' style={prize}>
                  <icon style={{ fontSize: '19px' }}>$</icon> {result.amazon}
                </div>
              </Paper>
            </div>
            <div className='col-md-3'>
              <Paper className="darkCard">
                <div className='card-title cardTitleDark' style={main}>
                <p className='compPosition'>Revenue from Ebay  </p><p style={rightText} > <i class="fab fa-ebay"></i></p>

                </div>
                <div className='card-text' style={prize}>
                  <icon style={{ fontSize: '19px' }}>$</icon> {result.ebay}
                </div>
              </Paper>
            </div>
            <div className='col-md-3'>
              <Paper className="darkCard">
                <div className='card-title cardTitleDark' style={main}>
                <p className='compPosition'>Revenue from Flikart  </p><p style={rightText} > <i class="fas fa-shopping-cart"></i></p>

                </div>
                <div className='card-text' style={prize}>
                  <icon style={{ fontSize: '19px' }}>$</icon> {result.flip}
                </div>
              </Paper>
            </div>
          </div>

        </div>

        <div className=' container-fluid pr-5 pl-5 section' style={smal}>

          <div className='row'>

            <div className='col-md-3 col-lg-3 '>
              <Paper className="darkCard fullHeight">
                <div className='card-title cardTitleDark' style={main}>
                Product Views
                </div>
                <br></br>
                <br></br>
                <div className='card-text' style={prize}>
                  {result.compView}<icon style={{ fontSize: '19px' }}>Views</icon>
                </div>
              </Paper>
            </div>
            <div className=' col-md-9 col-lg-9'>

              <Paper className='darkCard' >
                <div className='row  text-center' style={smal}>
                  <div className='col-sm-4'>
                    <div className='card-title cardTitleDark' style={main}>
                      Purchase rate
                </div>
                    <div className='card-text' style={prize}>
                      <Circle animate={true} animationDuration="1s" lineWidth={50} roundedStroke={true} textColor="white" bgColor="#161e29" progressColor="#386CBA" progress={result.purRate}></Circle>
                    </div>
                  </div>
                  <div className='col-sm-4 borderLR'>
                    <div className='card-title cardTitleDark' style={main}>
                      Checkout Price
                </div>
                    <div className='card-text' style={prize}>
                      <Circle animate={true} animationDuration="1s" lineWidth={50} roundedStroke={true} textColor="white" bgColor="#161e29" progressColor="#41B7C4" progress={result.checRate}></Circle>
                    </div>
                  </div>
                  <div className='col-sm-4'>
                    <div className='card-title cardTitleDark' style={main}>
                      Abandoned Cart Rate
                </div>
                    <div className='card-text' style={prize}>
                      <Circle animate={true} animationDuration="1s" lineWidth={50} roundedStroke={true} textColor="white" bgColor="#161e29" progressColor="#EDF9B0" progress={result.aRate}></Circle>
                    </div>
                  </div>
                </div>
              </Paper>

            </div>


          </div>
        </div>
        <div className=' container-fluid pr-5 pl-5 ' style={smal}>
          <div className='row'>
            <div className=' col-md-6 col-lg-6'>
              <Paper className="darkCard" style={smal} > <Barchart amazon={result.comp1} flip={result.comp2} ebay={result.comp3} ></Barchart></Paper>

            </div>
            <div className='col-md-6 col-lg-6'>
            <Paper className="darkCard" style={smal} ><Donut amazon={result.comp1} flip={result.comp2} ebay={result.comp3}  ></Donut></Paper>
            </div>
          </div>
        </div>
      </div>
    )
  }

}