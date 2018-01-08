'use strict';

jOmnis.callbackObject = {
    element: null,
    omnisOnLoad: function () {
        console.log("jOmins - omnisOnLoad");
    },

    omnisOnWebSocketOpened: function () {
        console.log("jOmins - omnisOnWebSocketOpened");
    },

    omnisSetData: function (omnisData) {
        console.log("jOmins - omnisSetData");
        console.log(omnisData);
    },

    omnisGetData: function () {
        console.log("jOmins - omnisGetData");
        return "Giacomo Manzoli";
    },

    customMethod1: function (params) {
        console.log("jOmnis - customMethod1");

        jOmnis.sendControlEvent({
            evType: "evCustomMethod1Done",
            data: ""
        });
    },

    customMethod2: function (params) {
        console.log("jOmnis - customMethod2");
        jOmnis.sendControlEvent({
            evType: "evCustomMethod2Done",
            data: ""
        });
    },

    customMethod3: function (params) {
        console.log("jOmnis - customMethod3");
        jOmnis.sendControlEvent({
            evType: "evCustomMethod3Done",
            data: ""
        });
    }
};
