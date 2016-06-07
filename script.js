var bodyWidth, my_canvas, context, hash, episodesJSON;

$(function() {
    // Handler for .ready() called.

    // inital positioning of canvas
    bodyWidth = $("body").css("width");

    var canvasMarginLeft = (bodyWidth.split("px")[0] / 2) - 250;


    // canvas declaration
    my_canvas = document.getElementById('canvas');
    context = my_canvas.getContext("2d");

    //context.globalCompositeOperation="source-over";

    // position canvas in middle
    $("canvas#canvas").css("margin-left", canvasMarginLeft);

    // draw initial scene
    drawScene();


    episodesJSON = [];

    $.getJSON("data/episodes.json", function(json) {
        episodesJSON = json;

        hash = window.location.hash;

        if (hash != "" && hash != null) {
            findEpisode(hash.slice(1));
        }
    });


    // console.log("hash: " + hash);



});

function cleanBoard(){
    drawScene();

}

function drawScene() {
    // get the canvas element
    //my_canvas = document.getElementById('canvas');

    if (my_canvas) {

        drawEmptyCanvas();
    }


    // draw basic layout of scene

}


function drawEmptyCanvas() {

    if (my_canvas) {

        console.log("drawing the scene cuz 'my_canvas' is true");

        context = my_canvas.getContext("2d");


        // draw wood frame - top
        var grd = context.createLinearGradient(0, 10, 0, 50);
        grd.addColorStop(0, "#5E4420");
        grd.addColorStop(1, "#C49654");
        context.fillStyle = grd;
        context.fillRect(100, 20, 300, 14);

        // draw wood frame - bottom
        grd = context.createLinearGradient(0, 324, 0, 360);
        grd.addColorStop(0, "#5E4420");
        grd.addColorStop(1, "#C49654");
        context.fillStyle = grd;
        context.fillRect(100, 334, 300, 14);

        // draw wood frame - left leg
        grd = context.createLinearGradient(110, 0, 130, 0);
        grd.addColorStop(0, "#5E4420");
        grd.addColorStop(1, "#C49654");
        context.fillStyle = grd;
        context.fillRect(120, 348, 20, 130);

        // draw wood frame - right leg
        grd = context.createLinearGradient(350, 0, 370, 0);
        grd.addColorStop(0, "#5E4420");
        grd.addColorStop(1, "#C49654");
        context.fillStyle = grd;
        context.fillRect(360, 348, 20, 130);


        // draw innerCanvas
        grd = context.createLinearGradient(0, 10, 0, 400);

        grd.addColorStop(0, "#faf7f3");
        grd.addColorStop(1, "#F8F3EC");

        context.fillStyle = grd;
        context.fillRect(50, 34, 400, 300);



        // context.fillStyle = "blue";

        //context.fillRect(0, 0, 500, 500);

        // context.fillStyle = "blue";
        //context.fillRect(0, 0, 500, 500);
    }

}


function findEpisode(episode) {

    console.log("Paint: " + episode);

    $.each(episodesJSON, function(i, v) {

        if (v.EPISODE == episode) {
            visualizeIt(this);
            return;
        }
    });

}

