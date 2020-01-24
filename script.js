function Get(url){
    var request = new XMLHttpRequest(); 
    request.open("GET",url,false);
    request.send(null);
    return request.responseText;          
}

var data = 
            [
                {
                "isActive": false,
                "balance": "$2,917.29",
                "age": 30,
                "eyeColor": "green",
                "company": "ENJOLA"
                },
                {
                "isActive": true,
                "balance": "$2,733.12",
                "age": 29,
                "eyeColor": "blue",
                "company": "MOREGANIC"
                },
                {
                "isActive": true,
                "balance": "$3,585.26",
                "age": 39,
                "eyeColor": "blue",
                "company": "OATFARM"
                },
                {
                "isActive": true,
                "balance": "$2,355.76",
                "age": 40,
                "eyeColor": "blue",
                "company": "SENSATE"
                },
                {
                "isActive": false,
                "balance": "$3,604.06",
                "age": 24,
                "eyeColor": "brown",
                "company": "KIOSK"
                },
                {
                "isActive": false,
                "balance": "$1,132.75",
                "age": 22,
                "eyeColor": "blue",
                "company": "TELPOD"
                },
                {
                "isActive": false,
                "balance": "$3,964.56",
                "age": 20,
                "eyeColor": "blue",
                "company": "TYPHONICA"
                },
                {
                "isActive": true,
                "balance": "$1,163.85",
                "age": 23,
                "eyeColor": "brown",
                "company": "CINCYR"
                },
                {
                "isActive": true,
                "balance": "$2,740.01",
                "age": 24,
                "eyeColor": "blue",
                "company": "CENTREXIN"
                },
                {
                "isActive": true,
                "balance": "$2,033.73",
                "age": 37,
                "eyeColor": "blue",
                "company": "WAAB"
                },
                {
                "isActive": true,
                "balance": "$2,283.52",
                "age": 40,
                "eyeColor": "blue",
                "company": "ZENTILITY"
                },
                {
                "isActive": true,
                "balance": "$1,828.23",
                "age": 24,
                "eyeColor": "green",
                "company": "FISHLAND"
                },
                {
                "isActive": true,
                "balance": "$2,157.60",
                "age": 35,
                "eyeColor": "blue",
                "company": "HOMELUX"
                },
                {
                "isActive": true,
                "balance": "$2,950.72",
                "age": 23,
                "eyeColor": "blue",
                "company": "PLASTO"
                },
                {
                "isActive": true,
                "balance": "$2,970.00",
                "age": 36,
                "eyeColor": "green",
                "company": "EVIDENDS"
                },
                {
                "isActive": true,
                "balance": "$3,583.27",
                "age": 39,
                "eyeColor": "blue",
                "company": "POLARIA"
                },
                {
                "isActive": false,
                "balance": "$2,647.38",
                "age": 36,
                "eyeColor": "green",
                "company": "CUIZINE"
                },
                {
                "isActive": true,
                "balance": "$2,950.84",
                "age": 35,
                "eyeColor": "blue",
                "company": "OCTOCORE"
                },
                {
                "isActive": false,
                "balance": "$3,275.70",
                "age": 36,
                "eyeColor": "green",
                "company": "QUORDATE"
                },
                {
                "isActive": false,
                "balance": "$3,677.12",
                "age": 38,
                "eyeColor": "brown",
                "company": "INSURITY"
                },
                {
                "isActive": false,
                "balance": "$3,029.18",
                "age": 36,
                "eyeColor": "brown",
                "company": "SUREMAX"
                },
                {
                "isActive": true,
                "balance": "$2,757.79",
                "age": 29,
                "eyeColor": "brown",
                "company": "EXOSWITCH"
                },
                {
                "isActive": true,
                "balance": "$3,873.40",
                "age": 34,
                "eyeColor": "blue",
                "company": "KENEGY"
                },
                {
                "isActive": true,
                "balance": "$2,871.82",
                "age": 22,
                "eyeColor": "blue",
                "company": "FARMAGE"
                },
                {
                "isActive": true,
                "balance": "$1,840.93",
                "age": 39,
                "eyeColor": "blue",
                "company": "EMERGENT"
                },
                {
                "isActive": false,
                "balance": "$2,713.74",
                "age": 35,
                "eyeColor": "brown",
                "company": "EXTREMO"
                },
                {
                "isActive": true,
                "balance": "$1,365.90",
                "age": 20,
                "eyeColor": "blue",
                "company": "REALMO"
                },
                {
                "isActive": true,
                "balance": "$3,166.68",
                "age": 37,
                "eyeColor": "blue",
                "company": "EXOVENT"
                },
                {
                "isActive": true,
                "balance": "$2,297.39",
                "age": 23,
                "eyeColor": "blue",
                "company": "GEEKUS"
                },
                {
                "isActive": true,
                "balance": "$3,692.54",
                "age": 23,
                "eyeColor": "brown",
                "company": "MULTRON"
                },
                {
                "isActive": false,
                "balance": "$2,699.25",
                "age": 37,
                "eyeColor": "brown",
                "company": "PLASMOX"
                },
                {
                "isActive": true,
                "balance": "$3,257.53",
                "age": 32,
                "eyeColor": "brown",
                "company": "GEOLOGIX"
                },
                {
                "isActive": false,
                "balance": "$2,781.41",
                "age": 32,
                "eyeColor": "brown",
                "company": "ELEMANTRA"
                },
                {
                "isActive": false,
                "balance": "$3,876.36",
                "age": 30,
                "eyeColor": "green",
                "company": "QIMONK"
                },
                {
                "isActive": true,
                "balance": "$3,058.33",
                "age": 28,
                "eyeColor": "green",
                "company": "PROSELY"
                },
                {
                "isActive": false,
                "balance": "$1,418.38",
                "age": 40,
                "eyeColor": "blue",
                "company": "CEPRENE"
                },
                {
                "isActive": false,
                "balance": "$3,398.77",
                "age": 22,
                "eyeColor": "brown",
                "company": "GONKLE"
                },
                {
                "isActive": true,
                "balance": "$1,038.75",
                "age": 36,
                "eyeColor": "blue",
                "company": "EMOLTRA"
                },
                {
                "isActive": true,
                "balance": "$2,328.86",
                "age": 38,
                "eyeColor": "blue",
                "company": "SARASONIC"
                },
                {
                "isActive": true,
                "balance": "$1,553.29",
                "age": 22,
                "eyeColor": "blue",
                "company": "COMCUR"
                },
                {
                "isActive": true,
                "balance": "$2,007.14",
                "age": 28,
                "eyeColor": "blue",
                "company": "AQUAMATE"
                },
                {
                "isActive": false,
                "balance": "$2,439.04",
                "age": 35,
                "eyeColor": "blue",
                "company": "TUBALUM"
                },
                {
                "isActive": true,
                "balance": "$1,749.75",
                "age": 27,
                "eyeColor": "blue",
                "company": "GEEKOSIS"
                },
                {
                "isActive": true,
                "balance": "$2,700.07",
                "age": 32,
                "eyeColor": "blue",
                "company": "ECOSYS"
                },
                {
                "isActive": false,
                "balance": "$2,505.90",
                "age": 24,
                "eyeColor": "blue",
                "company": "PRISMATIC"
                },
                {
                "isActive": false,
                "balance": "$3,410.61",
                "age": 29,
                "eyeColor": "blue",
                "company": "BULLJUICE"
                },
                {
                "isActive": false,
                "balance": "$3,604.94",
                "age": 28,
                "eyeColor": "brown",
                "company": "XLEEN"
                },
                {
                "isActive": false,
                "balance": "$2,021.40",
                "age": 38,
                "eyeColor": "blue",
                "company": "LIMOZEN"
                },
                {
                "isActive": true,
                "balance": "$3,470.90",
                "age": 29,
                "eyeColor": "green",
                "company": "INTERFIND"
                },
                {
                "isActive": false,
                "balance": "$1,098.03",
                "age": 37,
                "eyeColor": "brown",
                "company": "PRINTSPAN"
                },
                {
                "isActive": false,
                "balance": "$1,441.74",
                "age": 29,
                "eyeColor": "blue",
                "company": "DATAGEN"
                },
                {
                "isActive": true,
                "balance": "$1,589.18",
                "age": 28,
                "eyeColor": "green",
                "company": "ESCENTA"
                },
                {
                "isActive": true,
                "balance": "$1,438.89",
                "age": 24,
                "eyeColor": "green",
                "company": "DYMI"
                },
                {
                "isActive": false,
                "balance": "$2,503.55",
                "age": 40,
                "eyeColor": "green",
                "company": "PLASMOSIS"
                }
            ]

