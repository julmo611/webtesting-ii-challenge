import React from 'react';
import 'jest-dom/extend-expect';
import { render, fireEvent } from 'react-testing-library';
import App from './App';

describe('Test', () => {
	it('Renders without crashing, and sets initial state of balls and strikes to zero', () => {
		render(<App />);
		const { getByTestId } = render(<App />);
		const strikeBtn = getByTestId('strikebtn');
		const ballBtn = getByTestId('ballbtn');

		expect(ballBtn).toBeInTheDocument('0');
		expect(strikeBtn).toBeInTheDocument('0');
	});

	it('Expect  Strike: 1 and Ball : 0', () => {
		render(<App />);
		const { getByTestId } = render(<App />);
		const strikebtn = getByTestId('strikebtn');
		const strikes = getByTestId('strikes');
		const balls = getByTestId('balls');

		fireEvent.click(strikebtn);
		expect(balls).toHaveTextContent('0');
		expect(strikes).toHaveTextContent('1');
	});

	it('Expect strike 3 times and reset to 0', () => {
		render(<App />);
		const { getByTestId } = render(<App />);
		const strikebtn = getByTestId('strikebtn');
		const strikes = getByTestId('strikes');
		const balls = getByTestId('balls');

		fireEvent.click(strikebtn);
		expect(balls).toHaveTextContent('0');
		expect(strikes).toHaveTextContent('2');

		fireEvent.click(strikebtn);
		expect(balls).toHaveTextContent('0');
		expect(strikes).toHaveTextContent('0');
	});

	it('Expect 4 Balls 0 Fouls and reset 0', () => {
		render(<App />);
		const { getByTestId } = render(<App />);
		const ballbtn = getByTestId('ballbtn');
		const balls = getByTestId('balls');
		const fouls = getByTestId('fouls');

		fireEvent.click(ballbtn);
		expect(fouls).toHaveTextContent('0');
		expect(balls).toHaveTextContent('1');

		fireEvent.click(ballbtn);
		expect(fouls).toHaveTextContent('0');
		expect(balls).toHaveTextContent('2');

		fireEvent.click(ballbtn);
		expect(fouls).toHaveTextContent('0');
		expect(balls).toHaveTextContent('3');

		fireEvent.click(ballbtn);
		expect(fouls).toHaveTextContent('0');
		expect(balls).toHaveTextContent('0');
	});
});

describe('Test', () => {
	it('Expect 1 Balls 1 Fouls and after click one time reset 0', () => {
		render(<App />);
		const { getByTestId } = render(<App />);
		const ballbtn = getByTestId('ballbtn');
		const foulsbtn = getByTestId('foulsbtn');
		const hitsbtn = getByTestId('hitsbtn');

		const balls = getByTestId('balls');
		const strikes = getByTestId('strikes');
		const fouls = getByTestId('fouls');

		fireEvent.click(ballbtn);
		fireEvent.click(foulsbtn);
		expect(fouls).toHaveTextContent('1');
		expect(balls).toHaveTextContent('1');

		fireEvent.click(hitsbtn);
		expect(fouls).toHaveTextContent('0');
		expect(balls).toHaveTextContent('0');
	});
});
