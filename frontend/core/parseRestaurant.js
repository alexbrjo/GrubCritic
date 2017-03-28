/**
 * Parses a Yelp business (using text, yikes) and inserts into the restaurant
 * list. 
 */
GrubCriticApp.prototype.parse = function (spot, markers) {
    var root = document.getElementById("spot-wrapper");
    var grade = spot.grade;
    var grade_text;
    var loc = spot.coordinates;
    markers.push(new google.maps.Marker({
        position: {lat: loc.latitude, lng: loc.longitude},
        map: map,
        title: spot.name
    }));
    
    // Determine grade text
    if (grade > 0.9) grade_text = "A";
    else if (grade > 0.80) grade_text = "B";
    else if (grade > 0.70) grade_text = "C";
    else if (grade > 0.60) grade_text = "D";
    else grade_text = "F";
    
    // add + or - if not F
    if (grade > 0.6) {
        if (grade % 0.1 > 0.08) grade_text += "+";
        else if (grade % 0.1 < 0.02) grade_text += "-";
    }
    
    if(spot.name.length > 15){
        spot.name = spot.name.substring(0, 15);
    }
    root.innerHTML += "<div class=spot-inner><div class=spot-details>" +
            "<a href=\"" + spot.url +
            "\"><div class=title>" + spot.name + 
            "</div><div class=category>" + spot.categories[0].title + 
            "</div><div class=priceRating><div class=price>" + spot.price +
            "</div><div class=rating>"+ spot.rating +
            "/ 5.0</div></div></a></div><div class=grubiness>" + grade_text +
            "</div></div>";
};
