var ratingData=[
  {restaurant:'KFC',rating:5},
  {restaurant:'Burger King',rating:4},
  {restaurant:'KFC',rating:3},
  {restaurant:'Domino',rating:2},
  {restaurant:'Subway',rating:3},
  {restaurant:'Domino',rating:1},
  {restaurant:'Subway',rating:4},
  {restaurant:'Pizza Hut',rating:5},
];

var arr=[];
document.writeln("<h3>Average rating for all restarents</h3>");

var calAvgRating=(restaurantName)=>{
var num=0,count=0,avg;
ratingData.map((item)=>{
  if(item.restaurant==restaurantName)
  {
    num=num+item.rating;
    count++;
    avg=num/count;
  }
 
})
document.writeln("<br>restarent="+restaurantName+"  ,averageRating="+avg)
arr.push({"restarent":restaurantName,"avgRating":avg});
}

calAvgRating('KFC');
calAvgRating('Domino');
calAvgRating('Burger King');
calAvgRating('Subway');
calAvgRating('Pizza Hut');
//var arr1=[];
document.writeln("<h3>List of all the restarents with average rating greater than or equal to 4</h3>");

arr.map((item)=>{
if(item.avgRating>=4)
{
  document.writeln("<br>restarent="+item.restarent+"  ,averageRating="+item.avgRating)
//arr1.push({'restarent':item.restarent,'avgRating':item.avgRating})
}
})

//console.log(arr)
//console.log(arr1)
