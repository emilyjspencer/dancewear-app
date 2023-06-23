import './Training.css';

const Training = () => {

    let schools = [
        {url: "https://urdang.city.ac.uk/", name: "Urdang"},
        {url: "https://artsed.co.uk/", name: "Arts Educational Schools"}
    ]

    return (
        <>
        <div className="training-container">
        <h1>Pro training</h1>
        <ul>
            {schools.map(school => {
                return <><p>{school.name}:</p><a href={school.url}>{school.name}</a></>
            })}
        </ul>
        </div>
        </>
    )
}


export default Training;