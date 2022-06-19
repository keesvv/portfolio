import App from "./App.svelte";
import "virtual:fonts.css";
import "./main.scss";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
