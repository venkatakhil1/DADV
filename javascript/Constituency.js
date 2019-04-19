function ChangeState1() {
    // body...
    var state=document.getElementById('S1').value;
    if(state == 'S29'){
        var data=document.getElementById('HdnTG').value;
        var string=String(data);
        var duplicate_data=string.split(';');
        var i;
        var select=document.getElementById('S2');
        select.innerHTML= "--select--";
       
        for(i=0;i<duplicate_data.length;i++)
        {
            var str=duplicate_data[i].split(',');
            select.innerHTML+= "<option value=\"" + str[0] + "\">"+ str[1] + "</option>";
        }
    }
    else if(state == 'S26'){
        var data=document.getElementById('HdnCG').value;
        var string=String(data);
        var duplicate_data=string.split(';');
        var i;
        var select=document.getElementById('S2');
        select.innerHTML= "--select--";
        
        for(i=0;i<duplicate_data.length;i++)
        {
            var str=duplicate_data[i].split(',');
            select.innerHTML+= "<option value=\"" + str[0] + "\">"+ str[1] + "</option>";
        }

    }
    else if(state == 'S12'){
        var data=document.getElementById('HdnMP').value;
        var string=String(data);
        var duplicate_data=string.split(';');
        var i;
        var select=document.getElementById('S2');
        select.innerHTML= "--select--";
        
        for(i=0;i<duplicate_data.length;i++)
        {
            var str=duplicate_data[i].split(',');
            select.innerHTML+= "<option value=\"" + str[0] + "\">"+ str[1] + "</option>";
        }
    }
    else if(state == 'S16'){
        var data=document.getElementById('HdnMZ').value;
        var string=String(data);
        var duplicate_data=string.split(';');
        var i;
        var select=document.getElementById('S2');
        select.innerHTML= "--select--";
        
        for(i=0;i<duplicate_data.length;i++)
        {
            var str=duplicate_data[i].split(',');
            select.innerHTML+= "<option value=\"" + str[0] + "\">"+ str[1] + "</option>";
        }
    }
    else if(state == 'S20'){
        var data=document.getElementById('HdnRJ').value;
        var string=String(data);
        var duplicate_data=string.split(';');
        var i;
        var select=document.getElementById('S2');
        select.innerHTML= "--select--";
        
        for(i=0;i<duplicate_data.length;i++)
        {
            var str=duplicate_data[i].split(',');
            select.innerHTML+= "<option value=\"" + str[0] + "\">"+ str[1] + "</option>";
        }
    }     
}
function sub() {
    var state=document.getElementById("S1").value;
    var Constituency=document.getElementById("S2").value;
    var a = state+Constituency;
    $.ajax({
  				type:"GET",
  				url:"data1/"+a+".csv",
  				dataType:"text",
  				success: function(data) {
  					processData(data);
  				}
  			});
}
function processData(data){
	refinedata=data.split(/\r\n|\n/);
  Constituency=[];
  party=[];
  votes=[];
  for(var i=0;i<refinedata.length;i++)
  {
    var refined =refinedata[i].split(',');
    Constituency.push(refined[0]);
    party.push(refined[1]);
    votes.push(refined[2]);
  }
  var data = [
  {
    x: Constituency,
    y: votes,
    marker : {	color:['red','blue','green','yellow','orange','grey']	},
    type: 'bar'
  }
];

Plotly.newPlot('myDiv', data);
}