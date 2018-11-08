import React, { Component } from 'react';
import ChecklistCard from "./ChecklistCard";

class ChecklistCardView extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  listImages = () => {
    // this.props.data.forEach((item, idx) => {
    //
    //
    //   const imageCards = item.fixes.map((item, idx) => {
    //     // console.log('item', item);
    //     return item.imgUrl;
    //   });
    //
    //   console.log('imageCards', imageCards);
    //
    //   return imageCards.map((url, idx) => {
    //     return <ChecklistCard key={idx} imgSrc={url} />
    //   });
    //
    // });
    //
    // const allowed = ["fixes"];
    //
    // const filtered = Object.keys(this.props.data)
    //   .filter(key => allowed.includes(key))
    //   .reduce((obj, key) => {
    //     obj[key] = this.props.data[key];
    //     return obj;
    //   }, {});
    //
    // // return filtered;
    // console.log(filtered);
  };

  render() {
    return (
      <div>
        {this.listImages()}
      </div>
    );
  }
}

export default ChecklistCardView;