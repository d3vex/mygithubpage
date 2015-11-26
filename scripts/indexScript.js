clearMenu = function() {
    document.getElementById("menu_home").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase";
    document.getElementById("menu_portfolio").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase";
    document.getElementById("menu_cv").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase";
};
loadHome = function() {
    clearMenu();
    document.getElementById("menu_home").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase menu-item-active";
    document.title = "Sebastian De Ro - Home";
    $("#content").fadeOut(100, function() {
        document.getElementById("content").innerHTML = "";
        $("#content").load("documents/home.html");
        $("#content").fadeIn(100);
    });
};
loadPortfolio = function() {
    clearMenu();
    document.getElementById("menu_portfolio").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase menu-item-active";
    document.title = "Sebastian De Ro - Portfolio";
    $("#content").fadeOut(100, function() {
        document.getElementById("content").innerHTML = "";
        $("#content").load("documents/portfolio.html");
        $("#content").fadeIn(200);
    });
};
loadCV = function() {
    clearMenu();
    document.getElementById("menu_cv").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase menu-item-active";
    document.title = "Sebastian De Ro - CV";
    $("#content").fadeOut(100, function() {
        document.getElementById("content").innerHTML = "";
        $("#content").load("documents/cv.html");
        $("#content").fadeIn(200);
    });
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
});
