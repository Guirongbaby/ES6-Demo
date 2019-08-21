// 1. 遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

// 第一步： 自定义对象
let s = {
    data: [1, 2, 3, 9, 'aicoder'],
    [Symbol.iterator]() {
        let self = this;
        return {
            next() {
                if (self._index === undefined) {
                    self._index = 0;
                }

                let t = {
                    value: self.data[self._index],
                    done: self._index === self.data.length - 1
                }
                self._index += 1;
                return t;
            }
        }
    }
}
for (let v of s) {
    console.log('v :', v);
}
// v : 1
// v : 2
// v : 3
// v : 9



