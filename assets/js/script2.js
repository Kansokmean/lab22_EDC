function edc2() {
    alert('សូមស្វាគមន៍មកកាន់ Website អគ្គីសនីជាតិកម្ពុជា');
    var id_cus = prompt('បញ្ចូលលេខសម្គាល់អតិថិជន:');
    var name_cus = prompt('បញ្ចូលឈ្មោះអតិថិជន:');
    var old_num = prompt('បញ្ចូលអំណានចាស់:');
    var new_num = prompt('បញ្ចូលអំណានថ្មី:');
    var usePerMonth = parseFloat(new_num) - parseFloat(old_num);
    if (usePerMonth < 0) {
        alert("តម្លៃអំណានថ្មីត្រូវតែធំជាង អំណានចាស់!សូមព្យាយាមម្ដងទៀត ។");
        location.href = "/index.html";

    }else{
        var trash = confirm("តើអ្នកចង់បង់ថ្លៃសំរាមដែរឬទេ?");
        var costTrash = 0;
        if (trash) {
            costTrash = prompt('សូមបញ្ចូលតម្លៃសម្រាម(10000៛/20000៛/30000៛):');
        } else {
            costTrash = 0;
        }
    }
    var getID = document.getElementById('getID');
    var getName = document.getElementById('getName');
    var getOldnum = document.getElementById('getOldnum');
    var getNewnum = document.getElementById('getNewnum');
    var getusePermonth = document.getElementById('getusePermonth');
    var amountCost = 0;
    var costPer = 0;

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

    getID.innerHTML = id_cus || 0;
    getName.innerHTML = name_cus || 0;
    getOldnum.innerHTML = old_num || 0;
    getNewnum.innerHTML = new_num || 0;
    getusePermonth.innerHTML = usePerMonth || 0;
    getTrashCost.innerHTML = costTrash + "៛";
    document.getElementById('getcostPerKw').innerHTML = costPer + "៛";
    document.getElementById('total').innerHTML = (amountCost + parseFloat(costTrash)) + "៛";
}
edc2();