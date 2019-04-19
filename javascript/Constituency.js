function sub() {
    // body...
    var state=document.getElementById("S1").value;
    var Constituency=document.getElementById("S2").value;
    alert(state+" "+Constituency);

    var a = state+Constituency;

    $.ajax({
  				type:"GET",
  				url:"data1/"+a+".csv",
  				dataType:"text",
  				success: function(data) {
  					processData(data);
  				}

  			});

    //document.getElementById("form").submit();
    
}
function processData(data){
	alert(data);

}