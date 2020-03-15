import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paper from '@material-ui/core/Paper';
import '../src/App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Barchart from '../src/components/BarCharts';
import Donut from  '../src/components/Donut';
import Circle from 'react-circle';



export default class Index extends React.Component {

 

  render() {

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

    return (

      <div className='darkBack' >
        <Paper style={paper}>Online Retail Dashboard</Paper>
        <Paper className='darkBack' style={paper}>Summary </Paper>
        <div className=' container-fluid pr-5 pl-5 section' style={smal}>
          <div className='row'>
            <div className='col-md-3 col-lg-3'>
              <Paper className="darkCard">
                <div className='card-title cardTitleDark' style={main}>
                  Total Revenue
                </div>
                <div className='card-text' style={prize}>
                  <icon style={{ fontSize: '19px' }}>$</icon> 234.54
                </div>
              </Paper>
            </div>
            <div className='col-md-3'>
              <Paper className="darkCard">
                <div className='card-title cardTitleDark' style={main}>
                Revenue from Amazon

                </div>
                <div className='card-text' style={prize}>
                  <icon style={{ fontSize: '19px' }}>$</icon> 75.23
                </div>
              </Paper>
            </div>
            <div className='col-md-3'>
              <Paper className="darkCard">
                <div className='card-title cardTitleDark' style={main}>
                Revenue from Ebay

                </div>
                <div className='card-text' style={prize}>
                  <icon style={{ fontSize: '19px' }}>$</icon> 35.3
                </div>
              </Paper>
            </div>
            <div className='col-md-3'>
              <Paper className="darkCard">
                <div className='card-title cardTitleDark' style={main}>
                Revenue from Etsy

                </div>
                <div className='card-text' style={prize}>
                  <icon style={{ fontSize: '19px' }}>$</icon> 56.2
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
                <div className='card-text' style={prize}>
                  34.6  <icon style={{ fontSize: '19px' }}>Views</icon>
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
                      <Circle animate={true} animationDuration="1s" lineWidth={50} roundedStroke={true} textColor="white" bgColor="#161e29" progressColor="#386CBA" progress={85}></Circle>
                    </div>
                  </div>
                  <div className='col-sm-4 borderLR'>
                    <div className='card-title cardTitleDark' style={main}>
                      Checkout Price
                </div>
                    <div className='card-text' style={prize}>
                      <Circle animate={true} animationDuration="1s" lineWidth={50} roundedStroke={true} textColor="white" bgColor="#161e29" progressColor="#41B7C4" progress={35}></Circle>
                    </div>
                  </div>
                  <div className='col-sm-4'>
                    <div className='card-title cardTitleDark' style={main}>
                      Abandoned Cart Rate
                </div>
                    <div className='card-text' style={prize}>
                      <Circle animate={true} animationDuration="1s" lineWidth={50} roundedStroke={true} textColor="white" bgColor="#161e29" progressColor="#EDF9B0" progress={35}></Circle>
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
              <Paper className="darkCard" style={smal} > <Barchart></Barchart></Paper>

            </div>
            <div className='col-md-6 col-lg-6'>
            <Paper className="darkCard" style={smal} ><Donut></Donut></Paper>
            </div>
          </div>
        </div>
      </div>
    )
  }

}