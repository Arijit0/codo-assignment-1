// Document is ready
$(document).ready(function () {

    $("#successModal").hide();
	
    // Validate Fullname
        $('#fullnameblank').hide();	
        let fullnameError = true;
        $('#fullNameinput').keyup(function () {
            validateFullname();
        });
        
        function validateFullname() {
        let fullnameValue = $('#fullNameinput').val();
        if (fullnameValue.length == "") {
        $('#fullnameblank').show();
        $('#fullNameinput').addClass('is-invalid')
            fullnameError = false;
            return false;
        } else {
            $('#fullnameblank').hide();
            $('#fullNameinput').removeClass('is-invalid');
            $('#fullNameinput').addClass('is-valid');
            fullnameError = true;
            return true;
        }
        }

        // Validate Age
        $('#ageblank').hide();	
        let ageError = true;
        $('#ageinput').keyup(function () {
            validateAge();
        });
        
        function validateAge() {
        let ageValue = $('#ageinput').val();
        if (ageValue.length == "") {
        $('#ageblank').show();
        $('#ageinput').addClass('is-invalid')
            ageError = false;
            return false;
        } else {
            $('#ageblank').hide();
            $('#ageinput').removeClass('is-invalid');
            $('#ageinput').addClass('is-valid');
            ageError = true;
            return true;
        }
        }

         // Validate About Yourself
         $('#AboutYourselfblank').hide();	
         let aboutyourselfError = true;
         $('#AboutYourselfinput').keyup(function () {
            validateAboutYourself();
         });
         
         function validateAboutYourself() {
         let aboutYourselfValue = $('#AboutYourselfinput').val();
         if (aboutYourselfValue.length == "") {
        $('#AboutYourselfblank').removeClass('valid-feedback');
        $('#AboutYourselfinput').addClass('is-invalid');
        $('#AboutYourselfblank').add();
        $('#AboutYourselfblank').show();
         aboutyourselfError = false;
             return false;
         } else if (aboutYourselfValue.length > 250) {
            $('#AboutYourselfblank').removeClass('valid-feedback');
            $('#AboutYourselfinput').addClass('is-invalid');
            $('#AboutYourselfblank').addClass('invalid-feedback');
            $('#AboutYourselfblank').add();
            $('#AboutYourselfblank').html("**length must not exceed 250 characters**");
            aboutyourselfError = false;
             return false;
         } else if (aboutYourselfValue.length < 250) {
            $('#AboutYourselfinput').removeClass('is-invalid');
            $('#AboutYourselfinput').addClass('is-valid');
            $('#AboutYourselfblank').removeClass('invalid-feedback');
            $('#AboutYourselfblank').addClass('valid-feedback');
            $('#AboutYourselfblank').remove();
            aboutyourselfError = true;
             return true;
         }
         else {
             $('#ageblank').hide();
             $('#AboutYourselfinput').removeClass('is-invalid');
             $('#AboutYourselfinput').addClass('is-valid');
             aboutyourselfError = true;
             return true;
         }
         }

        // Validate Dropdown

       function validateDropdown() {
        $('#dropdownSelectblank').hide();
           var dropdownError = true;
            var dropdownSelect = $("#dropdownSelectinput");
            if (dropdownSelect.val() == "Choose...") {
                
                $('#dropdownSelectblank').show();
                $('#AboutYourselfinput').addClass('is-invalid');
                dropdownError = false
                return false;
            } else {
                $('#dropdownSelectblank').hide();
                // $('#AboutYourselfinput').removeClass('is-invalid');
                // $('#AboutYourselfinput').addClass('is-valid');
                // dropdownError = true;
                
            }    
        }

        function validateGender() {
            $("#radioblank").hide();
            var atLeastOneChecked = false;
            var isChecked = jQuery("input[name=inlineRadioOptions]:checked").val();
            if (isChecked == undefined) {
                alert(isChecked);
                $("#radioblank").show();
            } else {
                alert(isChecked);
                $("#radioblank").hide();
                atLeastOneChecked = true;
                // return true;
            }
        }

        function validateresume() {
            var fileUploadError = true;
            var fileBlank = $("#cvupload").val();
            if(fileBlank == "") {
                alert("Please upload you cv");
                fileUploadError = false;
            }
            $("#cvupload").change(function () {
                var fileExtension = ['doc', 'docx', 'pdf'];
                if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
                    alert("Only '.doc','.docx', '.pdf' formats are allowed.");
                    fileUploadError = false;
                }
            });
        }
    
       function validateUpload() {
        alert("Uploaded Successfully!");
        }

        function  uploadErr() {
            alert("Please fill all the fields");
        }
        
    // Submit button
        $('#submitbtn').click(function () {
            validateFullname();
            validateAge();
            validateAboutYourself();
            validateDropdown();
            validateGender();
            validateresume();
            if((fullnameError == true) && (ageError == true) && 
            (aboutyourselfError == true) && (fileUploadError == true)) {
                validateUpload();
                return true;
            } else {
                uploadErr();
                return false;
            }   
        });
    });