{
    let obj = {}
    let proxy = new Proxy(obj, {
        set: function (target, key, value, receiver) {
            console.log(`setting ${key}!`);
            return Reflect.set(target, key, value, receiver);
        },
        get: function (target, key, receiver) {
            console.log(`getting ${key}!`);
            return Reflect.get(target, key, receiver);
        }
    })
    obj.count = 1

}