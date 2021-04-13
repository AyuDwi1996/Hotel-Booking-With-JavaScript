function price(){
    var personCount = document.getElementById("adult").value;
    var to = new Date(document.getElementById("toDate").value).getDate();
    var fr = new Date(document.getElementById("fromDate").value).getDate();
    var days = to - fr;
    console.log(days);
    var totalPrice = personCount * 1000 * days;
    document.getElementById("price").value = totalPrice;
    }
    document.getElementById("adult").addEventListener("change", price);
    
    function toDateChange(){
        var result = new Date(document.getElementById("fromDate").value);
        var month = ( result.getMonth());
        var day = (result.getDate()+1);
        var year = (result.getFullYear());
        var finalResult = year + "-" + "0"+month + "-" + day;
        document.getElementById("toDate").value = finalResult;
    }
    document.getElementById("fromDate").addEventListener("change", toDateChange);