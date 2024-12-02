export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("fonts");
  // eleventyConfig.addPassthroughCopy(
  //   "./fonts/Libre_Franklin/LibreFranklin-Italic-VariableFont_wght.ttf"
  // );
  // eleventyConfig.addPassthroughCopy("./fonts/Hind/Hind-Medium.ttf");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("_site");
};