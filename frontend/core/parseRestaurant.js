/**
 * Parses a Yelp business (using text, yikes) and inserts into the restaurant
 * list. 
 */
GrubCriticApp.prototype.parse = function (spot) {
    var grade = spot.grade;
    var grade_text;
    
    // Determine grade text
    var color = "green";
    if (grade > 0.9) {
        grade_text = "A";
    } else if (grade > 0.80) {
        grade_text = "B";
        color = "yelgrn";
    } else if (grade > 0.70) {
        grade_text = "C";
        color = "yellow";
    } else if (grade > 0.60) {
        grade_text = "D";
        color = "orange";
    } else {
        grade_text = "F";
        color = "red";
    }
    
    // add + or - if not F
    if (grade > 0.6) {
        if (grade % 0.1 > 0.08) grade_text += "+";
        else if (grade % 0.1 < 0.02) grade_text += "-";
    }
    
    var name = spot.name;
    if(name.length > 13){
        name = name.substring(0, 13);
    }
    
    this.list.innerHTML += "<div class=spot-inner><div class=spot-details>" +
            "<a href=\"" + spot.url +
            "\"><div class=title>" + name + 
            "...</div><div class=category>" + spot.categories[0].title + 
            "</div><div class=priceRating><div class=price>" + spot.price +
            "</div><div class=rating>"+ spot.rating +
            "/ 5.0</div></div></a></div><div class=\"grubiness " + color + "\">" + grade_text +
            "</div></div>";
};
