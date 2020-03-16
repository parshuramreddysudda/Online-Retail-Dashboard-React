import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";




export default class amcharts extends React.Component {

 
    state = {
        amazon: this.props.amazon
      }
    
    componentDidMount=()=> {

        am4core.useTheme(am4themes_dataviz);
        am4core.useTheme(am4themes_animated);
        

        let chart = am4core.create("barChart", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.paddingRight = 40;

        chart.data = [{
            "name": "Amazon",
            "steps": parseInt(this.state.amazon),
            "href": "https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/amazon.png"
        }, {
            "name": "Ebay",
            "steps": parseInt(this.props.ebay),
            "href": "https://lh3.googleusercontent.com/proxy/mIrIZgLqebK_MzC4GAJ9wkiKXMOFVAdbOq0QVWKfHJ6HDAOvy5OYaaCLEfqK3h-SWQlQ-DvWlGEE7bTnpcJhOHHVFd179_tgkPFQH_Ivz3JYrhKxMlXxuhhFDkOaGRYSdQcq56I"
        }, {
            "name": "Flipkart",
            "steps": parseInt(this.props.flip),
            "href": "https://cdn.icon-icons.com/icons2/729/PNG/512/flipkart_icon-icons.com_62718.png"
        }];

        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "name";
        categoryAxis.stroke=am4core.color("#fff");  //Label color of Company
        categoryAxis.renderer.grid.template.strokeOpacity = 0;
        categoryAxis.renderer.minGridDistance = 10;
        categoryAxis.renderer.labels.template.dx = -40;
        categoryAxis.renderer.minWidth = 120;
        categoryAxis.renderer.tooltip.dx = -40;

        let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inside = true;
        valueAxis.renderer.labels.template.fillOpacity = 0.3;
        valueAxis.renderer.grid.template.strokeOpacity = 0;
        valueAxis.stroke=am4core.color("white"); 
        valueAxis.min = 0;
        valueAxis.cursorTooltipEnabled = false;
        valueAxis.renderer.baseGrid.strokeOpacity = 0;
        valueAxis.renderer.labels.template.dy = 20;

        let series = chart.series.push(new am4charts.ColumnSeries);
        series.dataFields.valueX = "steps";
       
        series.dataFields.categoryY = "name";
        series.tooltipText = "{valueX.value}";
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.dy = - 30;
        series.columnsContainer.zIndex = 100;

        let columnTemplate = series.columns.template;
        columnTemplate.height = am4core.percent(50);
        columnTemplate.maxHeight = 50;
        columnTemplate.column.cornerRadius(60, 10, 60, 10);
        columnTemplate.strokeOpacity = 0;

        series.heatRules.push({ target: columnTemplate, property: "fill", dataField: "valueX", min: am4core.color("#e5dc36"), max: am4core.color("#343434") });
        series.mainContainer.mask = undefined;

        let cursor = new am4charts.XYCursor();
        chart.cursor = cursor;
        cursor.lineX.disabled = true;
        cursor.lineY.disabled = true;
        cursor.behavior = "none";

        let bullet = columnTemplate.createChild(am4charts.CircleBullet);
        bullet.circle.radius = 30;
        bullet.valign = "middle";
        bullet.align = "left";
        bullet.isMeasured = true;
        bullet.interactionsEnabled = false;
        bullet.horizontalCenter = "right";
        bullet.interactionsEnabled = false;

        let hoverState = bullet.states.create("hover");
        let outlineCircle = bullet.createChild(am4core.Circle);
        outlineCircle.adapter.add("radius", function (radius, target) {
            let circleBullet = target.parent;
            return circleBullet.circle.pixelRadius + 10;
        })

        let image = bullet.createChild(am4core.Image);
        image.width = 60;
        image.height = 60;
        image.horizontalCenter = "middle";
        image.verticalCenter = "middle";
        image.propertyFields.href = "href";

        image.adapter.add("mask", function (mask, target) {
            let circleBullet = target.parent;
            return circleBullet.circle;
        })

        let previousBullet;
        chart.cursor.events.on("cursorpositionchanged", function (event) {
            let dataItem = series.tooltipDataItem;

            if (dataItem.column) {
                let bullet = dataItem.column.children.getIndex(1);

                if (previousBullet && previousBullet != bullet) {
                    previousBullet.isHover = false;
                }

                if (previousBullet != bullet) {

                    let hs = bullet.states.getKey("hover");
                    hs.properties.dx = dataItem.column.pixelWidth;
                    bullet.isHover = true;

                    previousBullet = bullet;
                }
            }
        })

    

        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }


    render() {

        return (
            <div>  {parseInt(this.props.amazon)}
                 <h5 className='text-center' style={{color:'rgb(128, 145, 171)',paddingTop:'0.8em'}}>Orders Trend  By Stores </h5>
                   <div id='barChart' style={{width:"auto",height:'500px'}}></div>



            </div>
        )


    }




}