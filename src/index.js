import "normalize.css/normalize.css";
import "./main.scss";
function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context("../src/", true, /\.js$|\.scss$/));
