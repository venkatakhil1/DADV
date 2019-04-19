var myObj = "";
		var allTextLines="";
		var cur_const = "";
		var dict_colors = {
						'Bharatiya Janata Party':'#ff9933',
						'Indian National Congress':'#0F6796',
            	   'Bahujan Mukti Party':'#ffa500',
            	   'Bahujan Samaj Party':'#000080',
            	   'Bahujana Left Party':'#000090',
            	   'Samajwadi Party':'#000081',
            	   'Mizo National Front':'#000082',
            	   'Peoples Representation for Identity and Status of Mizoram (PRISM) Party':'#000085',
            	   'Bahujan Sangharshh Dal':'#000086',
            	   'Prajatantrik Samadhan Party':'#000098',
               	'VyavasthaParivartanParty':'#ffff00',
               	'RealDemocracyParty':'#008000',
               	'Shivsena':'#0000ff',
               	'Independent':'#ff0000',
               	'AamAadmiParty':'#000000',
               	'SamajwadiParty':'#A52A2A',
               	'YuvaSarkar':'#800000',
               	'JanataDal(United)':'#B22222',
               	'AllIndiaHindustanCongressParty':'#8B0000',
               	'RashtriyaKrantikariSamajwadiParty':'#5E3A32',
               	'NationalistCongressParty':'#B8978F',
               	'Telangana Rashtra Samithi':'#BEC8D2',
               	'AapniSarkarParty':'#1E3C5C',
               	'BhartiyaTribalParty':'#BB2FAF',
               	'SwabhimanParty':'#60DC19',
               	'All India Majlis-E-Ittehadul Muslimeen':'#60DC19',
               	'Telugu Desam':'#BB2FAF',
               	

               	'RashtriyaSamajwadiParty(Secular)':'#DE1E6A',
               	'LokVikasManch':'#7E295B',
               	'NavinBharatNirmanManch':'#EF0790',
               	'LokGathbandhanParty':'#1B9878',
               	'RepublicanPartyofIndia':'#3574EC',
               	'BharatiyaNationalJantaDal':'#1CEC2F',
               	'BharatiyaRashtravadiPaksha':'#D0E81F',
               	'CommunistPartyofIndia(Marxist)':'#A2E81F',
 		}
/*$(document).ready(function() {
		
    		$.ajax({
        		type: "GET",
        		url: "data/S26.csv",
        		dataType: "text",
        		success: function(data) {processData(data);}
     	}	);
		});
*/		
		
