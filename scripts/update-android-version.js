const fs = require("fs");
const path = require("path");
const packageJson = require("../package.json");

const version = packageJson.version;
const versionCode = version
  .split(".")
  .reduce((acc, num) => acc * 100 + parseInt(num), 0);

const gradleFile = path.resolve(__dirname, "../android/app/build.gradle");
let gradleContent = fs.readFileSync(gradleFile, "utf8");

gradleContent = gradleContent.replace(
  /versionCode \d+/g,
  `versionCode ${versionCode}`
);
gradleContent = gradleContent.replace(
  /versionName ".*?"/g,
  `versionName "${version}"`
);

fs.writeFileSync(gradleFile, gradleContent, "utf8");
