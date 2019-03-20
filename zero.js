// @ts-check
import { html, render } from "./web_modules/lit-html.js";

/**
 * ZeroApp template
 *
 * @type {(name: string) => any}
 */
const ZeroApp = name =>
  html`
    <p>Hello ${name}</p>
  `;

// eslint-disable-next-line fp/no-unused-expression
render(ZeroApp("Zero"), document.getElementById("Zero"));
