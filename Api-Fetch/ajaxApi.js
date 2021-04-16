

// Instantiate an new XHR Object
const xhr = new XMLHttpRequest();

// Open an obejct (GET/POST, PATH,
// ASYN-TRUE/FALSE)
xhr.open("GET", 
"https://run.mocky.io/v3/16375822-6d22-4d61-b131-6672e9e13884", true);

// When response is ready
xhr.onload = function () {
  if (this.status === 200) {

      // Changing string data into JSON Object
      obj = JSON.parse(this.responseText);

      console.log(obj);
      let companyName = obj.restaurantsDetails.companyName;
      let address = obj.restaurantsDetails.address;
      let city = obj.restaurantsDetails.city;
      let state = obj.restaurantsDetails.state;
      let email = obj.restaurantsDetails.email;
      let phone = obj.restaurantsDetails.phone;
      let gstNo = obj.restaurantsDetails.gstNo;
      let no = obj.orderBookDetails.orderItemsList.length;
      let menu_name = obj.orderBookDetails.orderItemsList[0].menu_name;
      let menu_price = obj.orderBookDetails.orderItemsList[0].menu_price;
      let menu_quantity = obj.orderBookDetails.orderItemsList[0].menu_quantity;
      let menu_amount = obj.orderBookDetails.orderItemsList[0].menu_amount;
      let sub_total = obj.orderBookDetails.sub_total;
      let discount = obj.orderBookDetails.discount;
      let grand_total = obj.orderBookDetails.grand_total;
      let timestamp = obj.orderBookDetails.timestamp;
 

      $(".no").append(no);
      $(".menu_name").append(menu_name);
      $(".menu_price").append(menu_price);
      $(".menu_quantity").append(menu_quantity);
      $(".menu_amount").append(menu_amount);
      $("h5").append(companyName);
      $(".addrctst").append(address +" "+"City-"+city+","+" "+"State-"+state);
      $(".pheml").append("Phone Number-"+phone+","+"Email-"+email);
      $(".gst").append("GST No-"+gstNo);
      $(".sub_total").append(sub_total);
      $(".discount").append(discount+".00");
      $(".discount_title").append("Discount("+discount+"%)");
      $(".grand_total").append(grand_total);
      $(".timestamp").append(timestamp);
  }
}

// At last send the request
xhr.send();
