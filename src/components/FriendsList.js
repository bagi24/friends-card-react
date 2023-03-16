
import React from "react";


function FriendsList ({  statePage, currentData}) {

  
console.log(currentData)

    return (
<div>

<img  src={ currentData.picture.thumbnail}/>
<p> {currentData.name.first}</p>
<p> {currentData.email}</p>
<p> {currentData.phone}</p>
<p>  Country:  {currentData.location.country} City: {currentData.location.city} Street: {currentData.location.street.name}   </p>
   
</div>
    )
}


export default FriendsList;