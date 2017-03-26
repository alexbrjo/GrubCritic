GrubCriticApp.prototype.parse = function (spot) {
    var root = document.getElementById("spot-wrapper");
    var grade = spot.grade;
    var grade_text;
    if (grade > 0.97) grade_text = "A+";
    else if (grade > 0.93) grade_text = "A";
    else if (grade > 0.90) grade_text = "A-";
    else if (grade > 0.87) grade_text = "B+";
    else if (grade > 0.83) grade_text = "B";
    else if (grade > 0.80) grade_text = "B-";
    else if (grade > 0.77) grade_text = "C+";
    else if (grade > 0.73) grade_text = "C";
    else if (grade > 0.70) grade_text = "C-";
    else if (grade > 0.67) grade_text = "D+";
    else if (grade > 0.63) grade_text = "D";
    else if (grade > 0.60) grade_text = "D-";
    else grade_text = "F";
    
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
