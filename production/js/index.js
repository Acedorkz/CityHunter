var myvideo1=document.getElementById("my-video1");
var myvideo2=document.getElementById("my-video2");

// chart
function showchart1(){
  Highcharts.chart('charts-1', {
      chart: {
          type: 'spline',
          animation: Highcharts.svg, // don't animate in old IE
          duration: 1000,
          marginRight: 10,
          events: {
              load: function () {
                var i=0;
                  // set up the updating of the chart
                  var series = this.series[0];
                  console.log(series);
                  var xarr=[0,1,2,3,4,5,6,7,8,9,10],
                      yarr1=[2.2,2.7,1.7,2.1,1.4,3.5,4.1,5.5,7.1,6.1,5.3],
                      yarr2=[2,3,2,2,1,3,4,5,5,6,4];//真实值
                  var interval1 = setInterval(function(){
                  var x = xarr[i], // current time
                      y1=yarr1[i],
                      y2 = yarr2[i];
                  var flag=true;
                  myvideo1.onpause=function(){
                      myvideo2.pause();
                      // flag=false;
                  };
                  // while(flag){
                    series.addPoint([x,y1], true, false);
                    series.data[i].y=yarr2[i];
                    series.data[i].color= '#FFFF00';
                    i+=1;
                    if(y2>5)
                      $("#myModal").modal('show');
                    if(i>10){
                      clearInterval(interval1);
                    }
                  // }

                  // }


                  // series.data[i].visible=false;
                  // series.addPoint([x,y2], true, false);


                }, 1000);
              }
          }
      },
      title: {
          text: '人口密度曲线'
      },
      xAxis: {
        title: {
            text: '时间/s'
        },
        max:6,
        celling:6,
        floor:0,
        tickAmount: 6,
        allowDecimals: false
      },
      yAxis: {
          title: {
              text: '人口数目/个'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }],
          celling:6,
          floor:0,
          tickAmount: 6,
          allowDecimals: true
      },
      tooltip: {
          formatter: function () {
              return '<b>' + this.series.name + '</b><br/>' +
                  '时间:'+Highcharts.numberFormat(this.x,1) + '<br/>' +
                  '人数:'+Highcharts.numberFormat(this.y, 1);
          }
      },
      legend: {
          enabled: false
      },
      credits: {
          enabled: false
      },
      exporting: {
          enabled: false,
      },
      series: [{
          name: '人口密度',
          color:'#FF9966'
          // data:[6,4,5,6,7,8,9,8,4,6]
          // zones: [{
          //       value: 5,
          //       color: '#7cb5ec',
          //   }, {
          //
          //       color: '#FF9966'
          //   }]
      }]

  });
}


// chart-2
function showchart2(){
    Highcharts.chart('charts-2', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            duration: 1000,
            marginRight: 10,
            events: {
              load: function () {
                var i=0;
                  // set up the updating of the chart
                  var series = this.series[0];
                  console.log(series);
                  var xarr=[1,2,3,4,5,6,7,8,9,10],
                      yarr=[1,-1,0,-1,2,1,1,0,1,-2];//真实值
                  var interval2 = setInterval(function(){
                  var x = xarr[i], // current time
                      y= yarr[i];

                      // myvideo1.onpause=function(){
                      //   clearInterval(interval);
                      // };
                      // myvideo2.onpause=function(){
                      //   clearInterval(interval);
                      // };

                  series.addPoint([x,y], true, false);

                  // series.data[i].visible=false;
                  // series.addPoint([x,y2], true, false);


                  i+=1;
                  if(i>10){
                    clearInterval(interval2);
                  }

                }, 1000);
              }
            }
        },
        title: {
            text: '人口流速曲线'
        },
        xAxis: {
          title: {
              text: '时间/s'
          },
          max:9,
          celling:9,
          floor:0,
          tickAmount: 9,
          allowDecimals: false
        },
        yAxis: {
            title: {
                text: '人口流速m/s'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
            celling:4,
            floor:-3,
            tickAmount:7,
            allowDecimals: true
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    '时间:'+Highcharts.numberFormat(this.x,1) + '<br/>' +
                    '流速'+Highcharts.numberFormat(this.y,1);
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false,
        },
        series: [{
            name: '人口流速',
            color:'#FF9966'
        }]
    });
}


