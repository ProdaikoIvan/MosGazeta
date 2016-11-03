/**
 * Created by Enot on 01.11.2016.
 */

document.addEventListener("DOMContentLoaded", mobileDropDownNavigation);
window.addEventListener("resize", mobileDropDownNavigation);

function mobileDropDownNavigation(){
    var width = document.documentElement.clientWidth;
    if (width < 768) {
        var input = document.getElementById("open-mobile-navigation-input");
        var mobileNavigation = document.getElementById("navigation");
        input.addEventListener("click", function () {
            if (input.checked) {
                mobileNavigation.style.maxHeight = "432px";
            }
            else {
                mobileNavigation.style.maxHeight = "0px";
            }
        });
    }
}

