

jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
               
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
         endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 7, stroke: "rgba(198,89,30,0.7)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: -10 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e2 = prepare("ld2"),
            e3 = prepare("ld3"),
            e4 = prepare("ld4"),
            e5 = prepare("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare("ld10"),
            e11 = prepare("ld11"),
            e12 = prepare("ld12"),
            e13 = prepare("ld13"),
            e14 = prepare("ld14"),
            e15 = prepare("ld15"),
            e16 = prepare("ld16"),
            e16 = prepare("ld17"),
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

        /// Connections For A
        var correct_connections_1_4 = [
            {
                "source": "ld1",
                "target": "ld4"
            },

            {
                "source": "ld4",
                "target": "ld1"
            }
        ];

       var correct_connections_1_5 = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            }
        ];
        var correct_connections_1_7 = [
            {
                "source": "ld1",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld1"
            }
        ];

        var correct_connections_1_8 = [
            {
                "source": "ld1",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld1"
            }
        ];
        
        var correct_connections_1_12 = [
            {
                "source": "ld1",
                "target": "ld12"
            },
        
            {
                "source": "ld12",
                "target": "ld1"
            }
        ];
        
        var correct_connections_1_13 = [
            {
                "source": "ld1",
                "target": "ld13"
            },
        
            {
                "source": "ld13",
                "target": "ld1"
            }
        ];
        var correct_connections_1_15 = [
            {
                "source": "ld1",
                "target": "ld15"
            },
        
            {
                "source": "ld15",
                "target": "ld1"
            }
        ];
        
        var correct_connections_1_16 = [
            {
                "source": "ld1",
                "target": "ld16"
            },
        
            {
                "source": "ld16",
                "target": "ld1"
            }
        ];
        
        

        //// Connections For D


var correct_connections_2_4 = [
    {
        "source": "ld2",
        "target": "ld4"
    },

    {
        "source": "ld4",
        "target": "ld2"
    }
];

var correct_connections_2_5 = [
    {
        "source": "ld2",
        "target": "ld5"
    },

    {
        "source": "ld5",
        "target": "ld2"
    }
];
var correct_connections_2_7 = [
    {
        "source": "ld2",
        "target": "ld7"
    },

    {
        "source": "ld7",
        "target": "ld2"
    }
];

var correct_connections_2_8 = [
    {
        "source": "ld2",
        "target": "ld8"
    },

    {
        "source": "ld8",
        "target": "ld2"
    }
];

var correct_connections_2_12 = [
    {
        "source": "ld2",
        "target": "ld12"
    },

    {
        "source": "ld12",
        "target": "ld2"
    }
];

var correct_connections_2_13 = [
    {
        "source": "ld2",
        "target": "ld13"
    },

    {
        "source": "ld13",
        "target": "ld2"
    }
];
var correct_connections_2_15 = [
    {
        "source": "ld2",
        "target": "ld15"
    },

    {
        "source": "ld15",
        "target": "ld2"
    }
];

var correct_connections_2_16 = [
    {
        "source": "ld2",
        "target": "ld16"
    },

    {
        "source": "ld16",
        "target": "ld2"
    }
];


/// Connections For B

var correct_connections_3_4 = [
    {
        "source": "ld3",
        "target": "ld4"
    },

    {
        "source": "ld4",
        "target": "ld3"
    }
];

var correct_connections_3_5 = [
    {
        "source": "ld3",
        "target": "ld5"
    },

    {
        "source": "ld5",
        "target": "ld3"
    }
];
var correct_connections_3_7 = [
    {
        "source": "ld3",
        "target": "ld7"
    },

    {
        "source": "ld7",
        "target": "ld3"
    }
];

var correct_connections_3_8 = [
    {
        "source": "ld3",
        "target": "ld8"
    },

    {
        "source": "ld8",
        "target": "ld3"
    }
];

var correct_connections_3_12 = [
    {
        "source": "ld3",
        "target": "ld12"
    },

    {
        "source": "ld12",
        "target": "ld3"
    }
];

