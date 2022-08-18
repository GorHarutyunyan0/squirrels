const TeamMember = ({ imgSrc, iconSrc, title, subTitle, imgAlt, iconAlt }) => (
  <div className="card">
    <img src={iconSrc} alt={iconAlt} className="twitter-icon" />
    <img src={imgSrc} alt={imgAlt} />
    <div className="names">
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
    </div>
  </div>
);

export default TeamMember;