import { html, render } from "./web_modules/lit-html.js";

/**
 * ZeroApp template
 *
 * @param {string} name
 */
const ZeroApp = name =>
  html`
    <p>Hello ${name}</p>
  `;

// eslint-disable-next-line fp/no-unused-expression
render(ZeroApp("Zero"), document.getElementById("Zero"));
