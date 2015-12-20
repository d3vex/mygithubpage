var lang;
var currentSite;

clearMenu = function () {
    //document.getElementById("menu_home").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase";
    //document.getElementById("menu_portfolio").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase";
    //document.getElementById("menu_cv").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase";
};

loadPage = function (menuitem, title, docPath) {
    currentDocPath = docPath;
    currentMenuitem = menuitem;
    if ($("#page-content").scrollTop() == 0) {
        if (menuitem != "none") {
            clearMenu();
            //document.getElementById(menuitem).className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase menu-item-active";
        }
        document.title = title;
        $("#page-content").fadeOut(100, function () {
            document.getElementById("content").innerHTML = "";
            $("#content").load(docPath, function () {
                $("#page-content").fadeIn(200);
            });
        });
    } else {
        $("#page-content").animate({
            scrollTop: 0
        }, 200, function () {

            if (menuitem != "none") {
                clearMenu();
                //document.getElementById(menuitem).className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase menu-item-active";
            }
            document.title = title;
            $("#page-content").fadeOut(100, function () {
                document.getElementById("content").innerHTML = "";
                $("#content").load(docPath, function () {
                    $("#page-content").fadeIn(200);
                });
            });
        });
    };
};

loadHome = function () {
    currentSite = "home";
    if (lang == "de")
        loadPage("menu_home", "Sebastian De Ro - Home", "documents/home_de.html");
    else
        loadPage("menu_home", "Sebastian De Ro - Home", "documents/home.html");

    $('.slider').slider({
        full_width: true
    });
};
loadPortfolio = function () {
    currentSite = "portfolio";
    if (lang == "de")
        loadPage("menu_portfolio", "Sebastian De Ro - Portfolio", "documents/portfolio_de.html");
    else
        loadPage("menu_portfolio", "Sebastian De Ro - Portfolio", "documents/portfolio.html");
};
loadCV = function () {
    currentSite = "cv";
    if (lang == "de")
        loadPage("menu_cv", "Sebastian De Ro - CV", "documents/cv_de.html");
    else
        loadPage("menu_cv", "Sebastian De Ro - CV", "documents/cv.html");
};
loadSitenotice = function () {
    currentSite = "sitenotice";
    if (lang == "de")
        loadPage("none", "Sebastian De Ro - Site notice", "documents/impressum_de.html");
    else
        loadPage("none", "Sebastian De Ro - Impressum", "documents/impressum.html");
};

switchEn = function () {
    lang = "en";
    $(".de").hide();
    $(".en").show();
    if (currentSite == "portfolio") loadPortfolio();
    else if (currentSite == "cv") loadCV();
    else if (currentSite == "sitenotice") loadSitenotice();
    else loadHome();
};

switchDe = function () {
    lang = "de";
    $(".en").hide();
    $(".de").show();
    if (currentSite == "portfolio") loadPortfolio();
    else if (currentSite == "cv") loadCV();
    else if (currentSite == "sitenotice") loadSitenotice();
    else loadHome();
};

$("document").ready(function () {

    $(".de").hide();
    lang = navigator.language;

    if (lang == "de") switchDe();

    $(".cover-sheet").hide();


    if (window.location.hash == "#home") {
        currentSite = loadHome();
    } else if (window.location.hash == "#portfolio") {
        currentSite = loadPortfolio();
    } else if (window.location.hash == "#cv") {
        currentSite = loadCV();
    } else if (window.location.hash == "") {
        currentSite = loadHome();
    }
    $("#menu_home").on("click", function () {
        loadHome();
    });
    $("#menu_portfolio").on("click", function () {
        loadPortfolio();
    });
    $("#menu_cv").on("click", function () {
        loadCV();
    });

    $("#mobile_menu_home").on("click", function () {
        loadHome();
    });
    $("#mobile_menu_portfolio").on("click", function () {
        loadPortfolio();
    });
    $("#mobile_menu_cv").on("click", function () {
        loadCV();
    });

    $("#linkedin-button").on("click", function () {
        window.open("http://www.linkedin.com/in/sebastiandero", '_blank').focus();
    });
    $("#langEn").on("click", function () {
        switchEn();
    });
    $("#langDe").on("click", function () {
        switchDe();
    });

    $(".mdl-layout-title").on("click", function () {
        loadHome();
    });
});
