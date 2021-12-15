import { render, screen } from '@testing-library/react';
import App from './App';

import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
// configure({ adapter: new Adapter() })

describe('App testing', () => {
  test('render TicTacToe header', () => {
  const wrapper = shallow(<App />)
  // console.log(wrapper.debug())
  // console.log(wrapper.find('header').text()==="TicTacToe")
  expect(wrapper.find('header').text()).toContain("TicTacToe")
  // render(<App />);
  // const header = screen.getByText(/TicTacToe/i);
  // expect(header).toBeInTheDocument();
  });

  test("render a grid div with id of gameboard'",() => {
    const wrapper = shallow(<App />)
    console.log(wrapper.debug())
    expect(wrapper.find('#gameboard'))
  })

  
})