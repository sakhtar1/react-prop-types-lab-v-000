// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {

  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
          <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
        </ul>
      </div>
    );
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular'
};





import React from 'react';


export default class Product extends React.Component {
  // your code here


  static defaultProps = {
   hasWatermark: false,
 };

  render() {
    const { name, producer, hasWatermark, color, weight } = this.props;
    return (
      <div>
        {name}
        {producer}
        {hasWatermark}
        {color}
        {weight}
      </div>

   )
 }
}

Product.propTypes = {};

Product.propTypes = {
  name: PropTypes.string.isRequired
  producer: PropTypes.string
  hasWatermark: PropTypes.bool
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']),
  weight: PropTypes.number.isRequired 
};
