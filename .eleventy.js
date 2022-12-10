module.exports = function(eleventyConfig) {

    // Zkopírovat images/ do _site/images
    eleventyConfig.addPassthroughCopy("images");

    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css");
       
    return {
      // možné formáty šablon
      templateFormats: ["njk", "html", "md"],

      // jako šablonovací jazyk zvolíme Nunjucks
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    }
  };
  