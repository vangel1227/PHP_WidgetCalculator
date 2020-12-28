// Script handles and validates calculator form submission

// Execute function when document ready
$(function() {

	// Hides all error messages, errorMessage class is only in spans within form inputs
	$('.errorMessage').hide();

	// Form submission event handler
	$('#calculator').submit(function() {

		// Initialize variables
		var quantity, price, tax, total;

		// Quantity validation
		if ($('#quantity').val() > 0) {

			// Get quantity and assign value
			quantity = $('#quantity').val();

            // Clear error, if one existed and value assigned
            // Useful for when a user intially enters an invliad entrey and then corrects it
			$('#quantityP').removeClass('error');

			// Hide error message, if visible
			$('#quantityError').hide();

		} else { // If invalid

			// Add error class
			$('#quantityP').addClass('error');

			// Show error message
			$('#quantityError').show();

		}

        // Validate price
        // To ensure functionality, set novalidate attribute to HTML form in calculator.html
        // Adds to error class if invalid and shows/hides accordingly 
		if ($('#price').val() > 0) {
			price = $('#price').val();
			$('#priceP').removeClass('error');
			$('#priceError').hide();
		} else {
			$('#priceP').addClass('error');
			$('#priceError').show();
		}

		// Validate tax, same as price
		if ($('#tax').val() > 0) {
			tax = $('#tax').val();
			$('#taxP').removeClass('error');
			$('#taxError').hide();
		} else {
			$('#taxP').addClass('error');
			$('#taxError').show();
		}

		// If all passes, perform calculations
		if (quantity && price && tax) {

			total = quantity * price;
			total += total * (tax/100);

			// Display the results
			$('#results').html('The total is <strong>$' + total + '</strong>.');

		}

        // Return false to prevent an actual form submission in the HTML form's action attribute
        // If JS disabled, then form submitted to action PHP file. 
		return false;

	}); // End form submission

}); // End document ready
