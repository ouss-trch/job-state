const Job = (props) => {
    //props = {
    // job : {
    //      logo: "",
    //      company: "",
    //      position: "",
    //      role: "",
    //      .....
    //}
    // }
    return (
        <div className={`container  ${props.job.featured ? "border_featured" : ""}`}>
            <img src={props.job.logo} alt="logo" />

            <div className="job-desc">
                <div>
                    <span>{props.job.company}</span>
                    {props.job.new && <span className='new'>NEW</span>}
                    {props.job.featured && <span className='featured'>FEATURED</span>}
                </div>
                <h5>{props.job.position}</h5>
                <div >
                    <span>{props.job.postedAt}</span>
                    <span>{props.job.contact}</span>
                    <span>{props.job.location}</span>
                </div>
            </div>
            <div className="job-language">
                <span>{props.job.role}</span>
                <span>{props.job.level}</span>
                {/* Afficher la liste des languages*/}
                {props.job.languages.map((language, index) => (
                    <span key={index}>{language}</span>
                ))}
                {props.job.tools.map((tool, index) => (
                    <span key={index}>{tool}</span>
                ))}
            </div>
        </div>
    )
}
export default Job