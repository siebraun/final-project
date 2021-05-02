import * as MODEL from "../model/model.js";


function init() {

    $("nav a").click(function (e){
        let btnID = this.id;
        let contentID = btnID + "Content";

        if (btnID != "home") {
            $(".white-nav")
              .removeClass(`white-nav`)
              .addClass(`black-nav`);

              MODEL.getPageContent(contentID, addToursListeners);
        }
        else if (btnID == "home") {
            $(".black-nav")
            .removeClass(`black-nav`)
            .addClass(`white-nav`);
            MODEL.getPageContent(contentID, addHomeListeners);
        }

    });

    $()
}

function addHomeListeners() {
    $(".gallery-button a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Content";
        $(".white-nav")
        .removeClass(`white-nav`)
        .addClass(`black-nav`);
        MODEL.getPageContent(contentID, addHomeListeners);
    });
}

function addToursListeners() {
    $("#app .gallery-row a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Content";
        $(".white-nav")
        .removeClass(`white-nav`)
        .addClass(`black-nav`);
        MODEL.getPageContent(contentID, addToursListeners);
    });
}

$(document).ready(function(){
    init();
    MODEL.getPageContent("homeContent", addHomeListeners);
});