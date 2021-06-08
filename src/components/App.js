import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { globalStyle as GlobalStyle } from '../styles/globalStyle';
import Header from './Header/Header';
import Screen from './Screen/Screen';
import Grid from './Grid/Grid';
import { setTheme } from '../redux/actions';

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

  render() {
    return (
      <>
        <GlobalStyle theme={this.props.theme} />
        <Wrapper>
          <Header theme={this.props.theme} />
          <Screen expr={this.state.expression} theme={this.props.theme} />
          <Grid onClick={this.handleClick} theme={this.props.theme} />
        </Wrapper>
      </>
    );
  }
}

const mapStateToProps = state => ({ theme: state.theme });
const mapDispatchToProps = dispatch => ({ setTheme: themeId => dispatch(setTheme(themeId)) });
export default connect(mapStateToProps, mapDispatchToProps)(App);

const Wrapper = styled.div`
  max-width: 20rem;
  margin: 0 auto;
`;
