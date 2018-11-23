const db = require('./log')

function getFrom(str) {
    let newstr = null
    // console.log(typeof str)
    if(str.indexOf("from")!=-1){
        let strarr = str.split('from')
        let ipstr = strarr[1].split(':')
        let urlstr = strarr[0].split(':')
        newstr = {
            'ip': ipstr[0],
            'url':urlstr[0]
        }
        return newstr
	}else{
        newstr = str
		return newstr
    }
}

// 判断是否存在connet
function getNet(str) {
    // if(time(str, '2018-11-04')) {
    //     return false
    // }
    let data = null
    if(str.indexOf("connecting")!=-1){
        const arr = str.split('INFO     connecting ');
        let newstr = getFrom(arr[1])
        data = {
            'date': arr[0],
            'data': newstr
        }
        db.save(data).then((res) => {
            console.log('成功')
        })
        .catch((err) =>{
            console.log(err)
        })
        return data
	}else{
        // data = {
        //     'date': null,
        //     'data': str
        // }
        // db.save(data).then((res) => {
        //     // console.log('成功')
        // })
        // .catch((err) =>{
        //     console.log(err)
        // })
		// return data
    }
}

// 读取时间范围的数据
function time (str ,time) {
    if(str.indexOf(time)!=-1){ 
        console.log('读取'+time +'数据')
        return false
    }else {
        return true
    }
}


module.exports = {
    getNet
}