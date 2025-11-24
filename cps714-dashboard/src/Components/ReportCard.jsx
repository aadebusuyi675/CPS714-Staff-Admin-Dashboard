const ReportCard = ({ title, value }) => {
  return (
    <div className="report-card">
      <Link to="/" className="home-button">Home</Link>  
      <h2 className="subTitle">{title}</h2>
      <p className="cardSubtitle">{value}</p>
    </div>
  )
}

export default ReportCard;