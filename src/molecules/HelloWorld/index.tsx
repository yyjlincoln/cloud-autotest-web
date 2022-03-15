/* eslint-disable import/prefer-default-export */
import React from 'react';

interface HelloWorldProps {
  isRed?: boolean;
}

export function HelloWorld(props: HelloWorldProps = { isRed: false }) {
  const { isRed } = props;
  return (
    <div className={`${isRed === true ? 'text-red-800' : ''}`}>
      Hello world!
    </div>
  );
}