var correct_connections_3_13 = [
    {
        "source": "ld3",
        "target": "ld13"
    },

    {
        "source": "ld13",
        "target": "ld3"
    }
];
var correct_connections_3_15 = [
    {
        "source": "ld3",
        "target": "ld15"
    },

    {
        "source": "ld15",
        "target": "ld3"
    }
];

var correct_connections_3_16 = [
    {
        "source": "ld3",
        "target": "ld16"
    },

    {
        "source": "ld16",
        "target": "ld3"
    }
];



// Output to Input

// ld6
var correct_connections_6_7 = [
    {
        "source": "ld6",
        "target": "ld7"
    },

    {
        "source": "ld7",
        "target": "ld6"
    }
];

var correct_connections_6_8 = [
    {
        "source": "ld6",
        "target": "ld8"
    },

    {
        "source": "ld8",
        "target": "ld6"
    }
];

var correct_connections_6_12 = [
    {
        "source": "ld6",
        "target": "ld12"
    },

    {
        "source": "ld12",
        "target": "ld6"
    }
];

var correct_connections_6_13 = [
    {
        "source": "ld6",
        "target": "ld13"
    },

    {
        "source": "ld13",
        "target": "ld6"
    }
];

var correct_connections_6_15 = [
    {
        "source": "ld6",
        "target": "ld15"
    },

    {
        "source": "ld15",
        "target": "ld6"
    }
];

var correct_connections_6_16 = [
    {
        "source": "ld6",
        "target": "ld16"
    },

    {
        "source": "ld16",
        "target": "ld6"
    }
];



// ld9
var correct_connections_9_4 = [
    {
        "source": "ld9",
        "target": "ld4"
    },

    {
        "source": "ld4",
        "target": "ld9"
    }
];

var correct_connections_9_5 = [
    {
        "source": "ld9",
        "target": "ld5"
    },

    {
        "source": "ld5",
        "target": "ld9"
    }
];

var correct_connections_9_12 = [
    {
        "source": "ld9",
        "target": "ld12"
    },

    {
        "source": "ld12",
        "target": "ld9"
    }
];

var correct_connections_9_13 = [
    {
        "source": "ld9",
        "target": "ld13"
    },

    {
        "source": "ld13",
        "target": "ld9"
    }
];

var correct_connections_9_15 = [
    {
        "source": "ld9",
        "target": "ld15"
    },

    {
        "source": "ld15",
        "target": "ld9"
    }
];

var correct_connections_9_16 = [
    {
        "source": "ld9",
        "target": "ld16"
    },

    {
        "source": "ld16",
        "target": "ld9"
    }
];

// ld14
var correct_connections_14_7 = [
    {
        "source": "ld14",
        "target": "ld7"
    },

    {
        "source": "ld7",
        "target": "ld14"
    }
];

var correct_connections_14_8 = [
    {
        "source": "ld14",
        "target": "ld8"
    },

    {
        "source": "ld14",
        "target": "ld6"
    }
];

var correct_connections_14_4 = [
    {
        "source": "ld14",
        "target": "ld4"
    },

    {
        "source": "ld4",
        "target": "ld14"
    }
];

var correct_connections_14_5 = [
    {
        "source": "ld14",
        "target": "ld5"
    },

    {
        "source": "ld5",
        "target": "ld14"
    }
];

var correct_connections_14_15 = [
    {
        "source": "ld14",
        "target": "ld15"
    },

    {
        "source": "ld15",
        "target": "ld14"
    }
];

var correct_connections_14_16 = [
    {
        "source": "ld14",
        "target": "ld16"
    },

    {
        "source": "ld16",
        "target": "ld14"
    }
];

// ld17
var correct_connections_17_7 = [
    {
        "source": "ld17",
        "target": "ld7"
    },

    {
        "source": "ld7",
        "target": "ld17"
    }
];

