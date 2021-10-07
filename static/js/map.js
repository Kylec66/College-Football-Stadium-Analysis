
function buildStadiumMap(){
    const  url = "/api/locations";
    d3.json(url).then(function(response) {

        console.log(response);

        const data = response;

        lat = []
        lon = []
        stadium = []
        for (i=0; i < data.length; i++) {
          lat.push(data[i][1])
          lon.push(data[i][2])
          stadium.push(data[i][0])
        }
        console.log(stadium)
        stadium_data = [{
            "type": "scattergeo",
            "locationmode": "USA-states",
            "lat": lat,
            "lon": lon,
            "text": stadium,
            "hoverinfo": "text",
            "marker": {
                "size": 1,
                "line": {
                    "color": "rgb(8,8,8)",
                    "width": 1
                },
            }
         }]
         const layout = {
            scope: "usa",
            title: "Stadium Data",
            showlegend: false,
            height: 600,
                  // width: 980,
            geo: {
              scope: "usa",
              projection: {
                type: "albers usa"
              },
              showland: true,
              landcolor: "rgb(217, 217, 217)",
              subunitwidth: 1,
              countrywidth: 1,
              subunitcolor: "rgb(255,255,255)",
              countrycolor: "rgb(255,255,255)"
            }
          };
      
          Plotly.newPlot("map", stadium_data, layout);
        });
      } 
      buildStadiumMap();