;(function(){

var client ="";
var name = "";
var CC = "";
var tel = "";
var address = "";
var address1 = "";
var city = "";
var department = "";
var SKU = "";
var price = "";
var quantity = 1;
var price_ship = "";
var sale_number = "";

var datapost = {
    customer_id: 6472,
    payment_method: 'other',
    payment_method_title: 'Pago Mercado Pago',
    set_paid: true,
    customer_note: "",
    billing: {
      first_name: '',
      last_name: '',
      company: "",
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      postcode: '',
      country: 'Colombia',
      email: 'mercadolibre@electronilab.co',
      phone: ''
    },
    shipping: {
      first_name: '',
      last_name: '',
      company: "",
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      postcode: '',
      country: 'Colombia'
    },
    line_items: [
      {
        sku: "",
        total: "",
        quantity: 1
      }
    ],
    shipping_lines: [
      {
        method_id: 'flat_rate',
        method_title: 'Envio',
        total: "0"
      }
    ]
  };

var init = function(){

  //////////////////GET////////////////

  client = document.querySelector("#root-app > div > div.sc-detail-section > div > div:nth-child(3) > div > div > div.sc-buyer__content > div > div.sc-title-subtitle-action__label");
  client = client.innerHTML;
  // console.log(client);
  name = client.split('<b>').pop().split('</b>')[0];
  console.log(name);
  client = client.split('|');
  if (client[2]) {
    CC = client[2].trim();
  }
  console.log(CC);
  if (client[3]) {
    tel = client[3].replace("Tel ","").trim();
  }
  console.log(tel);

  address = document.querySelector("#root-app > div > div.sc-detail-section > div > div:nth-child(4) > div > div > div.sc-title-subtitle-action.sc-title-subtitle-action--default > div.sc-title-subtitle-action__container > div");
  
  try {
    address = address.innerHTML;
    address = address.split(',');
    address1 = address[0].trim();
    console.log(address1);
    city = address[1].trim();
    console.log(city);
    if (address[2]) {
      department = address[2].trim();
    }
    else{
      department =address[1].trim();
    }
    console.log(department);
  }
  
  catch(error) {
    console.log(error);
    address = "";
    address1 = "";
    address2 = "";
  }

  SKU = document.querySelector("#root-app > div > div.sc-detail-section > div > div:nth-child(4) > div > div > div.sc-row-content > div > div.sc-title > div > div > div");
  SKU = SKU.innerHTML;
  SKU = SKU.replace("SKU ", "");
  console.log(SKU);

  price = document.querySelector("#root-app > div > div.sc-account-section > div > div.sc-account-module > div:nth-child(2) > ul > li > div.sc-account-rows__row__amount");
  price = price.innerHTML.replace("$ ", "");
  price = price.split('.').join("");
  price = parseInt(price, 10);
  console.log(price);

  quantity = document.querySelector("#root-app > div > div.sc-detail-section > div > div:nth-child(4) > div > div > div.sc-row-content > div > div.sc-quantity > span");
  quantity = quantity.innerHTML;
  quantity = parseInt(quantity, 10);
  console.log(quantity);

  price_ship = document.querySelector("#root-app > div > div.sc-account-section > div > div.sc-account-module > div:nth-child(2) > ul > li:nth-child(2) > div.sc-account-rows__row__amount");
  if (price_ship==null) {
    price_ship = 0;
  }
  else{
    price_ship = price_ship.innerHTML.replace("$ ", "");
    price_ship = price_ship.split('.').join("");
    price_ship = parseInt(price_ship, 10);
  }
  console.log(price_ship);

  sale_number =   document.querySelector("#root-app > div > div.sc-detail-section > div > div.sc-page-title > div > div.sc-title-subtitle-action__container > div > p")
  sale_number = sale_number.innerHTML.split('|');
  sale_number = sale_number[0]+"ML";
  console.log(sale_number);

  //////////////////SENT////////////////////
  datapost.billing.first_name = name;
  datapost.billing.company = CC;
  datapost.billing.phone = tel;
  datapost.billing.address_1 = address1;
  datapost.billing.city = city;
  datapost.billing.state = department;

  datapost.shipping.first_name = name;
  datapost.shipping.company = CC;
  datapost.shipping.phone = tel;
  datapost.shipping.address_1 = address1;
  datapost.shipping.city = city;
  datapost.shipping.state = department;

  datapost.line_items[0].sku = SKU;
  datapost.line_items[0].total = price.toString();
  datapost.line_items[0].quantity = quantity;
  datapost.shipping_lines[0].total = price_ship.toString();

  datapost.customer_note = sale_number;
  
  // console.log(datapost);

  $.ajax({
    type: "POST",
    url: urlpost,
    data: JSON.stringify(datapost),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data){console.log(data);alert("¡Pedido creado con éxito!");},
    failure: function(errMsg) {
        console.log(errMsg);
    }
  });

  console.log("ORDEN ENVIADA");

}

init();

})(window);