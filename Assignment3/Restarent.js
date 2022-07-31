let restarentList=[
  {
    "name":"Poojitha",
    "address":"2-24 srinagar",
    "city":"Nizamabad"
  },
  {
    "name":"Haritha",
    "address":"3-32 srinagar",
    "city":"Hydrabad"
  },
  {
    "name":"f2",
    "address":"Vinayaknagar",
    "city":"Nizamabad"
  }
    ];
    const PrintAllNames=()=>{
      document.write("<h2>1.Names of the Restarents:</h2>");
      restarentList.map((item)=>{
        document.writeln(item.name+"</br>");
      })
    }
    const filterRestarentByCity=(CityName)=>{
      document.write("</br><h2>Filtering of the restarents by city<br></h2>");
      var arr=[];
    restarentList.map((item)=> {
      if(item.city==CityName)
      document.write("name: "+item.name+"</br>address: "+item.address+"</br>city: "+item.city+"</br></br>");

     // arr.push(Object.values(item));
     // document.writeln(Object.values(item)+"</br>")
     /*to print all the right side values we use the 
      values(arrayName)*/
    })
  //for(var i=0;i<2;i++)
  //document.writeln(arr[i][0]+"</br>")
   // const arr1=arr.filter(city=="Nizamabad")
    //
    document.write(arr.filter((item)=>item.city))
    //console.log(arr1)
    //arr.reduce((pre,cur)=>pre+cur,0);

  }

    PrintAllNames();
    filterRestarentByCity("Nizamabad");
const orderData={
  "below-500":20,
  "500-1000":29,
  "1000-1500":30,
  "1500-2000":44,
  "above 2000":76
};
//document.writeln(Object.values(orderData))
const total = Object.values(orderData).reduce((previousValue,currentValue)=>previousValue+currentValue,0);//reduce((previousValue,currentValue)=>previousValue+currentValue,initlization);
const result = Object.keys(orderData).map((key, index)=>({
  id: index + 1,
  order: key,
  order_percentage: (100 * orderData[key] / total).toFixed(2)//toFixed(no after decimal point) it is used to fix the number of decimal after point(.)
}))
document.writeln("<h2>2.Total</h2>"+total)
document.writeln("<h2>Percentage of the each property</h2>")
result.map((item)=>{
  document.write("id: "+item.id+"</br>order: "+item.order+"</br>order_percentage: "+item.order_percentage+"</br></br>");

})

//calculate the number of order propertion options
