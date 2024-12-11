var id_cus = document.getElementById('id-cus');
var name_cus = document.getElementById('name-cus');
var old_num = document.getElementById('old-num');
var new_num = document.getElementById('new-num');
var trash = document.getElementById('trash');
var costTrash = document.getElementById('costTrash');

function edcCal() {
    document.getElementById('boxempty').classList.add('d-none');
    document.getElementById('invoice').classList.remove('d-none');
    var getID = document.getElementById('getID');
    var getName = document.getElementById('getName');
    var getOldnum = document.getElementById('getOldnum');
    var getNewnum = document.getElementById('getNewnum');
    var getTrashCost = document.getElementById('getTrashCost');
    var amountCost = 0;
    var costPer = 0;

    var usePerMonth = parseFloat(new_num.value) - parseFloat(old_num.value);
    if (usePerMonth < 0) {
        alert("តម្លៃអំណានថ្មីត្រូវតែធំជាង អំណានចាស់!សូមព្យាយាមម្ដងទៀត ។");
        document.getElementById('boxempty').classList.remove('d-none');
        document.getElementById('invoice').classList.add('d-none');
        return;
    }
    if (usePerMonth > 0 && usePerMonth < 51) {
        costPer = 500;
    } else if (usePerMonth <= 100) {
        costPer = 1000;
    } else if (usePerMonth <= 150) {
        costPer = 1500;
    } else if (usePerMonth <= 200) {
        costPer = 2000;
    } else if (usePerMonth > 200) {
        costPer = 2500;
    } else {
        costPer = 1;
    }
    amountCost = parseFloat(usePerMonth) * parseFloat(costPer);

    getID.innerHTML = id_cus.value || 0;
    getName.innerHTML = name_cus.value || 0;
    getOldnum.innerHTML = old_num.value || 0;
    getNewnum.innerHTML = new_num.value || 0;
    var TrashCost = 0;
    if (trash.checked) {
        getTrashCost.innerHTML = costTrash.value + "៛";
        TrashCost = costTrash.value;
    } else {
        TrashCost = 0;
    }
    getusePermonth.innerHTML = usePerMonth || 0;
    document.getElementById('getcostPerKw').innerHTML = costPer + "៛";
    document.getElementById('total').innerHTML = (amountCost + parseFloat(TrashCost)) + "៛";

}

function btnclear() {
    document.getElementById('boxempty').classList.remove('d-none');
    document.getElementById('invoice').classList.add('d-none');
    id_cus.value = "";
    name_cus.value = "";
    old_num.value = "";
    new_num.value = "";
}
