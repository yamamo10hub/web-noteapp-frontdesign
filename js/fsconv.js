let form = document.forms.docUpload;

form.upfile.addEventListener('change', function (e) {

let result = e.target.files[0];
console.log(result);
const reader = new FileReader();

reader.onload = () => {
    //console.log(reader.result);
    //let tgtdom = document.getElementById('op3');
    let tgtdom = document.getElementById('txtline');
    while(tgtdom.firstChild){
        tgtdom.removeChild(tgtdom.firstChild);
    }
    //tgtdom.innerText = "hoge";
    //for (let i in reader.result) {
    //}
    //console.log(typeof(reader.result))
    const contmap = reader.result.split(/\r\n|\n/);
    //console.log(contmap);

    let docbody = "";
    //for (let i in contmap) {
    for (let i = 1; i <= contmap.length; i++) {
        const newrow = document.createElement("div");
        //newrow.setAttribute("class","txtcell");
        newrow.className = "txtcell";
        const rd = document.createElement("input");
        rd.setAttribute("type","radio");
        rd.setAttribute("name","hilight");
        rd.setAttribute("id","line" + i);
        rd.setAttribute("value",i);
        const lb = document.createElement("label");
        lb.setAttribute("for","line" + i);
        //lb.setAttribute("class","label" + i);
        lb.setAttribute("id","labelline" + i);
        lb.className = "label";
        //lb.setAttribute("class","label");
        lb.innerText = contmap[i-1];
        newrow.appendChild(rd);
        newrow.appendChild(lb);
        tgtdom.appendChild(newrow);
    }
    //tgtdom.innerText = docbody;
}
reader.readAsText(result);

//reader.addEventListener('load', function() {
//    //form.output.textContent = reader.result;
//    //form.op3.textContent = "hoge";
//    let tgtdom = document.getElementById('op3');
//    tgtdom.innerText = "hoge";
//    for (let i in reader.result) {
//    }
//    const contmap = reader.result.map( x => {
//        let y = `<div class="txtcell">
//        <input type="radio" name="hilight" id="line3" value="3">
//        <label for="line3" class="label" id="labelline3">` + 
//        x + `</label>
//        </div>`
//        return y;
//    });
//    console.log(contmap);
//})

})