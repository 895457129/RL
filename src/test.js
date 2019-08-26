import React, { PureComponent, } from "react";

export default class Text extends  PureComponent{
  constructor(props) {
    super(props);
    const items = new Array();
    this.state = {
      bar: 0,
    };
  }

  render() {
    const { bar, } = this.state;
    return (
      <p>
        1212_{bar}
      </p>
    );
  }
};