var correct_connections_17_8 = [
    {
        "source": "ld17",
        "target": "ld8"
    },

    {
        "source": "ld8",
        "target": "ld17"
    }
];

var correct_connections_17_12 = [
    {
        "source": "ld17",
        "target": "ld12"
    },

    {
        "source": "ld12",
        "target": "ld17"
    }
];

var correct_connections_17_13 = [
    {
        "source": "ld17",
        "target": "ld13"
    },

    {
        "source": "ld13",
        "target": "ld17"
    }
];

var correct_connections_17_4 = [
    {
        "source": "ld17",
        "target": "ld4"
    },

    {
        "source": "ld4",
        "target": "ld17"
    }
];

var correct_connections_17_5 = [
    {
        "source": "ld17",
        "target": "ld5"
    },

    {
        "source": "ld5",
        "target": "ld17"
    }
];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            // Valid Connections for ld1 (A)
            {
                "source": "ld1",
                "target": "ld4"
            },
    
            {
               "source": "ld4",
                "target": "ld1"
            },
            
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            },

            {
                "source": "ld1",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld1"
            },

            {
                "source": "ld1",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld1"
            },

            {
                "source": "ld1",
                "target": "ld12"
            },
    
            {
               "source": "ld12",
                "target": "ld1"
            },
            
            {
                "source": "ld1",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld1"
            },

            {
                "source": "ld1",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld1"
            },

            {
                "source": "ld1",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld1"
            },
        


            // Valid Connections for ld2 (D)
            {
                "source": "ld2",
                "target": "ld4"
            },
    
            {
               "source": "ld4",
                "target": "ld2"
            },
            
            {
                "source": "ld2",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld2"
            },

            {
                "source": "ld2",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld2"
            },

            {
                "source": "ld2",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld2"
            },

            {
                "source": "ld2",
                "target": "ld12"
            },
    
            {
               "source": "ld12",
                "target": "ld2"
            },
            
            {
                "source": "ld13",
                "target": "ld2"
            },

            {
                "source": "ld2",
                "target": "ld13"
            },

            {
                "source": "ld2",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld2"
            },

            {
                "source": "ld2",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld2"
            },
            

            // Valid Connections for ld3 (B)
            {
                "source": "ld3",
                "target": "ld4"
            },
    
            {
               "source": "ld4",
                "target": "ld3"
            },
            
            {
                "source": "ld3",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld12"
            },
    
            {
               "source": "ld12",
                "target": "ld3"
            },
            
            {
                "source": "ld13",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld13"
            },

            {
                "source": "ld3",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld3"
            },
        


    // Valid Connections For Output Pins
            // ld6
            {
                "source": "ld6",
                "target": "ld7"
            },
            
            {
                "source": "ld7",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld8"
            },
            
            {
                "source": "ld8",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld12"
            },
            
            {
                "source": "ld12",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld13"
            },
            
            {
                "source": "ld13",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld15"
            },
            
            {
                "source": "ld15",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld16"
            },
            
            {
                "source": "ld16",
                "target": "ld6"
            },
            
            
            // ld9

            {
                "source": "ld9",
                "target": "ld4"
            },
            
            {
                "source": "ld4",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld5"
            },
            
            {
                "source": "ld5",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld12"
            },
            
            {
                "source": "ld12",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld13"
            },
            
            {
                "source": "ld13",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld15"
            },
            
            {
                "source": "ld15",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld16"
            },
            
            {
                "source": "ld16",
                "target": "ld9"
            },


            // ld14
            {
                "source": "ld14",
                "target": "ld7"
            },
            
            {
                "source": "ld7",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld8"
            },
            
            {
                "source": "ld8",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld4"
            },
            
            {
                "source": "ld4",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld5"
            },
            
            {
                "source": "ld5",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld15"
            },
            
            {
                "source": "ld15",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld16"
            },
            
            {
                "source": "ld16",
                "target": "ld14"
            },

            // ld17

            {
                "source": "ld17",
                "target": "ld7"
            },
            
            {
                "source": "ld7",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld8"
            },
            
            {
                "source": "ld8",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld12"
            },
            
            {
                "source": "ld12",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld13"
            },
            
            {
                "source": "ld13",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld4"
            },
            
            {
                "source": "ld4",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld5"
            },
            
            {
                "source": "ld5",
                "target": "ld17"
            },
        ];

        var actual_connections = instance.getAllConnections();

        
        var is_connected_1_4=false;
        var is_connected_1_5=false;
        var is_connected_1_7=false;
        var is_connected_1_8=false;
        var is_connected_1_12=false;
        var is_connected_1_13=false;
        var is_connected_1_15=false;
        var is_connected_1_16=false;

        var is_connected_2_4=false;
        var is_connected_2_5=false;
        var is_connected_2_7=false;
        var is_connected_2_8=false;
        var is_connected_2_12=false;
        var is_connected_2_13=false;
        var is_connected_2_15=false;
        var is_connected_2_16=false;

        var is_connected_3_4=false;
        var is_connected_3_5=false;
        var is_connected_3_7=false;
        var is_connected_3_8=false;
        var is_connected_3_12=false;
        var is_connected_3_13=false;
        var is_connected_3_15=false;
        var is_connected_3_16=false;

        var is_connected_6_7=false;
        var is_connected_6_8=false;
        var is_connected_6_12=false;
        var is_connected_6_13=false;
        var is_connected_6_15=false;
        var is_connected_6_16=false;

        var is_connected_9_4=false;
        var is_connected_9_5=false;
        var is_connected_9_12=false;
        var is_connected_9_13=false;
        var is_connected_9_15=false;
        var is_connected_9_16=false;

        var is_connected_14_7=false;
        var is_connected_14_8=false;
        var is_connected_14_4=false;
        var is_connected_14_5=false;
        var is_connected_14_15=false;
        var is_connected_14_16=false;

        var is_connected_17_7=false;
        var is_connected_17_8=false;
        var is_connected_17_12=false;
        var is_connected_17_13=false;
        var is_connected_17_4=false;
        var is_connected_17_5=false;

        
        var unallowed_connection_present = false;
        var count =0;

        //checking for 1_4 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_4){
                is_connected_1_4 = correct_connections_1_4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 1_5 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_5){
                is_connected_1_5 = correct_connections_1_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 1_7 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_7){
                is_connected_1_7 = correct_connections_1_7.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });


        //checking for 1_8 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_8){
                is_connected_1_8 = correct_connections_1_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 1_12 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_12){
                is_connected_1_12 = correct_connections_1_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 1_13 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_13){
                is_connected_1_13 = correct_connections_1_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });



        //checking for 1_15 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_15){
                is_connected_1_15 = correct_connections_1_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });



        //checking for 1_16 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_16){
                is_connected_1_16 = correct_connections_1_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });



 //checking for 2_4 connection
 actual_connections.forEach(function (connection) {
    count++;
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_2_4){
        is_connected_2_4 = correct_connections_2_4.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
          });
    }

    if(!unallowed_connection_present){
        unallowed_connection_present = !(allowed_connections.find(function (conn) {
            return (conn.source === this_connection.source && conn.target === this_connection.target);
        }));
    }
    // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 2_5 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_2_5){
        is_connected_2_5 = correct_connections_2_5.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 2_7 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_2_7){
        is_connected_2_7 = correct_connections_2_7.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});