var dataA = [
  ['local', 6.96, 8.89, 8.49, 7.88, 8.49, 8.49, 9.63, 'local'],
  ['local', 7.47, 8.19, 7.72, 7.6, 7.14, 8.28, 9.07, 'local'],
  ['local', 8.94, 8.28, 8.18, 8.52, 7.1, 9.44, 8.53, 'local'],
  ['local', 8.56, 7.39, 8.05, 8.67, 8.01, 8.19, 8.46, 'local'],
  ['local', 8.12, 7.75, 8.3, 8.81, 7.69, 9.3, 9.07, 'local'],
  ['local', 7.44, 7.13, 7.61, 8.47, 8.01, 8.55, 8.66, 'local'],
  ['local', 8.64, 7.73, 7.02, 8.21, 8.35, 9.59, 9.66, 'local'],
  ['local', 7.13, 8.14, 8.14, 7.44, 6.91, 9.26, 8.77, 'local'],
  ['local', 7.19, 7.2, 7.31, 8.21, 7.42, 9.53, 9.47, 'local'],
  ['local', 7.15, 8.42, 7.35, 8.91, 7.76, 9.02, 9.67, 'local'],
  ['local', 7.82, 8.66, 8.54, 8.95, 7.16, 9.63, 8.83, 'local'],
  ['local', 8.29, 8.8, 7.99, 7.72, 8.7, 8.52, 7.85, 'local'],
  ['local', 7.29, 8.02, 8.82, 8.91, 8.91, 8.29, 9.3, 'local'],
  ['local', 7.73, 7.59, 8.21, 7.03, 8.01, 9.17, 8.55, 'local'],
  ['local', 7.91, 8.63, 7.79, 8.13, 8.33, 8.32, 9.45, 'local'],
  ['local', 7.0, 8.84, 8.78, 7.2, 8.72, 9.37, 8.28, 'local'],
  ['local', 7.74, 7.63, 6.89, 8.48, 7.2, 8.98, 8.77, 'local'],
  ['local', 8.24, 8.42, 7.77, 7.7, 8.15, 8.26, 8.16, 'local'],
  ['local', 8.42, 7.41, 7.11, 8.48, 8.05, 8.18, 9.3, 'local'],
  ['local', 7.87, 6.82, 8.44, 7.58, 7.67, 9.31, 8.41, 'local'],
  ['local', 8.32, 7.99, 7.44, 7.37, 8.44, 8.15, 8.06, 'local'],
  ['local', 8.9, 8.4, 8.67, 7.42, 8.55, 9.65, 7.89, 'local'],
  ['local', 8.36, 7.8, 7.58, 8.81, 7.68, 8.21, 8.81, 'local'],
  ['local', 6.86, 7.09, 7.63, 7.6, 8.89, 9.18, 8.54, 'local'],
  ['local', 7.61, 8.44, 7.38, 8.04, 7.9, 8.98, 7.91, 'local'],
  ['local', 8.91, 7.85, 7.98, 8.23, 8.77, 9.11, 9.13, 'local'],
  ['local', 7.41, 7.68, 7.41, 8.55, 8.5, 8.17, 7.85, 'local'],
  ['local', 8.44, 7.54, 7.97, 7.37, 8.15, 8.17, 8.86, 'local'],
  ['local', 8.95, 8.53, 8.73, 8.08, 7.15, 8.56, 8.52, 'local'],
  ['local', 7.22, 7.73, 6.96, 7.12, 7.08, 9.51, 9.24, 'local']
];

