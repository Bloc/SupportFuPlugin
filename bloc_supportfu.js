console.log("Loaded bloc Supportfu integration");
find_email = function() {
    email = jQuery('.contacts .contact span.field-value').text()
    return email;
};

search_bloc = function(email) {

};

jQuery(document).click(function() {
    email = find_email();
    if (email) {
        console.log(email);
    }
});