graph = document.querySelector("#line_graph");
chart = document.querySelector("#pie_chart");

var age_salary = {};
var eye_colors = {
    //values: [],
    labels: [],
    type: 'pie'
};

var layout = {
    height: 400,
    width: 500
  };

for(i=0; i<data.length; i++)
{
    if(data[i].age in age_salary)
    {
        age_salary[data[i].age] += parseInt(data[i].balance.replace('$','').replace(',', ''));
    }
    else
    {
        age_salary[data[i].age] = parseInt(data[i].balance.replace('$','').replace(',', ''));
    }

    if(!(data[i].eyeColor in eye_colors.labels))
    {
        //eye_colors.values.push(1);
        eye_colors.labels.push(data[i].eyeColor);
    }
    /*else
    {
        var index = eye_colors.labels.indexOf(data[i].eyeColor);
        eye_colors.values[index]++;
    }*/
    
}

var layout_pie = {
    title: {
      text:'Eye color distribution',
      font: {
        family: 'Courier New, monospace',
        size: 24
      },
      xref: 'paper',
      x: 0.05
    }
  };

var layout_line = {
    title: {
      text:'Balance by age',
      font: {
        family: 'Courier New, monospace',
        size: 24
      },
      xref: 'paper',
      x: 0.05
    },
    xaxis: {
        title: {
          text: 'Age',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
          }
        }
    },
    yaxis: {
        title: {
          text: 'Balance',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
          }
        }
    }
};
Plotly.newPlot( graph, [{
    x : Object.keys(age_salary),
    y : Object.values(age_salary)}], 
    layout_line);

Plotly.newPlot(chart, [eye_colors], layout_pie);