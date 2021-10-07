d3.json("/api/Stadiums").then((data) => {

    console.log(data)
  
    // $(document).ready(function() {
    $('#example').DataTable({
        data: data,
        columns: [
            { title: "Stadium" },
            { title: "Latitude" },
            { title: "Longitude" },
            { title: "City" },
            { title: "State" },
            { title: "Team" },
            { title: "Conference" },
            { title: "Capacity" },
        ]
    });
  })
  
d3.json("/api/record").then((data) => {

    console.log(data)
  
    // $(document).ready(function() {
    $('#example').DataTable({
        data: data,
        columns: [
            { title: "Team" },
            { title: "Won" },
            { title: "Lost" },
            { title: "Tied" },
            { title: "Percentage" },
            { title: "Years" },
            { title: "Total_Games" },
            { title: "Conference" },
        ]
    });
  })
  function buildStadiumChart(Conference) {
  
    console.log(Conference);
  
    d3.json(`/api/stadiums/${Conference}`).then((data) => {
  
      var trace1 = {
        type: 'bar',
        x: data['Stadium'],
        y: data['Capacity'],
        marker: {
            color: '#C8A2C8',
        }
      };
      
      var data = [ trace1 ];
      
      var layout = { 
        title: 'Stadium Capcity',
      };
      
      var config = {responsive: true}
      
      Plotly.newPlot('bar', data, layout, config );
    
    })
  }
  
  function optionStadiumChanged(newStadium) {
    buildStadiumChart(newStadium);
  }
  
  buildStadiumChart("Stadium")

  function buildRecordChart(team) {
  
    console.log(team);
  
    d3.json(`/api/record/${team}`).then((data) => {
  
      var trace1 = {
        type: 'bar',
        x: data['Team'],
        y: data['Percentage'],
        marker: {
            color: '#C8A2C8',
        }
      };
      
      var data = [ trace1 ];
      
      var layout = { 
        title: 'Win Percentage by Team',
      };
      
      var config = {responsive: true}
      
      Plotly.newPlot('v-bar', data, layout, config );
    
    })
  }
  
  function optionRecordChanged(newRecord) {
    buildRecordChart(newRecord);
  }
  
  buildRecordChart("Record")
  