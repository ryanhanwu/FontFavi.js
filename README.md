FontFavi.js
===========

A JavaScript library to generate text favicon from HTML5 canvas

### Demo

* URL : http://blog.ryanwu.me


### Installation

Add the script to your page

```
   <script src="/js/FontFav.min.js"></script>
```

### Configurations

##### Default
```
{
    fillColor: '#ea4317',
    roundCorner: true,
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: '100',
    fontFamily: 'Fantasy',
    fontColor: '#FFFFFF',
    textAlign: 'center',
    textBaseline: 'middle',
    text: 'FV'
}
```

### Usage

Create a new ```FontFavi``` object with options, then use ```update()``` to install the favicon.

```
var favicon = new FontFavi(options);
favicon.update();
```

###### Example
```
var favicon = new FontFavi({
        fontFamily : 'Lato',
        text : 'RW'
    });
favicon.update();
```

