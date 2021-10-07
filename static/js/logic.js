d3.json("/api/stadiums").then((data) => {

    console.log(data)
  
    // $(document).ready(function() {
    $('#example').DataTable( {
        data: data['table'],
        columns: [
            { title: "Stadium" },
            { title: "City" },
            { title: "State" },
            { title: "Team" },
            { title: "Conference" },
            { title: "Capacity" },
            { title: "Latitude" },
            { title: "Longitude" }
        ]
    } );
  })
  
  function buildStadiumChart(stadium) {
  
    console.log(stadium);
  
    d3.json(`/api/stadiums/${stadium}`).then((data) => {
  
      var trace1 = {
        type: 'bar',
        x: data['Team'],
        y: data['Capacity'],
        marker: {
            color: '#C8A2C8',
        }
      };
      
      var data = [ trace1 ];
      
      var layout = { 
        title: 'Stadium',
      };
      
      var config = {responsive: true}
      
      Plotly.newPlot('bar', data, layout, config );
    
    })
  }
  
  function optionStadiumChanged(newStadium) {
    buildStadiumChart(newStadium);
  }
  
  buildStadiumChart("Stadium")
  