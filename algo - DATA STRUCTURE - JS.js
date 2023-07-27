// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let set1=[5,6,8,2]
let set2=[2,8,6,4]
var occ=0
var tab = []
for(x=0 ;x < set1.length ; x++ )
{
for(y=0 ;y < set2.length ; y++)
{
     // console.log(set1[x])
      //    console.log(set2[y])

 
  if(set1[x] == set2[y]   )
   {
       
       occ = occ+1
       if(occ == 0 && y == set2.length-1)
        {
            console.log(set1[x])
            z=0
         tab[z]=set1[x]
         occ=0
        z++   
        }
      
   }
  
}
}
for(z=0 ;z < tab.length ; z++)
{
   consol.log(tab[z]) 
}