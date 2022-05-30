function exeCp (lineno) {
    let tgtline = document.getElementById('label' + lineno).innerText;
    //console.log('label' + lineno);
    console.log(tgtline);
    navigator.clipboard.writeText(tgtline);
    //alert("何かおきました！ " + tgtline);
}


function valueChange(event){
    //alert("何かおきました！ " + event.currentTarget);
    //alert("何かおきました！ " + event.target);
    console.log(event);
    let lineall = document.getElementsByName('hilight');

    let hitline = [];
    console.log(lineall[0].value);
    //lineall.forEach(chkflag => console.log(chkflag.checked));
    lineall.forEach(chkflag => {
        //console.log(chkflag.checked)
        if (chkflag.checked == true) {
            console.log(chkflag.id);
            exeCp(chkflag.id);
        }
    });
}

let travelbox = document.getElementById('txtline');
travelbox.addEventListener('change', valueChange);

//let selectradio = document.getElementsById('line3');
//selectradio.addEventListener('change', valueChange);


