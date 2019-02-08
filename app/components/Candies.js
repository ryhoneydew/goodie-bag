import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCandies } from '../reducers/candyReducer';
class Candies extends Component {
  async componentDidMount() {
    await this.props.fetchCandies();
  }
  render() {
    return (
      <div>
        <h1>Candies</h1>
        <div>
          {this.props.candies.map(candy => (
            <div key={candy.id}>
              <h2>{candy.name}</h2>
              <p>{candy.description}</p>
              <img src={candy.imageUrl} style={{ width: '200px' }} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  candies: state.candies
});

const mapProps = dispatch => ({
  fetchCandies: () => dispatch(fetchAllCandies())
});
export default connect(mapState, mapProps)(Candies);
