/**
 * Created by Enot on 03.11.2016.
 */


html5Tag();
window.onload = deleteBtnSearch;
window.onresize = deleteBtnSearch;


function html5Tag() {
    document.createElement('header');
    document.createElement('nav');
    document.createElement('main');
    document.createElement('section');
    document.createElement('article');
    document.createElement('aside');
    document.createElement('footer');

    console.log("ie tags");
}
function deleteBtnSearch() {
    var searchIcon = document.getElementById("search-btn");
    if (document.documentElement.clientWidth < "800") {
        searchIcon.style.display = "none";
    }
    else{
        searchIcon.style.display = "block";
    }
}