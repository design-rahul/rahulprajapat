$(document).ready(function () {
  //menu-button for sidebar-toggle
  $("#menu-button").click(function () {
    $("#sidebar-toggle").fadeToggle();
  });
  //DataTable
  $("#table_id").DataTable({
    bFilter: false,
    lengthChange: false,
    ordering: false,
  });
  //dateOnly
  $(".dateOnly").datetimepicker({
    format: "dd/MM/yyyy",
    autoclose: true,
    startView: 2,
    minView: 2,
    maxView: 3,
  });

  //dateAndTime
  $(".dateAndTime").datetimepicker({
    format: " hh:mm:ss, dd/MM/yyyy",
    autoclose: true,
  });

  //Remove danger btn
  $(".lots-action .btn-danger").hide();

  $(".lots-tabs .nav-item").on("click", function () {
    var target = $(this).find("#production-tab").attr("id");
    var contentTarget = $(this)
      .parents(".lots-tabs")
      .find(".tab-content #production")
      .attr("aria-labelledby");

    if (target != contentTarget) {
      $(".lots-action .btn-danger").hide();
    } else {
      $(".lots-action .btn-danger").show();
    }
  });

  var allTr = $(".employee-list table tr");
  alert();
});
