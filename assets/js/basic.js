$(document).ready(function () {
  const date = new Date();

  const Developer = {
    name: "Shan Shaji",
    year: date.getFullYear(),
  };

  $(".copyright").text(
    `©  ${Developer.year} IEEE SB AJCE. Maintained  by ${Developer.name}`
  );

  
});
