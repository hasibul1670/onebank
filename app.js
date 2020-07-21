var btn = document.getElementById("login-button");

btn.addEventListener("click", function () {

    var area = document.getElementById("login-area");
    area.style.display = "none";

    var txnarea = document.getElementById("txn-area");
    txnarea.style.display = "block";

})

//deposit button event handaler//

var depo = document.getElementById("adddep");
depo.addEventListener("click", function () {

    var deponumber = input("depoammount");

    span("currentbal", deponumber);
    span("currentdepo", deponumber);
    document.getElementById("depoammount").value = "";

})
/////////////////////////////wihdraww.///////////////////
var wbtn = document.getElementById("addw");
wbtn.addEventListener("click", function () {
    var wnumber = input("wa");

  span("cw",wnumber);
  span("currentbal", -1 *wnumber);
  document.getElementById("wa").value = "";
})

function input(id){
    var ammount = document.getElementById(id).value;
    var number = parseFloat(ammount);
    return number;

}


function span(id, deponumber) {

        const current = document.getElementById(id).innerText;
        const currentnum = parseFloat(current);
        const total = deponumber + currentnum;
        document.getElementById(id).innerText = total;
    }
