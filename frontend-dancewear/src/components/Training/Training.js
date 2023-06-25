import './Training.css';

const Training = () => {

    let schools = [
        {url: "https://urdang.city.ac.uk/", name: "Urdang (Dance & Musical Theatre combination"},
        {url: "https://artsed.co.uk/", name: "Arts Educational Schools (Musical Theatre"},
        {url: "https://www.trinitylaban.ac.uk/study/dance", name: "Trinity Laban (Contemporary Dance"},
        {url: "https://theplace.org.uk/study", name: "The Place (Contemporary Dance)"},
        {url: "https://www.italiaconti.com/",  name: "Italia Conti (Dance degree and Musical Theatre degree"},
        {url: "https://www.mountview.org.uk/", name: "Mountview (Musical theatre"}

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