//checking for 2_8 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_2_8){
        is_connected_2_8 = correct_connections_2_8.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 2_12 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_2_12){
        is_connected_2_12 = correct_connections_2_12.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 2_13 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_2_13){
        is_connected_2_13 = correct_connections_2_13.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});



//checking for 2_15 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_2_15){
        is_connected_2_15 = correct_connections_2_15.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});



//checking for 2_16 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_2_16){
        is_connected_2_16 = correct_connections_2_16.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});



 //checking for 3_4 connection
 actual_connections.forEach(function (connection) {
    count++;
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_3_4){
        is_connected_3_4 = correct_connections_3_4.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
          });
    }

    if(!unallowed_connection_present){
        unallowed_connection_present = !(allowed_connections.find(function (conn) {
            return (conn.source === this_connection.source && conn.target === this_connection.target);
        }));
    }
    // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 3_5 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_3_5){
        is_connected_3_5 = correct_connections_3_5.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 3_7 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_3_7){
        is_connected_3_7 = correct_connections_3_7.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});


//checking for 3_8 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_3_8){
        is_connected_3_8 = correct_connections_3_8.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 3_12 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_3_12){
        is_connected_3_12 = correct_connections_3_12.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 3_13 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_3_13){
        is_connected_3_13 = correct_connections_3_13.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});



