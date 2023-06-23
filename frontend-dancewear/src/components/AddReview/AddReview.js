import './AddReview.css';

const AddReview = () => {


    return (
        <div className="add-review-container">
            <h2>Add a review</h2>
            <form>
            <label htmlFor="name">Product Name</label>
                <input type="text" placeholder="Enter product name">

                </input>
                <label htmlFor="review">Review</label>
                <textarea type="text" placeholder="Enter review">
                    
                </textarea>
                <label htmlFor="author">Author</label>
                <input type="text" placeholder="author">
                    
                </input>
                <label htmlFor="date">Date</label>
                <input type="text" placeholder="Enter date of review"></input>
                
                <button type="submit">Add Review</button>
                   
            </form>
        </div>
    )
}

export default AddReview;
    