function visualizeIt(elems) {

    console.log("Visualize...");
    console.log(elems);

    var elemsToPaint = [],
    orderedElems = [];

    $.each(elems, function(i, v) {
        if (v == '1'){
            elemsToPaint.push(i);
        }
    });

    console.log("elemsToPaint");
    console.log(elemsToPaint);

    $.each(elemsToPaint, function(i, v) {
        // frame stuff

        console.log("i");
        console.log(i);
        console.log("v");
        console.log(v);

        if (v == "CIRCLE_FRAME" || 
            v == "DOUBLE_OVAL_FRAME" || 
            v == "FLORIDA_FRAME" || 
            v == "HALF_CIRCLE_FRAME" || 
            v == "HALF_OVAL_FRAME" || 
            v == "OVAL_FRAME" || 
            v == "RECTANGLE_3D_FRAME" || 
            v == "RECTANGULAR_FRAME" || 
            v == "SEASHELL_FRAME" || 
            v == "SPLIT_FRAME" || 
            v == "TOMB_FRAME" || 
            v == "FRAMED" || 
            v == "TRIPLE_FRAME" ||
            v == "WINDOW_FRAME" || 
            v == "WOOD_FRAMED" ) {
            orderedElems.push(v);

        elemsToPaint.splice(i,1);
    }
});

    $.each(elemsToPaint, function(i, v) {
        // waybackground
        if (v == "NIGHT" ||
            v == "PORTRAIT" || 
            v == "SNOW" || 
            v == "WINTER" ) {
            console.log("i");
        console.log(i);
        orderedElems.push(v);

        elemsToPaint.splice(i,1);
    }
}); 

    $.each(elemsToPaint, function(i, v) {
        // background
        if (v == "MOON" ||
            v == "SUN" || 
            v == "AURORA_BOREALIS" ) {
            console.log("i");
        console.log(i);
        orderedElems.push(v);

        elemsToPaint.splice(i,1);
    }
});

    $.each(elemsToPaint, function(i, v) {
        // stillbackground
        if (v == "MOUNTAIN" ||
            v == "MOUNTAINS" || 
            v == "SNOWY_MOUNTAIN" ) {
            console.log("i");
        console.log(i);
        orderedElems.push(v);
        elemsToPaint.splice(i,1);

    }
});

    $.each(elemsToPaint, function(i, v) {
        // backmidground
        if (v == "CLOUDS" ||
            v == "CUMULUS" ||  
            v == "CIRRUS" ||  
            v == "HILLS" ) {
            console.log("i");
        console.log(i);
        orderedElems.push(v);
        elemsToPaint.splice(i,1);

    }
});

    $.each(elemsToPaint, function(i, v) {
        // midground
        if (v == "BEACH" ||
            v == "FARM" || 
            v == "GRASS" || 
            v == "WINTER" ) {
            console.log("i");
        console.log(i);
        orderedElems.push(v);

        elemsToPaint.splice(i,1);
    }
});

    $.each(elemsToPaint, function(i, v) {
        // midground
        if (v == "CLIFF" ||
            v == "OCEAN" || 
            v == "RIVER" ) {
            console.log("i");
        console.log(i);
        orderedElems.push(v);
        elemsToPaint.splice(i,1);

    }
});

    $.each(elemsToPaint, function(i, v) {
        // midground
        if (v == "FENCE" || 
            v == "STRUCTURE" || 
            v == "WINDMILL" || 
            v == "BUILDING" || 
            v == "CABIN" || 
            v == "BARN" || 
            v == "MILL") {
            console.log("i");
        console.log(i);
        orderedElems.push(v);
        elemsToPaint.splice(i,1);

    }
});

    $.each(elemsToPaint, function(i, v) {
        // midground
        if (v == "WAVES" || 
            v == "BUSHES" || 
            v == "CACTUS" || 
            v == "BOAT" || 
            v == "DOCK" || 
            v == "LAKES" || 
            v == "LAKE") {
            console.log("i");
        console.log(i);
        orderedElems.push(v);
        elemsToPaint.splice(i,1);

    }
});

    $.each(elemsToPaint, function(i, v) {
        // midground
        if (v == "LIGHTHOUSE" || 
            v == "BRIDGE" || 
            v == "CONIFER" || 
            v == "DECIDUOUS" || 
            v == "PATH" || 
            v == "PALM_TREES" || 
            v == "TREE" || 
            v == "TREES" || 
            v == "FIRE" || 
            v == "MILL") {
            console.log("i");
        console.log(i);
        orderedElems.push(v);
        elemsToPaint.splice(i,1);

    }
});


    $.each(elemsToPaint, function(i, v) {
        // midground
        if (v == "FOG" || 
            v == "PERSON" || 
            v == "RIVER" || 
            v == "ROCKS" || 
            v == "WATERFALL" ) {
            console.log("i");
        console.log(i);
        orderedElems.push(v);
        elemsToPaint.splice(i,1);

    }
});
    
    console.log("elemsToPaint");
    console.log(elemsToPaint);
    console.log("orderedElems");
    console.log(orderedElems);
    



    // $.each(elems, function(i, v) {
    //     if (v == "1" && (v == "CLOUDS" || v == "GRASS" || v == 'GRASS' || v == 'GRASS' || v == 'GRASS')) {
    //         console.log("i");
    //         console.log(i);
    //         paint(i);
    //     }
    // });


    // $.each(elemsToPaint, function(i, v) {
    //     // paint the midground
    //     if (v == '1') {
    //         elemsToPaint.push(i);
    //     }
    // });

    paint("BG");

    $.each(orderedElems, function(i, v) {
        // paint the foreground
        paint(v);
    });



}

