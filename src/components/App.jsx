import React, { Component } from 'react';
import cat from 'images/cat';
import dog from 'images/dog';
import corgi from 'images/corgi';

const Hello = () => {
  return (
    <div className="container">
      <div className="image-wrapper">
        <img src={cat} className="image-wrapper__image" alt="" />
      </div>
      <div className="image-wrapper">
        <img src={dog} className="image-wrapper__image" alt="" />
      </div>
      <div className="image-wrapper">
        <img src={corgi} className="image-wrapper__image" alt="" />
      </div>
    </div>
  );
};

export default Hello;
