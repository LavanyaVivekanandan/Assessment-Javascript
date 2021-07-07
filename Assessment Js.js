let inputData = {
  "dimensions": [{
    "id": "dimension_re",
    "values": ["East", "East", "West", "West", "South"]
  }, {
    "id": "dimension_cnt",
    "values": ["London", "Italy", "Germany", "Germany", "Russia"]
  },{
    "id": "measure_sales",
    "values": [100, 156, 432, 462, 25]
  }, {
    "id": "measure_qty",
    "values": [85, 34, 153, 434, 52]
  }, {
    "id": "measure_profit",
    "values": [123, 45, 421, 465, 451]
  }],
  "metadata": [{
    "id": "dimension_re",
    "label": "Region"
  }, {
    "id": "dimension_cnt",
    "label": "County"
  }, {
    "id": "measure_sales",
    "label": "Sales"
  }, {
    "id": "measure_qty",
    "label": "Quantity"
  }, {
    "id": "measure_profit",
    "label": "Profit"
  }]
}

let expectdData =[{
    "Region": "East",
    "County": "London",
    "Sales": 100,
    "Quantity": 85,
    "Profit": 123
  }, {
    "Region": "East",
    "County": "Italy",
    "Sales": 156,
    "Quantity": 34,
    "Profit": 45
  }, {
    "Region": "West",
    "County": "Germany",
    "Sales": 432,
    "Quantity": 153,
    "Profit": 421
  }, {
    "Region": "West",
    "County": "Germany",
    "Sales": 462,
    "Quantity": 434,
    "Profit": 465
  }, {
    "Region": "South",
    "County": "Russia",
    "Sales": 25,
    "Quantity": 52,
    "Profit": 451
  }]
  
  var obj ={
  	"Region": '',
    "County": '',
    "Sales": '',
    "Quantity": '',
    "Profit": '',
  }
  
  function click(){
  var metadata = inputData.metadata;
  var dimensions = inputData.dimensions;
  var i;
  for(i=0;i<= 4;i++){
    if(metadata[i]['id'] == dimensions[i]['id']){
      if(metadata[i]['id'] == 'dimension_re'){
       obj['Region']= (dimensions[i].values);
      }
      if(metadata[i]['id'] == 'dimension_cnt'){
       obj['County']= (dimensions[i].values);
      }
      if(metadata[i]['id'] == 'measure_sales'){
       obj['Sales']= (dimensions[i].values);
      }
      if(metadata[i]['id'] == 'measure_qty'){
       obj['Quantity']= (dimensions[i].values);
      }
      if(metadata[i]['id'] == 'measure_profit'){
       obj['Profit']= (dimensions[i].values);
      }
       
    }
  
  
  }
	console.log("Final");
  console.log(obj);
  }
    
  
  click();
