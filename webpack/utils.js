exports.pages = function (env, folder = "") {
  const rootPagesFolderName = "pages";
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  const fs = require("fs");
  const path = require("path");
  const viewsFolder = path.resolve(
    __dirname,
    `../src/views/${rootPagesFolderName}/${folder}`
  );

  const pages = [];

  // eslint-disable-next-line consistent-return
  fs.readdirSync(viewsFolder).forEach((view) => {
    if (view.split(".")[1] === undefined) {
      return false;
    }

    const viewName = view.split(".")[0];
    let fileName;
    if (env === "development") {
      fileName =
        folder === ""
          ? `${viewName}/index.html`
          : `${folder}/${viewName}/index.html`;
    } else {
      fileName =
        folder === "" ? `${viewName}.html` : `${folder}/${viewName}.html`;
    }
    const options = {
      filename: fileName,
      template: `views/${rootPagesFolderName}/${folder}/${view}`,
      inject: true,
    };

    if (env === "development") {
      options.minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      };
    }

    pages.push(new HtmlWebpackPlugin(options));
  });

  return pages;
};
