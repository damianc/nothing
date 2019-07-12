# The what is that?

**nothing** is a trivial library allowing you to do nothing with an array.

# API

| Method                          | Description          |
|---------------------------------|----------------------|
| [].nothing.atTheBeginning()     | Puts a removed first item of an array back into the beginning of the array. |
| [].nothing.atTheEnd()           | Puts a removed last item of an array back into the end of the array.        |
| [].nothing.atThePosition(n)     | Puts a removed n-th item of an array back into the array at the n-th index. |
| [].nothing.atARandomPosition()  | Puts a removed random item of an array back into the array at its index.    |
| [].nothing.nowhere()            | Performs no operation anywhere within an array.                             |
| [].nothing.withTheFirstItem()   | Puts the removed first item of an array back into the array at 1st index.   |

# Usage

```javascript
var arr = [1, 2, 3, 4];
arr = arr.nothing.atTheEnd();

console.log(arr);
// [1, 2, 3, 4]
```
