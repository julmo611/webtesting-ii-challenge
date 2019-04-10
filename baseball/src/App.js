import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/Dashboard';
// import Display from './components/Display';

class App extends Component {
	state = {
		strikes: 0,
		balls: 0,
		fouls: 0
	};

	reset = () => {
		this.setState({ strikes: 0, balls: 0, fouls: 0 });
	};

	handleStrike = e => {
		e.preventDefault();

		if (this.state.strikes === 2) {
			this.reset();
		} else {
			this.setState({
				strikes: this.state.strikes + 1
			});
		}
	};

	handleBalls = e => {
		e.preventDefault();

		if (this.state.balls === 3) {
			this.reset();
		} else {
			this.setState({
				balls: this.state.balls + 1
			});
		}
	};

	handleFouls = () => {
		if (this.state.strikes === 0 || this.state.strikes === 1) {
			this.setState({
				strikes: this.state.strikes + 1,
				fouls: this.state.fouls + 1
			});
		} else if (this.state.strikes === 2) {
			this.setState({ strikes: this.state.strikes });
		}
	};

	handleHits = () => {
		this.reset();
	};

	render() {
		return (
			<>
				<h2>Dashboard</h2>
				<button onClick={this.handleStrike} data-testid="strikebtn">
					Strike
				</button>
				<button onClick={this.handleBalls} data-testid="ballbtn">
					Ball
				</button>
				<button onClick={this.handleFouls} data-testid="foulsbtn">
					Foul
				</button>
				<button onClick={this.handleHits} data-testid="hitsbtn">
					Hits
				</button>
				<div>
					<h2>
						Balls: <span data-testid="balls">{this.state.balls}</span>
					</h2>
				</div>
				<div>
					<h2>
						Fouls: <span data-testid="fouls">{this.state.fouls}</span>
					</h2>
				</div>
				<div>
					<h2>
						Stikes: <span data-testid="strikes">{this.state.strikes}</span>
					</h2>
				</div>
			</>
		);
	}
}

export default App;
