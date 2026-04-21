import React from "react";

function PlayerProfile({ username, level, rank }) {
  return (
    <section>
      <h2>{username}</h2>
      <p>Level: {level}</p>
      <p>Rank: {rank}</p>
    </section>
  );
}

export default PlayerProfile;