// thanks to http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function LightenDarkenColor(col,amt) {
    var usePound = false;
    if ( col[0] == "#" ) {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}



function paint(x) {

    // context.globalCompositeOperation="source-in";


    // context.globalCompositeOperation="destination-over";

    switch (x) {
        case 'BG':

        var amt = Math.floor((Math.random() * 7) + 22);

        while (amt > 0) {

            context.globalAlpha = .1;

            var skyX = Math.floor((Math.random() * 240) + 1);
            var skyY = Math.floor((Math.random() * 130) + 170);

            var skySize = Math.floor((Math.random() * 20) + 200);

            var smallRand = Math.floor((Math.random() * 40) - 20);
            var smallRand2 = Math.floor((Math.random() * 40) - 20);


            var medRand = Math.floor((Math.random() * 100) - 50);

            var lgRand = Math.floor((Math.random() * 200) - 100);

            context.fillStyle = 'lightblue';

            context.beginPath();

            context.moveTo(78,220+medRand);

            context.quadraticCurveTo(80+smallRand2,70+medRand,202,100+medRand);

            context.quadraticCurveTo(320+smallRand2,30+medRand,402,220+medRand);


            context.quadraticCurveTo(200,220+medRand,78,220+medRand);
            context.fill();

            context.closePath();


            --amt;
        }

        context.globalAlpha = 1;
        context.closePath();



        break;
        case 'Apple_Frame':

        break;
        case 'Aurora_Borealis':

        break;
        case 'BARN':

        break;
        case 'BEACH':

        break;
        case 'BOAT':

        break;
        case 'BRIDGE':

        break;
        case 'BUILDING':

        break;
        case 'BUSHES':
            // draw between 2 and 4 bushes varying in size

            var amtOfBushes = Math.floor((Math.random() * 6) + 12);

            while (amtOfBushes > 0) {

                context.globalAlpha = .2;

                var bushX = Math.floor((Math.random() * 240) + 1);
                var bushY = Math.floor((Math.random() * 130) + 150);

                var bushSize = Math.floor((Math.random() * 20) + 11);

                var smallRand = Math.floor((Math.random() * 10) - 5);
                var smallRand2 = Math.floor((Math.random() * 10) - 5);

                if (bushY < 180) {
                    bushSize -= 10;
                } else if (bushY < 210) {
                    bushSize -= 7;
                } else if (bushY > 270) {
                    bushSize += 20;
                }

                context.fillStyle = 'green';

                var amtOfbigBushes = Math.floor((Math.random() * 6) + 5);

                context.globalAlpha = .1;

                while (amtOfbigBushes > 0) {

                    var smallRand3 = Math.floor((Math.random() * 5) - 2);
                    var smallRand4 = Math.floor((Math.random() * 5) - 3);

                    context.beginPath();
                    context.arc(bushX + 130+smallRand4, bushY - 5 +smallRand3, bushSize +smallRand3, 0, Math.PI * 2, true);
                    context.fill();

                    --amtOfbigBushes;
                }



                context.beginPath();
                context.arc(bushX + 110, bushY + smallRand, (bushSize * 2) / 3, 0, Math.PI * 2, true);
                context.fill();

                context.beginPath();
                context.arc(bushX + 145, bushY + smallRand2, (bushSize * 2) / 3, 0, Math.PI * 2, true);
                context.fill();
                --amtOfBushes;

            }

            context.globalAlpha = 1;
            context.closePath();

            break;
            case 'CABIN':

            break;
            case 'CACTUS':

            break;
            case 'CIRCLE_FRAME':

            break;
            case 'CIRRUS':

            break;
            case 'CLIFF':

            break;
            case 'CLOUDS':

            break;
            case 'CONIFER':

            break;
            case 'CUMULUS':

            break;
            case 'DECIDUOUS':

            var amtOfDeciduous = Math.floor((Math.random() * 3) + 5);

            var myColor = "fab300";

            while (amtOfDeciduous > 0) {

                context.globalAlpha = .2;

                myColor = LightenDarkenColor(myColor,5);
                var thePlaceTheColorIsUsed = ("#" + myColor);
                context.fillStyle = thePlaceTheColorIsUsed;
                

                console.log("myColor: " + myColor);
                

                var treeX = Math.floor((Math.random() * 240) + 1);
                var treeY = Math.floor((Math.random() * 120) + 105);

                var treeSize = Math.floor((Math.random() * 20) + 31);

                var smallRand = Math.floor((Math.random() * 10) - 5);
                var smallRand2 = Math.floor((Math.random() * 10) - 5);

                var smallRand3 = Math.floor((Math.random() * 8) - 5) / 10;
                var smallRand4 = Math.floor((Math.random() * 8) - 5) / 10;

                var smallRand5 = Math.floor((Math.random() * 8) - 5) / 10;

                var smallerRand7 = Math.floor((Math.random() * 50) - 25);
                var smallerRand8 = Math.floor((Math.random() * 50) - 30);

                if (treeY < 180) {
                    treeSize -= 10;
                } else if (treeY < 210) {
                    treeSize -= 7;
                } else if (treeY > 270) {
                    treeSize += 20;
                }

                // draw tree trunk
                

                // context.fillStyle = 'olive';
                // context.globalAlpha = .8;


                // context.beginPath();
                // context.arc(treeX + 115, treeY + smallRand, treeSize, 1.2 + smallRand3, 2.1 + smallRand4, true);
                // context.fill();

                

                context.globalAlpha = .2;

                var amtOfBush= Math.floor((Math.random() * 4) + 6);

                while (amtOfBush > 0) {

                    var smallRand5 = Math.floor((Math.random() * 20) - 10);
                    var smallRand6 = Math.floor((Math.random() * 20) - 10);

                    var smallRand7 = Math.floor((Math.random() * 14) - 7);
                    var smallRand8 = Math.floor((Math.random() * 14) - 7);

                    //draw trunk

                    context.globalAlpha = .2;
                    context.fillStyle = 'brown';

                    context.beginPath();

                    context.moveTo(treeX + 105 + smallRand7,treeY + smallRand7 + 20);


                    context.quadraticCurveTo(treeX + 115 + smallRand7,treeY + smallRand7 + 23,treeX + 125,treeY + smallRand7 + 20);


                    context.quadraticCurveTo(treeX + 119,treeY + smallRand7 + 80,treeX + 125,treeY + smallRand8 + 80);

                    context.quadraticCurveTo(treeX + 115,treeY + smallRand8 + 82,treeX + 105,treeY + smallRand7 + 80);

                    context.quadraticCurveTo(treeX + 106,treeY + smallRand7 + 80,treeX + 105,treeY + smallRand7 + 20);



                    context.fill();

                    context.closePath();



                    //context.fillRect(treeX + 105, treeY + smallRand + 20, 20, treeSize * 1.5);


                    context.fillStyle = thePlaceTheColorIsUsed;
                    myColor = LightenDarkenColor(myColor,1+smallRand);
                    var thePlaceTheColorIsUsed = ("#" + myColor);




                    // draw tree top
                    context.beginPath();
                    context.arc(treeX + 115, treeY + smallRand, treeSize+smallRand5, 1.2 + smallRand3, 2.1 + smallRand4, true);
                    context.fill();

                    --amtOfBush;

                    // draw tree top
                    context.beginPath();
                    context.arc(treeX + 115 + smallerRand7, treeY + smallRand, treeSize-10, 1.2 + smallRand3, 2.1 + smallRand4, true);
                    context.fill(); 

                    // draw tree top
                    context.beginPath();
                    context.arc(treeX + 115 + smallerRand8, treeY + smallRand, treeSize-10, 1.2 + smallRand3, 2.1 + smallRand4, true);
                    context.fill();

                }
                --amtOfDeciduous;
            }

            context.closePath();
            context.globalAlpha = 1;

            break;
            case 'DIANE_ANDRE':

            break;
            case 'DOCK':

            break;
            case 'DOUBLE_OVAL_FRAME':

            break;
            case 'FARM':

            break;
            case 'FENCE':

            break;
            case 'FIRE':

            break;
            case 'FLORIDA_FRAME':

            break;
            case 'FLOWERS':

            break;
            case 'FOG':

            break;
            case 'FRAMED':

            break;
            case 'GRASS':

            var amt = Math.floor((Math.random() * 7) + 2);

            while (amt > 0) {

                context.globalAlpha = .9;

                var grassX = Math.floor((Math.random() * 240) + 1);
                var grassY = Math.floor((Math.random() * 130) + 170);

                var grassSize = Math.floor((Math.random() * 20) + 200);

                var smallRand = Math.floor((Math.random() * 40) - 20);
                var smallRand2 = Math.floor((Math.random() * 40) - 20);


                var medRand = Math.floor((Math.random() * 100) - 50);

                var lgRand = Math.floor((Math.random() * 200) - 100);

                context.fillStyle = '#ccffcc';

                context.beginPath();

                context.moveTo(58,190+medRand);

                context.quadraticCurveTo(140+smallRand2,120+medRand,422,190+medRand);

                context.quadraticCurveTo(420+medRand,330+smallRand,260+medRand,270+medRand);

                context.quadraticCurveTo(160+medRand,330+smallRand,130+medRand,270+medRand);


                context.quadraticCurveTo(100,320+medRand,58,190+medRand);
                context.fill();

                context.closePath();


                --amt;
            }

            context.globalAlpha = 1;
            context.closePath();

            break;
            case 'GUEST':

            break;
            case 'HALF_CIRCLE_FRAME':

            break;
            case 'HALF_OVAL_FRAME':

            break;
            case 'HILLS':

            break;
            case 'LAKE':

            break;
            case 'LAKES':

            break;
            case 'LIGHTHOUSE':

            break;
            case 'MILL':

            break;
            case 'MOON':

            break;
            case 'MOUNTAIN':

            break;
            case 'MOUNTAINS':

            break;
            case 'NIGHT':

            break;
            case 'OCEAN':

            break;
            case 'OVAL_FRAME':

            break;
            case 'PALM_TREES':

            break;
            case 'PATH':

            break;
            case 'PERSON':

            break;
            case 'PORTRAIT':

            break;
            case 'RECTANGLE_3D_FRAME':

            break;
            case 'RECTANGULAR_FRAME':

            break;
            case 'RIVER':

            var amt = Math.floor((Math.random() * 10) + 5);

            var riverX = Math.floor((Math.random() * 240) + 1);
            var riverY = Math.floor((Math.random() * 50) + 250);

            var riverSize = Math.floor((Math.random() * 20) + 200);




            var medRand = Math.floor((Math.random() * 100) - 50);

            var lgRand = Math.floor((Math.random() * 200) - 100);
            var lgRand2 = Math.floor((Math.random() * 200) - 100);

            while (amt > 0) {

                context.globalAlpha = .1;

                var smallRand = Math.floor((Math.random() * 40) - 20);
                var smallRand2 = Math.floor((Math.random() * 80) - 40);

                

                context.fillStyle = 'blue';

                context.beginPath();

                context.moveTo(258+lgRand+smallRand,200+medRand);


                context.quadraticCurveTo(269+lgRand+smallRand,138+medRand+smallRand,298+lgRand,200+medRand+smallRand2);


                context.quadraticCurveTo(359+lgRand2+smallRand2,265+medRand,288+lgRand2,270+medRand);

                context.quadraticCurveTo(269+lgRand2,272+medRand,268+lgRand2,270+medRand);

                context.quadraticCurveTo(159+lgRand2+smallRand2,225+medRand,258+lgRand+smallRand,200+medRand);

                // context.quadraticCurveTo(249+lgRand2,270+medRand,248+lgRand2,270+medRand);

                //context.quadraticCurveTo(420+medRand,330+smallRand,260+medRand,270+medRand);

                //context.quadraticCurveTo(160+medRand,330+smallRand,130+medRand,270+medRand);


                context.fill();

                context.closePath();


                --amt;
            }

            context.globalAlpha = 1;
            context.closePath();


            break;
            case 'ROCKS':

            break;
            case 'SEASHELL_FRAME':

            break;
            case 'SNOW':

            break;
            case 'SNOWY_MOUNTAIN':

            break;
            case 'SPLIT_FRAME':

            break;
            case 'STEVE_ROSS':

            break;
            case 'STRUCTURE':

            break;
            case 'SUN':

            break;
            case 'TOMB_FRAME':

            break;
            case 'TREE':

            break;
            case 'TREES':

            break;
            case 'TRIPLE_FRAME':

            break;
            case 'WATERFALL':

            break;
            case 'WAVES':

            break;
            case 'WINDMILL':

            break;
            case 'WINDOW_FRAME':

            break;
            case 'WINTER':

            break;
            case 'WOOD_FRAMED':

            break;
            default:
            alert("Bob doesn\'t know how to draw that.");
        }
    }
