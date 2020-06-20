//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lions, setLions] = useState(0)
  const [tigers, setTigers] = useState(0)

  // Touch Downs
  const lionsTD = () => {
    setLions(lions + 7)
  }
  const tigersTD = () => {
    setTigers(tigers + 7)
  }

  // Field Goals
  const lionsFG = () => {
    setLions(lions + 3)
  }
  const tigersFG = () => {
    setTigers(tigers + 3)
  }

  // Reset scores
  const resetScores = () => {
    setTigers(tigers - tigers)
    setLions(lions - lions)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
  <div className="home__score">{lions}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigers}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {lionsTD}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {lionsFG}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {tigersTD}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {tigersFG}>Away Field Goal</button>
        </div>
        <div className="resetButton">
          <button className="awayButton_touchdown" onClick = {resetScores}>Reset Scores</button>
        </div>
      </section>
    </div>
  );
}

export default App;
