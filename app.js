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
  
  function buildTeamChart(Team) {
  
    console.log(Team);
  
    d3.json(`/api/records/${Team}`).then((data) => {
  
      var trace1 = {
        type: 'bar',
        x: data['Teams'],
        y: data['Pct.'],
        marker: {
            color: '#C8A2C8',
        }
      };
      
      var data = [ trace1 ];
      
      var layout = { 
        title: 'Team',
      };
      
      var config = {responsive: true}
      
      Plotly.newPlot('bar', data, layout, config );
    
    })
  }
  
  function buildStadiumChart(Stadium) {
  
    console.log(Stadium);
  
    d3.json(`/api/Stadiums/${Team}`).then((data) => {
  
      console.log(data)
    
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
        title: 'Stadiums',
      };
      
      var config = {responsive: true}
      
      Plotly.newPlot('v-bar', data, layout, config );
    
    })
  }
  
  
  function optionTeamChanged(newTeam) {
    buildTeamChart(newTeam);
  }
  
  function optionStadiumChanged(newStadium) {
    buildStadiumChart(newStadium);
  }
  
  buildTeamChart("Stadium")
  
  buildStadiumChart("Team")