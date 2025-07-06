const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    return;
  } else {
    const first = result;

    readFile("./content/second.txt", "utf-8", (err, result) => {
      if (err) {
        return;
      } else {
        const second = result;
        writeFile(
          "./content/result-sync.txt",
          `Here is the result: ${first}, ${second}`
        );
      }
    });
  }
});
