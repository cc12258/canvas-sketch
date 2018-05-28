import React from 'react';
import classnames from 'classnames';

export default ({ className }) => (
  <svg
    className={classnames(className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="100"
    height="100">
    <path d="M14.5 2h-4.5c0-1.105-0.895-2-2-2s-2 0.895-2 2h-4.5c-0.276 0-0.5 0.224-0.5 0.5v13c0 0.276 0.224 0.5 0.5 0.5h13c0.276 0 0.5-0.224 0.5-0.5v-13c0-0.276-0.224-0.5-0.5-0.5zM8 1c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM14 15h-12v-12h2v1.5c0 0.276 0.224 0.5 0.5 0.5h7c0.276 0 0.5-0.224 0.5-0.5v-1.5h2v12z" />
    <path d="M7 13.414l-3.207-3.707 0.914-0.914 2.293 1.793 4.293-3.793 0.914 0.914z" />
  </svg>
);
