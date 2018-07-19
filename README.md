# Useful
:bulb: Write less. Use(ful) these API.

------------------
## Install
[Download the library](dist/Useful.js) and add to your code.
```HTML
<script src="Useful.js"></script>
```
or
```HTML
<script src="Useful.min.js"></script>
```

------------------
## Usage
First init
```Javascript
var useful = new Useful();
```
and after this you can call all function with the useful variable.

------------------
## API Documentation
You can view all API Documentation here: http://www.biuni.it/useful

> ### Random
* **randomInt**  
Return a random integer.  
```Javascript
useful.randomInt(); // 99
useful.randomInt({ max: 50, min: 30 }); // 34
useful.randomInt({ max: 50 }); // 49 
```
Params:  
~ *max*: maximum value. Default 100. Optional.  
~ *min*: minimum value. Default 0. Optional.  

* **randomString**  
Return a random string.  
```Javascript
useful.randomString(); // MY5Oym1qlKbI1Ym5
useful.randomString({ length: 20, shuffle: 'example' }); // aeeapeexmlemxeeleexe
useful.randomString({ length: 20 }); // ahdsaASDASH21312asdA
useful.randomString({ shuffle: 'example' }); // mxaplexam
```
Params:  
~ *length*: maximum length of the string. Default 16. Optional.  
~ *shuffle*: the alphabet to be mixed to create the string. Optional.   

* **rndItem**  
Return a random element into the array.  
```Javascript
var number = [0,1,2,3,4,5,6,7,8,9];
useful.rndItem(number); // 5
```
Params:  
~ *array*: array of elements.  


> ### Time
* **timeRemain**  
Return the time remained.
```Javascript
useful.timeRemain('December 31 2017 23:59:59'); // {days: 210, hours: 22, minutes: 53, seconds: 15}
useful.timeRemain('December 31 2017 23:59:59').days; // 210
useful.timeRemain('December 31 2017 23:59:59').hours; // 22
useful.timeRemain('December 31 2017 23:59:59').minutes; // 53
useful.timeRemain('December 31 2017 23:59:59').seconds; // 15
```
Avaiable format:  
~ '2017-12-31'  
~ '2017-12-31 23:59:59'  
~ 'December 31 2017'  
~ 'December 31 2017 23:59:59'  
Params:  
~ *date*: the date to calculate the remaining time.  

> ### Countdown
* **countdown**  
Return the time remaining for each second and print it onto a DOM element.
```Javascript
var deadline = '2017-12-31 10:45:00';
var clock = document.getElementById('clock');
function countdown(){
    var time = useful.timeRemain(deadline);
    var type = time.days +':'+ time.hours +':'+ time.minutes +':'+ time.seconds;
    clock.innerHTML = type;
}
setInterval(countdown, 1000); // 343:16:54:46
```

> ### Boolean
* **isNative**  
Return true if the function is Javascript native or false if the function is customized.
```Javascript
useful.isNative(alert); // true
useful.isNative(my_function); // false
```
Params:  
~ *identifier*: function identifier.  

* **storageSupport**  
Return true if the browser support localStorage and sessionStorage. False otherwise.
```Javascript
useful.storageSupport(); // true || false
```

> ### CSS
* **insertStyle**  
Insert style into head.
```Javascript
useful.insertStyle('.class { background: green; color: white; font-family: sans-serif; }');
```
Params:  
~ *css*: CSS snippet.  


> ### Array
* **inArray**  
Return true if the element is into the array. False otherwise.
```Javascript
var number = [0,1,2,3,4,5,6,7,8,9];
useful.inArray(2, number); // true
useful.inArray(10, number); // false
```
Params:  
~ *element*: element to find.  
~ *array*: array for research.  

* **dumpArray**  
Print the array like the "print_r" function of PHP.
```Javascript
var number = [0,1,2,3,4,5,6,7,8,9];
useful.dumpArray(number);
/*
    '0' => "0"
    '1' => "1"
    '2' => "2"
    '3' => "3"
    '4' => "4"
    '5' => "5"
    '6' => "6"
    '7' => "7"
    '8' => "8"
    '9' => "9"
*/
```
Params:  
~ *array*: array of elements.  

> ### Utility
* **escapeHTML**
Return the escape string of HTML.
```Javascript
useful.escapeHTML('<html><head><title></title></head><body></html>');
```
Params:  
~ *html*: HTML snippet.  

* **cleanURL**
Clean the url for search engine optimization or just to tidy up the site navigation.
```Javascript
useful.cleanURL('This is the title of my new post'); // this-is-the-title-of-my-new-post
```
Params:  
~ *url*: the title or the URL to clean it.  

> ### Storage
* **setLStorage**
```Javascript
useful.setLStorage('key','value');
```
* **getLStorage**
```Javascript
useful.getLStorage('key'); // value
```
* **removeLStorage**
```Javascript
useful.removeLStorage('key');
```
* **clearLStorage**
```Javascript
useful.clearLStorage();
```
* **setSStorage**
```Javascript
useful.setSStorage('key','value');
```
* **getSStorage**
```Javascript
useful.getSStorage('key'); // value
```
* **removeSStorage**
```Javascript
useful.removeSStorage('key');
```
* **clearSStorage**
```Javascript
useful.clearSStorage();
```

------------------
## Version
1.0.0
