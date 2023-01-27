$( document ).ready(function() {    
    $.get('https://cbq6kopchvryw4nn6wuz6cvdxq0xblhp.lambda-url.us-east-1.on.aws/', function(data, status)
    {
        data.forEach(element => {
          document.getElementById('products').innerHTML += 
              `<div class="card">
                  <img src="${element[3]}" alt="Avatar" style="width:100%">
                  <a href="product.html?id=${element[0]}" ><div class="mt-3 text-center infoWrapper">
                      <h4><b>${element[1]}</b></h4>
                      <p>Price: ${element[2]}</p>
                  </div></a>
              </div>`;
        });
    });
});