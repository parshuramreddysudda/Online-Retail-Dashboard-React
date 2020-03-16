import React, {useState, useEffect} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default class amcharts extends React.Component {

      
constructor(props) {
    super(props);
    this.state={ama:this.props.amazon}
    console.log(this.props.amazon);
     this.state={newAmazon:'435',
    previousState:"non"};
}
 
    componentDidMount () {

     this.Runamcharts();
     
    }

   componentDidUpdate(previousState) {
    if (previousState !== this.props.amazon) {
      this.Runamcharts();
    }
  }



    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
        
        this.previousState=this.state.props.amazon
    }
    Runamcharts(){

        am4core.useTheme(am4themes_animated);
       

        let chart = am4core.create("donut", am4charts.PieChart);

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "stocks";
        pieSeries.dataFields.category = "company";

        // Let's cut a hole in our Pie chart the size of 30% the radius
        chart.innerRadius = am4core.percent(30);
        pieSeries.labels.template.fill = am4core.color("white");

        // Put a thick white border around each Slice
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        // pieSeries.slices.template.propertyFields.fill = "color"; // Use this for Specifying Colors for Donut 

        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.slices.template
            // change the cursor on hover to make it apparent the object can be interacted with
            .cursorOverStyle = [
                {
                    "property": "cursor",
                    "value": "pointer"
                }
            ];

        pieSeries.alignLabels = false;
        pieSeries.labels.template.bent = true;
        pieSeries.labels.template.radius = -10;
        pieSeries.labels.template.padding(0, 0, 0, 0);

        pieSeries.ticks.template.disabled = true;

        // Create a base filter effect (as if it's not there) for the hover to return to
        let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
        shadow.opacity = 0;

        // Create hover state
        let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

        // Slightly shift the shadow and make it more prominent on hover
        let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
        hoverShadow.opacity = 0.7;
        hoverShadow.blur = 5;

        // Add a legend
        chart.legend = new am4charts.Legend();

        // Apply this Below line of Code for Changing colors for Pie chart Description
        chart.legend.labels.template.fill = am4core.color("#fff");
        chart.legend.valueLabels.template.fill = am4core.color("#fff"); 

        chart.data = [{
            "company": "Amazon",
            "stocks": this.props.amazon,
            "color": am4core.color("red"),
        }, {
            "company": "Ebay",
            "color": am4core.color("green"),
            "stocks": this.props.ebay,
        }, {
            "company": "Flipkart",
            "color": am4core.color("blue"),
            "stocks": this.props.flip,
        }];

        this.chart = chart;
    }
   

    render() {

        // this.setState({ama:this.props.amazon});
        return (
            
            <div>
                { console.log(this.props.amazon)}
                <h5 className='text-center' style={{color:'rgb(128, 145, 171)',paddingTop:'0.8em'}}>Order Trends  By Region</h5>
                <div id='donut' style={{ width: "auto", height: '500px' }}></div>



            </div>
        )


    }




}