var dataB = [
  ['near1', 5.66, 6.57, 5.13, 6.7, 6.35, 6.05, 6.25, 'near1'],
  ['near1', 6.26, 6.7, 6.33, 5.09, 5.42, 6.82, 7.03, 'near1'],
  ['near1', 5.96, 5.45, 6.4, 6.63, 5.4, 7.24, 7.85, 'near1'],
  ['near1', 6.74, 5.27, 5.96, 6.13, 5.08, 6.58, 7.97, 'near1'],
  ['near1', 5.12, 5.06, 6.76, 6.53, 5.89, 5.82, 6.72, 'near1'],
  ['near1', 6.87, 5.03, 6.51, 6.9, 5.41, 6.29, 6.99, 'near1'],
  ['near1', 6.16, 6.65, 5.7, 5.97, 6.37, 7.47, 6.04, 'near1'],
  ['near1', 5.93, 5.99, 5.41, 6.26, 6.88, 7.11, 6.94, 'near1'],
  ['near1', 5.49, 5.54, 5.42, 5.61, 6.36, 6.97, 7.78, 'near1'],
  ['near1', 5.03, 6.03, 5.29, 5.49, 6.31, 6.61, 6.93, 'near1'],
  ['near1', 6.98, 6.52, 5.79, 6.28, 5.17, 7.02, 7.19, 'near1'],
  ['near1', 6.31, 5.86, 6.12, 5.05, 5.32, 7.16, 5.86, 'near1'],
  ['near1', 6.52, 6.14, 6.16, 5.12, 5.84, 7.91, 7.8, 'near1'],
  ['near1', 6.5, 6.67, 6.34, 6.63, 5.38, 7.18, 6.4, 'near1'],
  ['near1', 5.85, 5.27, 5.74, 5.18, 6.53, 7.7, 6.32, 'near1'],
  ['near1', 6.86, 6.92, 6.93, 5.82, 5.02, 5.95, 6.98, 'near1'],
  ['near1', 6.98, 6.42, 6.02, 5.84, 5.06, 6.93, 6.88, 'near1'],
  ['near1', 6.16, 5.37, 6.38, 6.74, 5.89, 6.75, 6.5, 'near1'],
  ['near1', 5.65, 6.55, 6.8, 6.94, 6.96, 7.77, 6.9, 'near1'],
  ['near1', 6.79, 5.02, 5.77, 6.48, 5.95, 7.32, 6.78, 'near1'],
  ['near1', 5.92, 5.48, 6.46, 5.7, 6.1, 6.21, 6.79, 'near1'],
  ['near1', 5.66, 5.23, 6.89, 5.92, 5.38, 7.36, 5.93, 'near1'],
  ['near1', 6.87, 5.33, 5.06, 6.58, 6.22, 6.97, 6.64, 'near1'],
  ['near1', 6.15, 5.5, 6.02, 5.34, 6.12, 6.15, 7.18, 'near1'],
  ['near1', 5.55, 6.81, 5.61, 6.86, 6.64, 7.2, 6.52, 'near1'],
  ['near1', 5.04, 6.02, 6.35, 6.97, 6.54, 7.02, 6.65, 'near1'],
  ['near1', 6.95, 5.64, 5.07, 6.38, 5.91, 6.49, 7.74, 'near1'],
  ['near1', 6.49, 5.23, 5.03, 5.83, 6.31, 7.25, 7.89, 'near1'],
  ['near1', 6.3, 6.64, 6.83, 6.95, 5.46, 5.99, 6.48, 'near1'],
  ['near1', 6.83, 5.49, 5.5, 5.97, 5.39, 6.54, 7.29, 'near1']
];

