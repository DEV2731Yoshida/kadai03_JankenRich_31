// jqueryについて


function Audio(e) {
    document.getElementById(e).currentTime = 0; 
    //    ↑
    //  連続クリックに対応するコード

    document.getElementById(e).play(); 
    //    ↑ 
    //  クリックしたら音を再生するコード
}


$("#gu_btn").on('click', function(){

    var random = Math.floor(Math.random() * 3);
    console.log(random, 'ランダムな箱')

    if(random === 0){
        console.log("波動拳") 
        $("#pc_hands").html('波動拳')
        $("#judgment").html('引き分け')
    }else if(random === 1){
        console.log("昇龍拳") 
        $("#pc_hands").html('昇龍拳')
        $("#judgment").html('YOU  WIN')
    }else if(random === 2){
        console.log("竜巻旋風脚")
        $("#pc_hands").html('竜巻旋風脚')
        $("#judgment").html('YOU  LOSE')
    }
})




$("#cho_btn").on('click', function(){

    var random = Math.floor(Math.random() * 3);
    console.log(random, 'ランダムな箱')
    
    if(random === 0){
        console.log("波動拳") 
        $("#pc_hands").html('波動拳')
        $("#judgment").html('YOU  LOSE')
    }else if(random === 1){
        console.log("昇龍拳") 
        $("#pc_hands").html('昇龍拳')
        $("#judgment").html('引き分け')
    }else if(random === 2){
        console.log("竜巻旋風脚")
        $("#pc_hands").html('竜巻旋風脚')
        $("#judgment").html('YOU  WIN')
    }
})




$("#par_btn").on('click', function(){

    var random = Math.floor(Math.random() * 3);
    console.log(random, 'ランダムな箱')
    
    if(random === 0){
        console.log("波動拳") 
        $("#pc_hands").html('波動拳')
        $("#judgment").html('YOU  WIN')
    }else if(random === 1){
        console.log("昇龍拳") 
        $("#pc_hands").html('昇龍拳')
        $("#judgment").html('YOU  LOSE')
    }else if(random === 2){
        console.log("竜巻旋風脚")
        $("#pc_hands").html('竜巻旋風脚')
        $("#judgment").html('引き分け')
    }
    
})
