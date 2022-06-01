function exeCp (lineno) {
    let tgtline = document.getElementById('label' + lineno).innerText;
    //console.log('label' + lineno);
    //console.log(tgtline);
    navigator.clipboard.writeText(tgtline);
    //alert("copydoc" + tgtline);
}


function valueChange(event){
    //alert("clipboard is " + event.target);
    //console.log(event);
    let lineall = document.getElementsByName('hilight');

    let hitline = [];
    //console.log(lineall[0].value);
    //lineall.forEach(chkflag => console.log(chkflag.checked));
    lineall.forEach(chkflag => {
        //console.log(chkflag.checked)
        if (chkflag.checked == true) {
            //console.log(chkflag.id);
            exeCp(chkflag.id);
        }
    });
}

let lineselect = document.getElementById('txtline');
lineselect.addEventListener('change', valueChange);

//let selectradio = document.getElementsById('line3');
//selectradio.addEventListener('change', valueChange);


