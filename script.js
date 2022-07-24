let o1 = JSON.stringify({name:"person 1",age:1});
let o2 = JSON.stringify({age:1,name:"person 1"});
if(o2.age==o1.age){
console.log("true");}
else{
    console.log("false");
}
console.log(o1+" "+o2);


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
for(i=0;i<result.length;i++){
console.log(result[i].flag);}

for(i=0;i<result.length;i++){
    console.log(result[i].name+" ="+result[i].population+"= "+result[i].region+" ="+result[i].subregion);}


   }
  