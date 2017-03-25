/**
 * Injects Grub function into the necesary data from the Yelp API. Grubbiness 
 * is a unit of how much the restaurant would be recommeded. 
 */
GrubCriticApp.prototype.injectGrub = function (YelpBiz) {
    /** The Grubbiness Constant; Calculated with vigous trials and tests */
    var grubbiness = 1;
    YelpBiz.distace /= 1000;
    YelpBiz.getGrubiness = grubbiness * YelpBiz.rating / (YelpBiz.price * YelpBiz.distance);
};