var dataC = [
  ['near2', 4.3, 3.75, 4.1, 3.72, 3.77, 6.49, 4.42, 'near2'],
  ['near2', 4.96, 4.18, 3.42, 3.5, 4.22, 4.36, 4.09, 'near2'],
  ['near2', 3.74, 4.43, 4.77, 4.56, 3.47, 5.25, 5.96, 'near2'],
  ['near2', 3.9, 4.24, 4.82, 4.82, 4.33, 4.14, 5.23, 'near2'],
  ['near2', 4.95, 4.31, 3.26, 5.08, 3.37, 5.96, 4.1, 'near2'],
  ['near2', 4.51, 3.31, 4.27, 3.86, 4.53, 5.43, 5.6, 'near2'],
  ['near2', 5.03, 4.42, 3.96, 3.76, 5.19, 5.5, 5.27, 'near2'],
  ['near2', 5.14, 3.68, 3.26, 4.73, 3.56, 3.92, 5.53, 'near2'],
  ['near2', 4.38, 5.2, 4.82, 3.52, 3.84, 4.19, 5.03, 'near2'],
  ['near2', 4.81, 4.53, 4.44, 3.69, 4.69, 6.34, 4.8, 'near2'],
  ['near2', 4.43, 3.63, 3.45, 4.31, 3.34, 6.49, 4.25, 'near2'],
  ['near2', 3.6, 4.03, 4.18, 3.91, 4.98, 4.65, 4.54, 'near2'],
  ['near2', 4.07, 4.98, 4.67, 4.59, 4.16, 3.84, 6.27, 'near2'],
  ['near2', 4.51, 3.35, 4.59, 4.47, 3.3, 4.81, 6.22, 'near2'],
  ['near2', 3.41, 5.15, 3.49, 3.57, 3.77, 6.39, 4.49, 'near2'],
  ['near2', 3.81, 3.72, 5.1, 4.44, 4.14, 5.85, 6.23, 'near2'],
  ['near2', 4.14, 4.48, 4.42, 3.27, 4.19, 6.43, 4.27, 'near2'],
  ['near2', 4.96, 4.17, 4.37, 4.23, 3.61, 4.48, 6.26, 'near2'],
  ['near2', 3.59, 4.11, 3.83, 3.31, 4.13, 6.4, 3.86, 'near2'],
  ['near2', 4.75, 4.7, 4.16, 4.54, 4.47, 6.18, 5.89, 'near2'],
  ['near2', 3.94, 3.24, 3.63, 4.99, 3.65, 4.94, 5.62, 'near2'],
  ['near2', 5.1, 4.94, 5.07, 4.88, 5.01, 5.07, 6.33, 'near2'],
  ['near2', 3.56, 5.01, 4.29, 5.06, 3.6, 5.54, 4.63, 'near2'],
  ['near2', 4.05, 3.8, 3.94, 5.09, 4.1, 5.34, 5.45, 'near2'],
  ['near2', 4.03, 4.44, 3.2, 3.82, 4.79, 5.24, 6.23, 'near2'],
  ['near2', 3.92, 3.49, 4.09, 4.47, 4.22, 5.09, 4.94, 'near2'],
  ['near2', 3.82, 3.34, 5.08, 3.4, 5.09, 5.32, 4.01, 'near2'],
  ['near2', 4.28, 3.21, 4.91, 4.46, 4.88, 4.39, 6.23, 'near2'],
  ['near2', 4.76, 4.72, 4.29, 3.69, 4.4, 6.41, 3.93, 'near2'],
  ['near2', 4.08, 3.22, 3.68, 5.09, 3.4, 6.44, 6.07, 'near2']
];

var dataD = [
  ['near3', 2.2, 2.75, 2.8, 2.24, 2.16, 3.93, 2.12, 'near3'],
  ['near3', 1.01, 2.46, 1.98, 2.91, 2.52, 2.64, 3.84, 'near3'],
  ['near3', 1.46, 1.73, 2.28, 2.86, 1.17, 3.8, 3.04, 'near3'],
  ['near3', 2.52, 1.99, 1.87, 2.07, 1.57, 3.16, 3.23, 'near3'],
  ['near3', 2.2, 1.66, 1.65, 1.82, 2.33, 2.0, 3.32, 'near3'],
  ['near3', 2.49, 1.13, 2.43, 1.19, 2.51, 1.86, 2.8, 'near3'],
  ['near3', 1.67, 2.18, 1.95, 1.06, 2.16, 3.0, 2.85, 'near3'],
  ['near3', 1.76, 1.95, 2.44, 2.48, 1.24, 3.45, 2.11, 'near3'],
  ['near3', 2.59, 2.2, 2.44, 2.71, 2.62, 2.15, 2.57, 'near3'],
  ['near3', 1.5, 2.26, 2.02, 2.14, 2.81, 2.0, 3.0, 'near3'],
  ['near3', 1.65, 2.65, 2.68, 1.61, 2.64, 1.86, 3.35, 'near3'],
  ['near3', 1.86, 2.83, 2.3, 1.97, 1.98, 1.84, 3.05, 'near3'],
  ['near3', 1.36, 1.69, 1.92, 1.04, 3.0, 2.94, 2.5, 'near3'],
  ['near3', 2.79, 1.13, 2.4, 1.55, 2.35, 3.16, 2.12, 'near3'],
  ['near3', 2.91, 1.9, 2.93, 1.63, 1.12, 3.47, 2.02, 'near3'],
  ['near3', 1.91, 2.78, 2.52, 1.4, 1.54, 3.72, 3.15, 'near3'],
  ['near3', 1.43, 2.33, 1.72, 2.24, 2.47, 3.52, 3.17, 'near3'],
  ['near3', 2.76, 2.56, 1.09, 1.14, 1.82, 3.53, 2.77, 'near3'],
  ['near3', 2.02, 2.53, 1.34, 2.07, 2.63, 3.35, 1.94, 'near3'],
  ['near3', 1.52, 1.78, 2.55, 1.14, 1.06, 2.77, 3.24, 'near3'],
  ['near3', 1.67, 1.36, 2.95, 2.34, 2.7, 3.04, 3.89, 'near3'],
  ['near3', 1.14, 1.37, 1.33, 1.38, 1.05, 1.92, 3.95, 'near3'],
  ['near3', 1.13, 2.74, 2.26, 2.43, 2.47, 2.66, 2.46, 'near3'],
  ['near3', 2.55, 1.69, 2.37, 1.73, 1.75, 2.02, 3.39, 'near3'],
  ['near3', 2.77, 1.28, 2.71, 2.3, 2.71, 3.16, 2.37, 'near3'],
  ['near3', 1.66, 1.41, 2.68, 2.86, 1.18, 3.64, 2.33, 'near3'],
  ['near3', 1.96, 1.39, 1.57, 2.82, 2.01, 2.97, 3.16, 'near3'],
  ['near3', 2.08, 2.72, 2.1, 2.9, 2.24, 3.5, 2.12, 'near3'],
  ['near3', 2.46, 2.38, 1.53, 2.7, 1.2, 3.5, 2.35, 'near3'],
  ['near3', 1.03, 2.38, 2.97, 1.95, 2.63, 2.87, 3.85, 'near3']
];

