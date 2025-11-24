const ReportCard = ({ title, value }) => {
  return (
    <div className="report-card">
      <h2 className="subTitle">{title}</h2>
      <p className="cardSubtitle">{value}</p>
    </div>
  )
}

export default ReportCard;