function processData(allText) {
  alert("Trend Analysis");
		constituency = [];
		winner = [];
		winner_party = [];
		runner=[];
		runner_party = [];
		margin_ = [];
		col = [];
		prev_winner = [];
		prev_winner_party = [];
		prev_margin = [];
		allTextLines = allText.split(/\r\n|\n/);
		//alert(allTextLines[0].split(','));
		var headers = allTextLines[0].split(',');
		//alert(headers.length);
		var lines = [];
		var sl_no = [];
    k1=0;
		//alert(allTextLines[0].split(','));
		for (var i=0; i<allTextLines.length; i++) {
			var data = allTextLines[i].split(',');
   			if (data.length == headers.length) {
				var tarr = [];
				for (var j=0; j<headers.length; j++) {
      				tarr.push(data[j]);
      				//alert(tarr);		
      			}
             //alert(tarr[10])
             k1++;
      			sl_no.push(k1);
      			constituency.push(tarr[1]);
      			winner.push(tarr[6].split(' ').join(''));
      			winner_party.push(tarr[7]);
      			tarr[7] = tarr[7].split('_').join('');
      			col.push(dict_colors[tarr[7]]);
      			runner.push(tarr[3]);
      			runner_party.push(tarr[4]);
      			margin_.push(tarr[2]);

      			lines.push(tarr);
      			tarr[8] = tarr[8].split('_').join(' '); 
      			prev_winner.push(tarr[8]);
      			
      			tarr[9] = tarr[9].split('_').join('');
      			prev_margin.push(tarr[9]);
      			tarr[10] = tarr[10].split('_').join(' '); 
      			prev_winner_party.push(tarr[10]); 
			}
			
		}
		for(var i=0;i<winner.length;i++){
		winner[i] = winner[i].split('_').join(' '); 
		}
		for(var i=0;i<runner.length;i++){
		runner[i] = runner[i].split('_').join(' '); 
		}
		for(var i=0;i<runner_party.length;i++){
		runner_party[i] = runner_party[i].split('_').join(' '); 
		}
		for(var i=0;i<winner_party.length;i++){
		winner_party[i] = winner_party[i].split('_').join(' '); 
		}
		//alert(winner)
		var a = constituency;
		var b = margin_;
		var c = new Array();
		for(var i = 0; i < a.length; i++)
		{
    		c.push('Const: '+a[i]+'<br>Winner: '+winner[i]+' Margin: '+b[i]+'  Party: '+winner_party[i]+'<br>Opponent: '+runner[i]+' Party: '+runner_party[i]);
		}
		
		
		//alert(c[0]);
    //alert(margin_);
		margin_ = winner.map(function (x) { 
    		return parseInt(x, 10); 
			});
		sl_no = sl_no.map(function (x) { 
    		return parseInt(x, 10); 
			});
		
		prev_margin = prev_winner_party.map(function (x) { 
    		return parseInt(x, 10); 
			});
		var d = constituency;
		var e = prev_margin;
		var f = new Array();
		for(var i = 0; i < a.length; i++)
		{
    		f.push('Winner: '+prev_winner[i]+'  Party: '+prev_winner_party[i]+' Margin: '+e[i]);
		}
    //alert(sl_no);
		var trace1 = {
  			x: sl_no,
  			y: margin_,
  			name: '2018 Results',
  			type: 'scatter',
  			text:c,
  			hoverinfo: 'text',
		};
		var trace2 = {
  			x: sl_no,
  			y: prev_margin,
  			name: '2013 Results',
  			type: 'scatter',
  			text:f,
  			hoverinfo: 'text',
		};
		var data = [trace1, trace2];
		//Plotly.plot('myDiv',data);
		Plotly.newPlot('myDiv1', data);
   	unique_Win =[];
   	
		$.each(winner_party, function(i, el){
   			if($.inArray(el, unique_Win) === -1) unique_Win.push(el);
		});
		var ks =0;
		var content = "<table><tr>"
		for(var i=0; i<unique_Win.length; i++){
			//alert(unique_Win[i]);
			///*+dict_colors[unique_Win[i].split('_').join('')]+*/'
			
    		content += '&nbsp<td> <div style="height:20px; border:1px solid black; width:20px; background-color:'+dict_colors[unique_Win[i].split('_').join('')]+'"> </div></td><td><b>' +  unique_Win[i].split('_').join(' ') + ' </b></td>';
			ks = ks+1;			
			if(ks%3==0){
				content += '</tr><tr>';
			}			
		}
		content += "</tr></table>"
			jQuery('#mySelector').html('');
	//$('#mySelector').append(content);
}
		
	function stateChangeeee(){
		//console.log("hello");

		/*var xhttp = new XMLHttpRequest();
    	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    	}
    	xhttp.open("GET", "data/S26.csv", true);
  		xhttp.send();*/
  		var selectS=document.getElementById('selectS');
  	  //alert(selectS.value)
  		if(selectS.value == 'Chhattisgarh')
  		{
  			//console.log("a");
  			$.ajax({
  				type:"GET",
  				url:"data/S26.csv",
  				dataType:"text",
  				success: function(data) {
  					
  					processData(data);
  				}

  			});
  			
  		}

  		if(selectS.value == 'MadhyaPradesh')
  		{
  			//console.log("a");
  			$.ajax({
  				type:"GET",
  				url:"data/S12.csv",
  				dataType:"text",
  				success: function(data) {
  					
  					processData(data);
  				}

  			});
  			
  		}

  		if(selectS.value == 'Mizoram')
  		{
  			//console.log("a");
  			$.ajax({
  				type:"GET",
  				url:"data/S16.csv",
  				dataType:"text",
  				success: function(data) {
  					
  					processData(data);
  				}

  			});
  			
  		}

  		if(selectS.value == 'Rajasthan')
  		{
  			//console.log("a");
  			$.ajax({
  				type:"GET",
  				url:"data/S20.csv",
  				dataType:"text",
  				success: function(data) {
  					
  					processData(data);
  				}

  			});
  			
  		}

  		if(selectS.value == 'Telangana')
  		{
  			//console.log("a");
  			$.ajax({
  				type:"GET",
  				url:"data/S29.csv",
  				dataType:"text",
  				success: function(data) {
  					
  					processData(data);
  				}

  			});
  			
  		}







  	}
  			
  			/**/
  		
		/*if (selectS.value=='Chhattisgarh'){
			alert("a");
			$.ajax({
        	type: "GET",
        	url: "data/S26.csv",
        	dataType: "text",
        	success: function(data) {processData(data);}
     		});
		}
		if (selectS.value=='MadhyaPradesh'){
			$.ajax({
        	type: "GET",
        	url: "data/S12.csv",
        	dataType: "text",
        	success: function(data) {processData(data);}
     		});
		}
		if (selectS.value=='Mizoram'){
			$.ajax({
        	type: "GET",
        	url: "data/S16.csv",
        	dataType: "text",
        	success: function(data) {processData(data);}
     		});
		}
		if (selectS.value=='Rajasthan'){
			$.ajax({
        	type: "GET",
        	url: "data/S20.csv",
        	dataType: "text",
        	success: function(data) {processData(data);}
     		});
		}
		if (selectS.value=='Telangana'){
			$.ajax({
        	type: "GET",
        	url: "data/S29.csv",
        	dataType: "text",
        	success: function(data) {processData(data);}
     		});
		}
		*/
    
	

