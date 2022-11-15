

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
        var e1 = prepare("p1"),
            e2 = prepare("p2"),
            e3 = prepare("p3"),
            e4 = prepare("p4"),
            e5 = prepare("p5"),
            e6 = prepare("p6"),
            e7 = prepare("p7"),
            e8 = prepare("p8"),
            e9 = prepare("p9"),
            e10 = prepare("p10"),
            e11 = prepare("p11"),
            e12 = prepare("p12"),
            e13 = prepare("p13"),
            e14 = prepare("p14"),

            e15 = prepare("b0"),
            e16 = prepare("b1"),
            e17 = prepare("b2"),
            e18 = prepare("b3"),

            e19 = prepare("g0"),
            e20 = prepare("g1"),
            e21 = prepare("g2"),
            e22 = prepare("g3"),

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

        var correct_connections_b0_p1 = [
            {
                "source": "b0",
                "target": "p1"
            },

            {
                "source": "p1",
                "target": "b0"
            }
        ];

       var correct_connections_b1_p2 = [
            {
                "source": "b1",
                "target": "p2"
            },

            {
                "source": "p2",
                "target": "b1"
            }
        ];

        var correct_connections_b2_p5 = [
            {
                "source": "b2",
                "target": "p5"
            },

            {
                "source": "p5",
                "target": "b2"
            }
        ];

        var correct_connections_b3_p12 = [
            {
                "source": "b3",
                "target": "p12"
            },

            {
                "source": "p12",
                "target": "b3"
            }
        ];
        
        var correct_connections_p2_p4 = [
            {
                "source": "p2",
                "target": "p4"
            },
        
            {
                "source": "p4",
                "target": "p2"
            }
        ];
        
        var correct_connections_p5_p13 = [
            {
                "source": "p5",
                "target": "p13"
            },
        
            {
                "source": "p13",
                "target": "p5"
            }
        ];
        var correct_connections_p3_g0 = [
            {
                "source": "p3",
                "target": "g0"
            },
        
            {
                "source": "g0",
                "target": "p3"
            }
        ];
        
        var correct_connections_p6_g1 = [
            {
                "source": "p6",
                "target": "g1"
            },
        
            {
                "source": "g1",
                "target": "p6"
            }
        ];
        
        var correct_connections_p11_g2 = [
            {
                "source": "p11",
                "target": "g2"
            },
        
            {
                "source": "g2",
                "target": "p11"
            }
        ];
        
        var correct_connections_p12_g3 = [
            {
                "source": "p12",
                "target": "g3"
            },
        
            {
                "source": "g3",
                "target": "p12"
            }
        ];

    

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            // Valid Connections for ld1 (A)
            {
                "source": "b0",
                "target": "p1"
            },
    
            {
               "source": "p1",
                "target": "b0"
            },
            
            {
                "source": "b1",
                "target": "p2"
            },

            {
                "source": "p2",
                "target": "b1"
            },

            {
                "source": "b2",
                "target": "p5"
            },

            {
                "source": "p5",
                "target": "b2"
            },


            {
                "source": "b3",
                "target": "p12"
            },

            {
                "source": "p12",
                "target": "b3"
            },

            {
                "source": "p2",
                "target": "p4"
            },

            {
                "source": "p4",
                "target": "p2"
            },

            {
               "source": "p5",
                "target": "p13"
            },
            
            {
                "source": "p13",
                "target": "p5"
            },

            {
                "source": "p3",
                "target": "g0"
            },

            {
                "source": "g0",
                "target": "p3"
            },

            {
                "source": "p6",
                "target": "g1"
            },

            {
                "source": "g1",
                "target": "p6"
            },
        

            {
                "source": "p11",
                "target": "g2"
            },
    
            {
               "source": "g2",
                "target": "p11"
            },
            
            {
                "source": "p12",
                "target": "g3"
            },

            {
                "source": "g3",
                "target": "p12"
            },
        ];

        var actual_connections = instance.getAllConnections();

        
        var is_connected_b0_p1=false;
        var is_connected_b1_p2=false;
        var is_connected_b2_p5=false;
        var is_connected_b3_p12=false;
        var is_connected_p2_p4=false;
        var is_connected_p5_p13=false;
        var is_connected_p3_g0=false;
        var is_connected_p6_g1=false;
        var is_connected_p11_g2=false;
        var is_connected_p12_g3=false;
        

        
        var unallowed_connection_present = false;
        var count =0;

        //checking for b0_p1 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_b0_p1){
                is_connected_b0_p1 = correct_connections_b0_p1.find(function (conn) {
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

        //checking for b1_p2 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_b1_p2){
                is_connected_b1_p2 = correct_connections_b1_p2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for b2_p5 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_b2_p5){
                is_connected_b2_p5 = correct_connections_b2_p5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });


        //checking for b3_p12 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_b3_p12){
                is_connected_b3_p12 = correct_connections_b3_p12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for p2_p4 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_p2_p4){
                is_connected_p2_p4 = correct_connections_p2_p4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for p5_p13 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_p5_p13){
                is_connected_p5_p13 = correct_connections_p5_p13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });



        //checking for p3_g0 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_p3_g0){
                is_connected_p3_g0 = correct_connections_p3_g0.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });



        //checking for p6_g1 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_p6_g1){
                is_connected_p6_g1 = correct_connections_p6_g1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });



 //checking for p11_g2 connection
 actual_connections.forEach(function (connection) {
    count++;
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_p11_g2){
        is_connected_p11_g2 = correct_connections_p11_g2.find(function (conn) {
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

//checking for p12_g3 connection
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_p12_g3){
        is_connected_p12_g3 = correct_connections_p12_g3.find(function (conn) {
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

        
        else if (is_connected_b0_p1 && is_connected_b1_p2 && is_connected_b2_p5 && is_connected_p2_p4 && is_connected_b3_p12 && is_connected_p5_p13 && is_connected_p3_g0
            && is_connected_p6_g1 && is_connected_p11_g2 && is_connected_p12_g3){
            document.getElementById("B0").disabled = false;
            document.getElementById("B1").disabled = false;
            document.getElementById("B2").disabled = false;
            document.getElementById("B3").disabled = false;
            document.getElementById("add").disabled = false;
            alert("RIGHT CONNECTION");
        }

        else {
            alert("WRONG CONNECTION");
            return;
        }   
    });
});