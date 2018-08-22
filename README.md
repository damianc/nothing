# The what is that?

**nothing** is a lightweight library allowing you to do nothing with an array.

# API

| Method                          | Description          |
|---------------------------------|----------------------|
| [].nothing.atTheBeginning()     | Puts a removed array's first item back into the beginning of the array. |
| [].nothing.atTheEnd()           | Puts a removed array's last item back into the end of the array.        |

# Usage

```javascript
var arr = [1, 2, 3, 4];
arr = arr.nothing.atTheEnd();

console.log(arr);
// [1, 2, 3, 4]
```
