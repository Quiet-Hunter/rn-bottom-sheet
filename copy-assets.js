const fs = require("fs-extra");

const srcDir = `${__dirname}/src/img`;
const destDir = `${__dirname}/dist/img`;

fs.copySync(srcDir, destDir, { overwrite: true }, function (err) {
  if (err) {
    console.error("An error occurred while copying the folder.", err);
  } else {
    console.log("Copy completed!");
  }
});
