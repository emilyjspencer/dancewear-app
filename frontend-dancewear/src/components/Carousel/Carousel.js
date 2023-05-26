
import { useState, useEffect} from 'react';


export const Carousel = () => {

    

  
    

    return (
    <>
       <h1>Trending</h1>
       <div className="row d-flex justify-content-center align-items-center">
                        {
                                books.slice(0, 3).map(book => (
                                    <ReturnBook book={book} key={book.id} />
                                ))
                            }

                        </div>
                        </>
    )
}
