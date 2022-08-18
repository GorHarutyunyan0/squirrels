import TeamMember from './TeamMember';
import { getTeamMembers } from '../../data';
import "./index.css";

const teamMembers = getTeamMembers();

const Team = () => (
  <>
    <div className="back-of-team" id="teamId">
      <h1 className="title1">The team</h1>
      <div className="back2">
      </div>
    </div>
    <div className="cards">
      {teamMembers.map((member, idx) => (
        <TeamMember key={idx} {...member} />
      ))}
    </div>
  </>
);

export default Team;