//checking for 3_15 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_3_15){
        is_connected_3_15 = correct_connections_3_15.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});



//checking for 3_16 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_3_16){
        is_connected_3_16 = correct_connections_3_16.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});






 //checking for 6_7 connection
 actual_connections.forEach(function (connection) {
    count++;
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_6_7){
        is_connected_6_7 = correct_connections_6_7.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
          });
    }

    if(!unallowed_connection_present){
        unallowed_connection_present = !(allowed_connections.find(function (conn) {
            return (conn.source === this_connection.source && conn.target === this_connection.target);
        }));
    }
    // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 6_8 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_6_8){
        is_connected_6_8 = correct_connections_6_8.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 6_12 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_6_12){
        is_connected_6_12 = correct_connections_6_12.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});


//checking for 6_13 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_6_13){
        is_connected_6_13 = correct_connections_6_13.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 6_15 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_6_15){
        is_connected_6_15 = correct_connections_6_15.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 6_16 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_6_16){
        is_connected_6_16 = correct_connections_6_16.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});






//checking for 9_4 connection
actual_connections.forEach(function (connection) {
    count++;
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_9_4){
        is_connected_9_4 = correct_connections_9_4.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
          });
    }

    if(!unallowed_connection_present){
        unallowed_connection_present = !(allowed_connections.find(function (conn) {
            return (conn.source === this_connection.source && conn.target === this_connection.target);
        }));
    }
    // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 9_5 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_9_5){
        is_connected_9_5 = correct_connections_9_5.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 9_12 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_9_12){
        is_connected_9_12 = correct_connections_9_12.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});


//checking for 9_13 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_9_13){
        is_connected_9_13 = correct_connections_9_13.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 9_15 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_9_15){
        is_connected_9_15 = correct_connections_9_15.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 9_16 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_9_16){
        is_connected_9_16 = correct_connections_9_16.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});








//checking for 14_7 connection
actual_connections.forEach(function (connection) {
    count++;
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_14_7){
        is_connected_14_7 = correct_connections_14_7.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
          });
    }

    if(!unallowed_connection_present){
        unallowed_connection_present = !(allowed_connections.find(function (conn) {
            return (conn.source === this_connection.source && conn.target === this_connection.target);
        }));
    }
    // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 14_8 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_14_8){
        is_connected_14_8 = correct_connections_14_8.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 14_4 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_14_4){
        is_connected_14_4 = correct_connections_14_4.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});


//checking for 14_5 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_14_5){
        is_connected_14_5 = correct_connections_14_5.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 14_15 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_14_15){
        is_connected_14_15 = correct_connections_14_15.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 14_16 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_14_16){
        is_connected_14_16 = correct_connections_14_16.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});










 //checking for 17_7 connection
actual_connections.forEach(function (connection) {
    count++;
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_17_7){
        is_connected_17_7 = correct_connections_17_7.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
          });
    }

    if(!unallowed_connection_present){
        unallowed_connection_present = !(allowed_connections.find(function (conn) {
            return (conn.source === this_connection.source && conn.target === this_connection.target);
        }));
    }
    // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 17_8 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_17_8){
        is_connected_17_8 = correct_connections_17_8.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 17_12 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_17_12){
        is_connected_17_12 = correct_connections_17_12.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});


