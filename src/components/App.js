import React from 'react';
import styled from 'styled-components';
import { globalStyle as GlobalStyle } from '../styles/globalStyle';
import Header from './Header/Header';
import Screen from './Screen/Screen';
import Grid from './Grid/Grid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '0',
      theme: 'theme1'
    };
  }

  /* eslint no-eval: 0 */
  handleClick = e => {
    const val = e.target.innerText;
    switch (val) {
      case 'RESET':
        this.setState({ expression: '0' });
        break;
      case 'DEL':
        this.setState(prev => {
          if (prev.expression.length === 1 || prev.expression === 'error') {
            return { expression: '0' };
          }
          return { expression: prev.expression.slice(0, -1) };
        });
        break;
      case '=':
        try {
          const result = eval(this.state.expression.replace(/x/g, '*'));
          this.setState({ expression: result.toString() });
        } catch {
          this.setState({ expression: 'error' });
        }
        break;
      default:
        this.setState(prev => {
          if ((prev.expression === '0' && /\d/.test(val)) || prev.expression === 'error') {
            return { expression: val };
          }
          return { expression: prev.expression + val };
        });
    }
  }

  handleChange = e => this.setState({ theme: 'theme' + e.target.value });

  render() {
    return (
      <>
        <GlobalStyle theme={this.state.theme} />
        <Wrapper>
          <Header onChange={this.handleChange} theme={this.state.theme} />
          <Screen expr={this.state.expression} theme={this.state.theme} />
          <Grid onClick={this.handleClick} theme={this.state.theme} />
        </Wrapper>
      </>
    );
  }
}
export default App;

const Wrapper = styled.div`
  max-width: 20rem;
  margin: 0 auto;
`;
