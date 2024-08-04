import "./Leaderboard.css";
import { leaderBoardData } from "../../data";
import LeaderIcon from "../../assets/leaderIcon.svg";
import FIRST from "../../assets/rankone-guvi.svg";
import SECOND from "../../assets/ranktwo-guvi.svg";

const Leaderboard = () => {
  return (
    <section className="leaderboard">
      <div className="leader__leaderboard p-3 text-center">
        <div className="leader__leaderboard__title">
          <h2>Competition is a good thing; it forces us to do our best.</h2>
        </div>
        <img src={LeaderIcon} alt="leader-icon" className="leader__icon" />
      </div>
      <div className="leader__leaderboard__table">
        <table>
          <thead>
            <tr className="p-2 text-center text-md-start">
              <th>Rank</th>
              <th>Name</th>
              <th className="px-3">Batch</th>
              <th>Learning</th>
            </tr>
          </thead>
          <tbody>
            {leaderBoardData.map(({ rank, name, batch, learning }) => (
              <tr
                key={rank}
                className={`p-2 text-center text-md-start ${
                  rank === 1 ? "topper" : ""
                }`}
              >
                <td>
                  {rank === 1 && <img src={FIRST} alt="Rank 1" />}
                  {rank === 2 && <img src={SECOND} alt="Rank 2" />}
                  {rank > 2 && rank}
                </td>
                <td>{name}</td>
                <td>{batch}</td>
                <td className="px-3">{learning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Leaderboard;
