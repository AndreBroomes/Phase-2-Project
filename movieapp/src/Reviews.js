
function Reviews({ author, renderArray, body, title})
{
   return(
       <div className="list-container">
           <ul className="watch">
               <h1>Community Reviews:</h1>
               <li>Title: {title}</li>
             <li> Review: {body}</li>
             <li>Author: {author}</li>
          
           </ul>
          {renderArray}
         
       </div>
        
   )
}

export default Reviews