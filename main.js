$(document).ready(function () {
 
  $(".navContainer").load("navbar.html");
  
  $(".route").load("Home.html", function () {
    $("#data-select").change(onSelectChanged); });
  
 
  $(document).on("click", ".button", function () {
    const text = $(this).html();
    navigator.clipboard.writeText(text); });
 
  $(".content-div").hide();

  $(document).on("click", ".Vnav-button", function () 
   {
        const contentId = $(this).text().replace(" ", "_");

        $(".content-div").hide();
        $("#" + contentId).show();

        $(".Vnav-button").removeClass("active");
        $(this).addClass("active");
    });

  $(document).on("click", ".gnav-button", function () 
   {
        const contentId = $(this).text().replace(" ", "_");

        $(".gcontent-div").hide();
        $("#" + contentId).show();

        $(".gnav-button").removeClass("active");
        $(this).addClass("active");
   });
  $(document).on("click", ".Tnav-button", function () 
   {
        const TcontentId = $(this).text().replace(" ", "_").trim();

        $(".Tcontent-div").hide();
        $("#" + TcontentId).show();

        $(".Tnav-button").removeClass("active");
        $(this).addClass("active");
  });

});

function onSelectChanged() {
  const selectedValue = $("#data-select").val();
  let selectedText = $("#data-select option:selected").text();
  $(".steps > div").addClass("hidden");
  $(".steps > div." + selectedValue).removeClass("hidden");
}