//checking for 17_13 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_17_13){
        is_connected_17_13 = correct_connections_17_13.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 17_4 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_17_4){
        is_connected_17_4 = correct_connections_17_4.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});

//checking for 17_5 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_17_5){
        is_connected_17_5 = correct_connections_17_5.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }
      // if this_connection exists in correct_connections
    // remove this connection from correct ones
    // continue
    // else
    // return false
});








        if(unallowed_connection_present){
            alert("WRONG CONNECTION");
        }

        
        else if (is_connected_1_4 && is_connected_2_5 && is_connected_2_7 && is_connected_3_8 && is_connected_6_12 && is_connected_9_13){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 
        else if (is_connected_1_4 && is_connected_2_5 && is_connected_2_7 && is_connected_3_8 && is_connected_6_13 && is_connected_9_12){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 
        else if (is_connected_1_4 && is_connected_2_5 && is_connected_2_7 && is_connected_3_8 && is_connected_6_12 && is_connected_9_13){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 

        else if (is_connected_1_5 && is_connected_2_4 && is_connected_2_7 && is_connected_3_8 && is_connected_6_12 && is_connected_9_13){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 
        else if (is_connected_1_5 && is_connected_2_4 && is_connected_2_7 && is_connected_3_8 && is_connected_6_13 && is_connected_9_12){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 
        else if (is_connected_1_5 && is_connected_2_4 && is_connected_2_7 && is_connected_3_8 && is_connected_6_12 && is_connected_9_13){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 


        else if (is_connected_1_7 && is_connected_2_8 && is_connected_2_12 && is_connected_3_13 && is_connected_9_15 && is_connected_14_16){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 
        else if (is_connected_1_7 && is_connected_2_8 && is_connected_2_12 && is_connected_3_13 && is_connected_9_16 && is_connected_14_15){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 
        else if (is_connected_1_7 && is_connected_2_8 && is_connected_2_13 && is_connected_3_12 && is_connected_9_15 && is_connected_14_16){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        }

        else if (is_connected_1_8 && is_connected_2_7 && is_connected_2_12 && is_connected_3_13 && is_connected_9_15 && is_connected_14_16){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 
        else if (is_connected_1_8 && is_connected_2_7 && is_connected_2_12 && is_connected_3_13 && is_connected_9_16 && is_connected_14_15){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 
        else if (is_connected_1_8 && is_connected_2_7 && is_connected_2_13 && is_connected_3_12 && is_connected_9_15 && is_connected_14_16){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        }

        else if (is_connected_1_4 && is_connected_2_5 && is_connected_2_12 && is_connected_3_13 && is_connected_6_15 && is_connected_14_16){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 
        else if (is_connected_1_4 && is_connected_2_5 && is_connected_2_12 && is_connected_3_13 && is_connected_6_16 && is_connected_14_15){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 
        else if (is_connected_1_4 && is_connected_2_5 && is_connected_2_13 && is_connected_3_12 && is_connected_6_15 && is_connected_14_16){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 

        else if (is_connected_1_5 && is_connected_2_4 && is_connected_2_12 && is_connected_3_13 && is_connected_6_15 && is_connected_14_16){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 
        else if (is_connected_1_5 && is_connected_2_4 && is_connected_2_12 && is_connected_3_13 && is_connected_6_16 && is_connected_14_15){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 
        else if (is_connected_1_5 && is_connected_2_4 && is_connected_2_13 && is_connected_3_12 && is_connected_6_15 && is_connected_14_16){
            document.getElementById("A").disabled = false;
            document.getElementById("D").disabled = false;
            document.getElementById("B").disabled = false;
            document.getElementById("Z").disabled = false;
            document.getElementById("rst").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        } 


        else {
            alert("WRONG CONNECTION");
            return;
        }   
    });
});