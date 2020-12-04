# 题目

1. 计算今日离你出生日期经过了多久，精确到分钟。
```js
var now = new Date();
    var birthday = new Date(1994,08,01);
    // console.log(parseInt((now-birthday)/60000)) // 第一种日期直接相减会以毫秒显示结果
    var nowtime = now.getTime();
    var birthdaytime = birthday.getTime();
    console.log(parseInt((nowtime - birthdaytime)/60000));//第二种返回各自日期的getTIme值 然后相减
```

2. 首字母大写。

   ```js
   var str = 'abcd123';
   // str 也有可能不是字符串
   function main(str){
     
   }
   
   main('str');
   main(null)
   // ===> 'Abcd123'
   ```
   ```js
   function firstLetterToUpperCase(str) {
       var res;
       if (typeof str === 'string') {
           res = str.charAt(0).toUpperCase() + str.substr(1);
       } else {
           res = str;
       }
       return res;
   }
   ```

   

3. 将_后面的小写字母变大写，并且删除\_。

   ```js
   // 假设
   var str = 'a_bgfgh_h_d';
   
   // 最后结果 'aBgfghHD'
   ```
```js
 // 假设
   var str = 'a_bgfgh_h_d';
   
   function firstLetterToUpperCase(str) {
       var res;
       if (typeof str === 'string') {
           res = str.charAt(0).toUpperCase() + str.substr(1);
       } else {
           res = str;
       }
       return res;
   }
   
   // 最后结果 'aBgfghHD'
   function toCamelStyle(str) {
       var res;
       if (typeof str === 'string') {
           var isFisrstLetterUnderscore = str.charAt(0) === '_';
           var wordArr;
           if(isFisrstLetterUnderscore){
               str = str.substr(1);
           }
           wordArr = str.split('_');
           wordArr = wordArr.map(function (word, index) {
               // firstLetterToUpperCase 在题目 1 中实现
               return index === 0 ? word : firstLetterToUpperCase(word);
           });
           res = wordArr.join('');
           if(isFisrstLetterUnderscore){
               res = '_' + res;
           }
       } else {
           res = str;
       }
       return res;
   }
```
   

4. 冒泡排序。
```js
var a = [1,5,2,7,3,6,8,9,4];
for(i = 0; i < a.length-1; i++){
    for(j = 0 ; j<a.length-1-i; j++) {
        if(a[j]<=a[j+1]){
            var temp = a[j]
            a[j] = a[j+1]
            a[j+1] = temp;
        }
    }
}
console.log(a)
```

5. 页面作业

   - 尽量完成

   - 按我们课堂讲的，使图片可以放大，达到这个效果

     

   ![Jul-24-2020 16-52-05](http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/teach/Jul-24-2020%2016-52-05.gif)