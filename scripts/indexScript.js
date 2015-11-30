clearMenu = function() {
  document.getElementById("menu_home").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase";
  document.getElementById("menu_portfolio").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase";
  document.getElementById("menu_cv").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase";
};

loadPage = function(menuitem, title, docPath) {
  if ($("#page-content").scrollTop() == 0) {
    if (menuitem != "none") {
      clearMenu();
      document.getElementById(menuitem).className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase menu-item-active";
    }
    document.title = title;
    $("#page-content").fadeOut(100, function() {
      document.getElementById("content").innerHTML = "";
      $("#content").load(docPath, function() {
        $("#page-content").fadeIn(200);
      });
    });
  } else {
    $("#page-content").animate({
      scrollTop: 0
    }, 200, function() {

      if (menuitem != "none") {
        clearMenu();
        document.getElementById(menuitem).className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase menu-item-active";
      }
      document.title = title;
      $("#page-content").fadeOut(100, function() {
        document.getElementById("content").innerHTML = "";
        $("#content").load(docPath, function() {
          $("#page-content").fadeIn(200);
        });
      });
    });
  };
};

loadHome = function() {
  loadPage("menu_home", "Sebastian De Ro - Home", "documents/home.html");
};
loadPortfolio = function() {
  loadPage("menu_portfolio", "Sebastian De Ro - Portfolio", "documents/portfolio.html");
};
loadCV = function() {
  loadPage("menu_cv", "Sebastian De Ro - CV", "documents/cv.html");
};
loadSitenotice = function() {
  loadPage("none", "Sebastian De Ro - Site notice", "documents/impressum.html");
};

$("document").ready(function() {

  if (window.location.hash == "#home") {
    loadHome();
  } else if (window.location.hash == "#portfolio") {
    loadPortfolio();
  } else if (window.location.hash == "#cv") {
    loadCV();
  } else if (window.location.hash == "") {
    loadHome();
  }
  $("#menu_home").on("click", function() {
    loadHome();
  });
  $("#menu_portfolio").on("click", function() {
    loadPortfolio();
  });
  $("#menu_cv").on("click", function() {
    loadCV();
  });

  $("#mobile_menu_home").on("click", function() {
    loadHome();
  });
  $("#mobile_menu_portfolio").on("click", function() {
    loadPortfolio();
  });
  $("#mobile_menu_cv").on("click", function() {
    loadCV();
  });

  $("#linkedin-button").on("click", function() {
    window.open("http://www.linkedin.com/in/sebastiandero", '_blank').focus();
  });

  $(".mdl-layout-title").on("click", function() {
    loadHome();
  });
});
