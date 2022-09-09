export default function Citycard({name,rating,type,number_of_votes,price_starts_from
  ,id}){
      
      return (
          <tr>
             <td>
                  {id}
              </td>
               
              <td>
                  {name}
              </td>
              <td>
                  {rating}
              </td>
              <td>
                  {type}
              </td>
              <td>
                  {number_of_votes}
              </td>
              <td>
                  {price_starts_from}
              </td>
          </tr>
      )
  }
  