var schema = [{
  name: 'Area',
  index: 0,
  text: '地区'
}, {
  name: 'Monday',
  index: 1,
  text: '周一'
}, {
  name: 'Tuesday',
  index: 2,
  text: '周二'
}, {
  name: 'Wednesday',
  index: 3,
  text: '周三'
}, {
  name: 'Thursday',
  index: 4,
  text: '周四'
}, {
  name: 'Friday',
  index: 5,
  text: '周五'
}, {
  name: 'Saturday',
  index: 6,
  text: '周六'
}, {
  name: 'Sunday',
  index: 7,
  text: '周天'
}, {
  name: 'area',
  index: 8,
  text: '地区'
}];

var lineStyle = {
  normal: {
    width: 1,
    opacity: 0.5
  }
};
// charts-3,4
window.onload=function(){

  var myvideo1=document.getElementById("my-video1");
  var myvideo2=document.getElementById("my-video2");
  myvideo1.onplay=function(){
    myvideo2.play();
    showchart1();
    showchart2();
  };


  var myChart = echarts.init(document.getElementById('model_echart'));
  var option = {
  	color: [
  		'#F21228', '#FFCD00', '#0960A7', '#04CE07'
  	],
  	backgroundColor: '#fff',
  	parallelAxis: [{
  		dim: 0,
  		name: schema[0].text,
  		type: 'category',
  		data: ['local', 'near1', 'near2', 'near3'],
  		inverse: true,
  		nameLocation: 'start'
  	}, {
  		dim: 1,
  		name: schema[1].text
  	}, {
  		dim: 2,
  		name: schema[2].text
  	}, {
  		dim: 3,
  		name: schema[3].text
  	}, {
  		dim: 4,
  		name: schema[4].text
  	}, {
  		dim: 5,
  		name: schema[5].text
  	}, {
  		dim: 6,
  		name: schema[6].text
  	}, {
  		dim: 7,
  		name: schema[7].text
  	}, {
  		dim: 8,
  		name: schema[8].text,
  		type: 'category',
  		data: ['near3', 'near2', 'near1', 'local']
  	}],
  	parallel: {
  		left: '5%',
  		right: '13%',
  		bottom: '10%',
  		top: '20%',
  		parallelAxisDefault: {
  			nameTextStyle: {
  				fontSize: 12
  			},
  		}
  	},
  	series: [{
  		name: 'local',
  		type: 'parallel',
  		lineStyle: lineStyle,
  		data: dataA
  	}, {
  		name: 'near1',
  		type: 'parallel',
  		lineStyle: lineStyle,
  		data: dataB
  	}, {
  		name: 'near2',
  		type: 'parallel',
  		lineStyle: lineStyle,
  		data: dataC
  	}, {
  		name: 'near3',
  		type: 'parallel',
  		lineStyle: lineStyle,
  		data: dataD
  	}]
  };
  myChart.setOption(option);

};
