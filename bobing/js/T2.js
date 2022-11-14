(function (){  
    let odice1 = document.querySelector('.dice1');
    let odice2 = document.querySelector('.dice2');
    let odice3 = document.querySelector('.dice3');
    let odice4 = document.querySelector('.dice4');
    let odice5 = document.querySelector('.dice5');
    let odice6 = document.querySelector('.dice6');

    let oview1 = document.querySelector('.view1');
    let oview2 = document.querySelector('.view2');

    let oplay = document.querySelector('#throw'); // 按钮

    var arr = [];
    var clock = 0;
    var clock1 = 0;

    var selectnum = document.getElementById("selectpeo");
    document.getElementById("throw").addEventListener('click',function(){
        if(selectnum.options[0].selected){
            num=5;
        }else if(selectnum.options[1].selected){
           num=6;
        }else if(selectnum.options[2].selected){
            num=7;
        }else if(selectnum.options[3].selected){
            num=8;
        }else if(selectnum.options[4].selected){
            num=9;
        }else if(selectnum.options[5].selected){
            num=10;
        }
    },true);

    var resultArr = [0,0,0,0,0,0,0,0,0,0,0,0];

    oplay.onclick = playTheGame;

    function playTheGame() { // 游戏方法

        

        // 骰子转起来  
        
        // 有的时候浏览器在连续使用js操作css的时候会出现问题（反应不过来），比如，效果不能正常显示，此时可以尝试利用setTimeout-0来将目标代码放入到异步队列中等待执行
        // setTimeout(() => {
            odice1.style.animationName = 'rotate'
            odice2.style.animationName = 'rotate'
            odice3.style.animationName = 'rotate'
            odice4.style.animationName = 'rotate'
            odice5.style.animationName = 'rotate'
            odice6.style.animationName = 'rotate'
        // }, 0);  

        //  存储当前随机数组
        var NumberArr = [];

        var a = Math.floor(Math.random() * 6),
            b = Math.floor(Math.random() * 6),
            c = Math.floor(Math.random() * 6),
            d = Math.floor(Math.random() * 6),
            e = Math.floor(Math.random() * 6),
            f = Math.floor(Math.random() * 6);

        // 当骰子动画执行后
        odice1.addEventListener('webkitAnimationEnd', () => {
            odice1.style.animationName = 'none' // 更改动画属性，以待下一次动画的正常执行
            // 可能出现的情况集合
            let _posible = [
                { value: 1, x: 0, y: 0 },
                { value: 6, x: 0, y: 180 },
                { value: 3, x: 0, y: -90 },
                { value: 4, x: 0, y: 90 },
                { value: 5, x: -90, y: 0 },
                { value: 2, x: 90, y: 0 },
            ]
            // 准备抽取的随机数
            // 抽取的随机结果
            let _result1 = _posible[a]
            setTimeout(() => { // 浏览器反应不过来加过渡
                // 让骰子旋转到正确的角度
                odice1.style.transform = ` 
                    rotateX(${ _result1.x }deg) rotateY(${ _result1.y }deg)
                `  
            }, 0);  
        })
    

        // 当骰子动画执行后
        odice2.addEventListener('webkitAnimationEnd', () => {
            odice2.style.animationName = 'none' // 更改动画属性，以待下一次动画的正常执行
            // 可能出现的情况集合
            let _posible = [
                { value: 1, x: 0, y: 0 },
                { value: 6, x: 0, y: 180 },
                { value: 3, x: 0, y: -90 },
                { value: 4, x: 0, y: 90 },
                { value: 5, x: -90, y: 0 },
                { value: 2, x: 90, y: 0 },
            ]
            // 准备抽取的随机数
            // 抽取的随机结果
            let _result2 = _posible[b]
            setTimeout(() => { // 浏览器反应不过来加过渡
                // 让骰子旋转到正确的角度
                odice2.style.transform = ` 
                    rotateX(${ _result2.x }deg) rotateY(${ _result2.y }deg)
                `  
            }, 0);
        })

        // 当骰子动画执行后
        odice3.addEventListener('webkitAnimationEnd', () => {
            odice3.style.animationName = 'none' // 更改动画属性，以待下一次动画的正常执行
            // 可能出现的情况集合
            let _posible = [
                { value: 1, x: 0, y: 0 },
                { value: 6, x: 0, y: 180 },
                { value: 3, x: 0, y: -90 },
                { value: 4, x: 0, y: 90 },
                { value: 5, x: -90, y: 0 },
                { value: 2, x: 90, y: 0 },
            ]
            // 准备抽取的随机数
            // 抽取的随机结果
            let _result3 = _posible[c]
            setTimeout(() => { // 浏览器反应不过来加过渡
                // 让骰子旋转到正确的角度
                odice3.style.transform = ` 
                    rotateX(${ _result3.x }deg) rotateY(${ _result3.y }deg)
                `     
            }, 0);
        })

        // 当骰子动画执行后
        odice4.addEventListener('webkitAnimationEnd', () => {
            odice4.style.animationName = 'none' // 更改动画属性，以待下一次动画的正常执行
            // 可能出现的情况集合
            let _posible = [
                { value: 1, x: 0, y: 0 },
                { value: 6, x: 0, y: 180 },
                { value: 3, x: 0, y: -90 },
                { value: 4, x: 0, y: 90 },
                { value: 5, x: -90, y: 0 },
                { value: 2, x: 90, y: 0 },
            ]
            // 准备抽取的随机数
            // 抽取的随机结果
            let _result4 = _posible[d]
            setTimeout(() => { // 浏览器反应不过来加过渡
                // 让骰子旋转到正确的角度
                odice4.style.transform = ` 
                    rotateX(${ _result4.x }deg) rotateY(${ _result4.y }deg)
                `  
            }, 0);
        })

        // 当骰子动画执行后
        odice5.addEventListener('webkitAnimationEnd', () => {
            odice5.style.animationName = 'none' // 更改动画属性，以待下一次动画的正常执行
            // 可能出现的情况集合
            let _posible = [
                { value: 1, x: 0, y: 0 },
                { value: 6, x: 0, y: 180 },
                { value: 3, x: 0, y: -90 },
                { value: 4, x: 0, y: 90 },
                { value: 5, x: -90, y: 0 },
                { value: 2, x: 90, y: 0 },
            ]
            // 准备抽取的随机数
            // 抽取的随机结果
            let _result5 = _posible[e]
            setTimeout(() => { // 浏览器反应不过来加过渡
                // 让骰子旋转到正确的角度
                odice5.style.transform = ` 
                    rotateX(${ _result5.x }deg) rotateY(${ _result5.y }deg)
                `  
            }, 0);
        })

        // 当骰子动画执行后
        odice6.addEventListener('webkitAnimationEnd', () => {
            odice6.style.animationName = 'none' // 更改动画属性，以待下一次动画的正常执行
            // 可能出现的情况集合
            let _posible = [
                { value: 1, x: 0, y: 0 },
                { value: 6, x: 0, y: 180 },
                { value: 3, x: 0, y: -90 },
                { value: 4, x: 0, y: 90 },
                { value: 5, x: -90, y: 0 },
                { value: 2, x: 90, y: 0 },
            ]
            // 准备抽取的随机数
            // 抽取的随机结果
            let _result6 = _posible[f]
            setTimeout(() => { // 浏览器反应不过来加过渡
                // 让骰子旋转到正确的角度
                odice6.style.transform = ` 
                    rotateX(${ _result6.x }deg) rotateY(${ _result6.y }deg)
                `  
            }, 0);
        })

        NumberArr.push(a, b, c, d, e, f);
        NumberArr.sort();

         // 等级划分
        var level = {
            one: '状元插金花', //4个4+2个1
            two: '六杯花', //6个4
            three: '六杯黑', //6个6
            four: '五王', //5个4
            five: '五子登科', //5个相同的
            six: '状元', //4个4
            seven: '对堂', //1，2，3，4，5，6
            eight: '三红', //3个4
            nine: '四进', //4个相同的
            ten: '二举', //2个4
            elevent: '一秀', //1个4
            twelve: '无'
        },
        this_level; // 存储当前等级

        var first = 1-resultArr[0]-resultArr[1]-resultArr[2]-resultArr[3]-resultArr[4]-resultArr[5]
        var second = 2-resultArr[6]
        var thrid = 4-resultArr[7]
        var forth = 8-resultArr[8]
        var fifth = 16-resultArr[9]
        var sixth = 32-resultArr[10]

        //存储当前 “四” 的个数
        var isfour = 0;
 
        for (var i = 0; i < NumberArr.length; i++) {
            if (NumberArr[i] == 3) {
                isfour = isfour + 1;
            }
        }

        //存储当前 “六” 的个数
        var issix = 0;
 
        for (var i = 0; i < NumberArr.length; i++) {
            if (NumberArr[i] == 1) {
                issix = issix + 1;
            }
        }

        // 判断 “四” 的个数属于哪一等级;
        switch (isfour) {
        case 1:
            for (var i = 0; i < NumberArr.length; i++) {
                //存储当前相同的数量，判断是否为四进
                var ContrastArr = [];
                for (var j = 0; j < NumberArr.length; j++) {
                    if (NumberArr[i] == NumberArr[j]) {
                        ContrastArr.push(NumberArr[j]);
                    }
                }
            }
            // 等到上面遍历执行完再进行判断属于哪个级别
            if (ContrastArr.length === 4) {
                if(forth >= 0){
                    this_level = level.nine; //四进
                    resultArr[8] += 1;
                }else{
                    this_level = level.twelve;
                }
                break;
            } else if (ContrastArr.length === 5) {
                if(first >= 0){
                    this_level = level.five; //五子登科
                    resultArr[4] += 1;
                }else{
                    this_level = level.twelve;
                }
                break;
            } else {
                // 判断一下，是 "对堂"" or ”一秀“，对堂就是顺子，123456，一秀就是一个只有4；
                var isContinuityArray = false;
                var array = NumberArr;
                var arrayCount = array.length;
                for (var i = 0; i < arrayCount; i++) {
                    var currentArr = Number(array[i]) + 1;
                    var nestArr = Number(array[i + 1]);
                    if (i + 1 == arrayCount) {
                        currentArr = Number(array[i]);
                        nestArr = Number(array[i]);
                    }
                    if (currentArr != nestArr) {
                        isContinuityArray = false;
                        break;
                    } else {
                        isContinuityArray = true;
                    }
                }
                if (isContinuityArray) {
                    if(second >= 0){
                        this_level = level.seven; // 对堂
                        resultArr[6] += 1;
                    }else{
                        this_level = level.twelve;
                    }
                    break;
                } else {
                    if(sixth >= 0){
                        this_level = level.elevent; //一秀
                        resultArr[10] += 1;
                    }else{
                        this_level = level.twelve;
                    }
                    break;
                }
            };
            break;
        case 2:
            for (var i = 0; i < NumberArr.length; i++) {
                var ContrastArr = [];
                for (var j = 0; j < NumberArr.length; j++) {
                    if (NumberArr[i] == NumberArr[j]) {
                        ContrastArr.push(NumberArr[j]);
                    }
                }
            }
            // 判断是 四进 or 二举
            if (ContrastArr.length === 4) {
                if(forth >= 0){
                    this_level = level.nine; //四进
                    resultArr[8] += 1;
                }else{
                    this_level = level.twelve;
                }
                break;
            } else {
                if(fifth >= 0){
                    this_level = level.ten; //二举
                    resultArr[9] += 1;
                }else{
                    this_level = level.twelve;
                }
                break;
            }
            break;
        case 3:
            if(thrid >= 0){
                this_level = level.eight; //三红
                resultArr[7] += 1;
            }else{
                this_level = level.twelve;
            }
            break;
        case 4:
            // 判断是 "普通状元" or "状元插金花"，普通就是4个四，插金花就是  4个四 + 2个1 ；
            var one = 0;
            for (var i = 0; i < NumberArr.length; i++) {
                if (NumberArr[i] === 0) {
                    one = one + 1;
                }
            }
            if (one == 2) {
                if(first >= 0){
                    this_level = level.one; // 插金花
                    resultArr[0] += 1;
                }else{
                    this_level = level.twelve;
                }
            } else {
                if(first >= 0){
                    this_level = level.six; //普通状元
                    resultArr[5] += 1;
                }else{
                    this_level = level.twelve;
                }
            }
            break;
        case 5:
            if(first >= 0){
                this_level = level.four; // 五王
                resultArr[3] += 1;
            }else{
                this_level = level.twelve;
            }
            break;
        case 6:
            if(first >= 0){
                this_level = level.two; //六杯花
                resultArr[1] += 1;
            }else{
                this_level = level.twelve;
            }
            break;
        default:
            // 就是页面都没有四,来判断是否属于 “五子” 和 “六子” 和 “四进” 中的哪一种;
            for (var i = 0; i < NumberArr.length; i++) {
                var ContrastArr = [];
                for (var j = 0; j < NumberArr.length; j++) {
                    if (NumberArr[i] == NumberArr[j]) {
                        ContrastArr.push(NumberArr[j]);
                    }
                }
                if (ContrastArr.length === 4) {
                    if(forth >= 0){
                        this_level = level.nine; //四进
                        resultArr[8] += 1;
                    }else{
                        this_level = level.twelve;
                    }
                    break;
                } else if (ContrastArr.length === 5) {
                    if(first >= 0){
                        this_level = level.five; //五子登科
                        resultArr[4] += 1;
                    }else{
                        this_level = level.twelve;
                    }
                    break;
                } else if (ContrastArr.length === 6 && issix == 6) {
                    if(first >= 0){
                        this_level = level.three; //六杯黑
                        resultArr[2] += 1;
                    }else{
                        this_level = level.twelve;
                    }
                    break;
                } else {
                    this_level = level.twelve; //无
                }
            };
            break;
        }
        
        if(parseInt(clock1) >= parseInt(num)){
            clock1 -= num;
        }

        arr[clock] =  '&nbsp&nbsp&nbspPlayer' + (clock1+1) + ': The result of ' + (clock+1) + ' round is : ' + this_level + "<br/>";
        
        clock += 1;
        clock1 += 1;
        //oview1.innerHTML = 'The result of this round is : ' + this_level + "<br/>";
        //oview1.innerHTML = clock; //OK
        oview1.innerHTML = "";

        for(var i = 0; i < clock; i++){
            oview1.innerHTML += arr[i];
        }

        //Statistics on remaining result
        oview2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbspStatistics on reminding results<br/>&nbsp&nbsp&nbsp&nbsp&nbsp状元: " + first
        + "<br/>&nbsp&nbsp&nbsp&nbsp&nbsp对堂: " + second
        + "<br/>&nbsp&nbsp&nbsp&nbsp&nbsp三红: " + thrid
        + "<br/>&nbsp&nbsp&nbsp&nbsp&nbsp四进: " + forth 
        + "<br/>&nbsp&nbsp&nbsp&nbsp&nbsp二举: " + fifth
        + "<br/>&nbsp&nbsp&nbsp&nbsp&nbsp一秀: " + sixth;

    }
})();