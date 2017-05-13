
// chart
function showchart(){
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
                  var xarr=[0,1,2,3,4,5,6,7,8,9],
                      yarr=[2,1,3,3,5,4,4,5,7,6];

                  var interval = setInterval(function(){
                  var x = xarr[i], // current time
                      y = yarr[i];
                  series.addPoint([x,y], true, false);
                  i+=1;
                  if(y>6)
                    $("#myModal").modal('show');
                  if(i>9){
                    clearInterval(interval);
                  }
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
          allowDecimals: false
      },
      tooltip: {
          formatter: function () {
              return '<b>' + this.series.name + '</b><br/>' +
                  '时间:'+Highcharts.numberFormat(this.x,2) + '<br/>' +
                  '人数:'+Highcharts.numberFormat(this.y, 2);
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
          // data:[6,4,5,6,7,8,9,8,4,6]
          zones: [{
                value: 5,
                color: '#7cb5ec',
            }, {

                color: '#FF9966 '
            }]
      }]

  });
}


// chart-2
$("charts-2").ready(function () {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    Highcharts.chart('charts-2', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            duration: 1000,
            marginRight: 10,
            events: {
                load: function () {
                  var i=0;

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    var interval = setInterval(function(){

                      var x = 2+i, // current time
                          y = 1+i;
                      series.addPoint([x,y], true, false);
                      i+=1;
                      if(i>4){
                        clearInterval(interval);
                      }
                    }, 2000);
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
          max:6,
          celling:6,
          floor:0,
          tickAmount: 6,
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
            celling:10,
            floor:0,
            tickAmount: 10,
            allowDecimals: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    '时间:'+Highcharts.numberFormat(this.x,2) + '<br/>' +
                    '人数'+Highcharts.numberFormat(this.y, 2);
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
            data: (function () {
                // generate an array of random data
                var data=[],
                    i,
                    xarr=[0,1],
                    yarr=[6,4];

                    for (i = 0; i <2; i += 1) {
                        data.push({
                            x: xarr[i],
                            y: yarr[i]
                        });
                    }

                return data;
            }())
        }]
    });
});

// charts-3,4
window.onload=function(){

  var myvideo1=document.getElementById("my-video1");
  myvideo1.onplay=function(){
    showchart();
  };

  var myvideo2=document.getElementById("my-video2");
  myvideo2.onplay=function(){
    showchart();
  };



   var myChart3 = echarts.init(document.getElementById('charts-3'));

   var option1 = {
       title:{
         text:'周内历史曲线',
       },
       toolbox:{
         show:true,
         feature:{
           // dataView:{
           //   show:true
           // },
           // restore:{
           //   show:true
           // },
           // dataZoom:{
           //   show:true
           // }
           // saveAsImage:{
           //   show:true
           // },
           // magicType:{
           //   type:['line','bar']
           // }
         }
       },
       tooltip:{
         trigger:'axis'//出发方式，axis就是从x轴出发
       },
       legend: {
           data:['密度']
       },
       xAxis : [
           {
               type : 'category',
               data : ["1","2","3","4","5","6"]
           }
       ],
       yAxis : [
           {
               type : 'value'
           }
       ],
       series : [
           {
               "name":"密度",
               "type":"line",
               "data":[5, 20, 40, 10, 10, 20],
               markPoint:{
                 data:[
                   {type:'max',name:'最大值'},
                   {type:'min',name:'最小值',symbol:'arrow'}
                 ]
               },
               markLine:{
                 data:[
                   {type:'average',name:'平均值'}
                 ]
               }
           }
       ],
       animation : true,

    	//Number - Number of animation steps
    	animationSteps : 60,

    	//String - Animation easing effect
    	animationEasing : "easeOutQuart",

    	//Function - Fires when the animation is complete
    	onAnimationComplete : null
   };
   // 为echarts对象加载数据
    myChart3.setOption(option1);



    var myChart4 = echarts.init(document.getElementById('charts-4'));

    var option2 = {
        title:{
          text:'周末历史曲线',
        },
        toolbox:{
          show:true,
          feature:{
            // dataView:{
            //   show:true
            // },
            // restore:{
            //   show:true
            // },
            // dataZoom:{
            //   show:true
            // }
            // saveAsImage:{
            //   show:true
            // },
            // magicType:{
            //   type:['line','bar']
            // }
          }
        },
        tooltip:{
          trigger:'axis'//出发方式，axis就是从x轴出发
        },
        legend: {
            data:['密度']
        },
        xAxis : [
            {
                type : 'category',
                data : ["1","2","3","4","5","6"]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                "name":"密度",
                "type":"line",
                "data":[5, 20, 40, 10, 10, 20],
                markPoint:{
                  data:[
                    {type:'max',name:'最大值'},
                    {type:'min',name:'最小值',symbol:'arrow'}
                  ]
                },
                markLine:{
                  data:[
                    {type:'average',name:'平均值'}
                  ]
                }
            }
        ]
    };
    // 为echarts对象加载数据
     myChart4.setOption(option2);

};
