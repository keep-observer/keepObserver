import  { Tools }  from '@util/index'


describe("util tool ",function(){


    it("tool check kind ",function(){
        expect(Tools.isString('test')).toEqual(true)
        expect(Tools.isString(1111)).toEqual(false)

        expect(Tools.isNumber(1111)).toEqual(true)
        expect(Tools.isNumber('1111')).toEqual(false)
        expect(Tools.isNumber(NaN)).toEqual(true)

        expect(Tools.isArray([])).toEqual(true)
        expect(Tools.isArray({})).toEqual(false)

        expect(Tools.isBoolean(false)).toEqual(true)
        expect(Tools.isBoolean(null)).toEqual(false)

        expect(Tools.isRegExp(/^test/g)).toEqual(true)

        expect(Tools.isDateObject(new Date())).toEqual(true)

        expect(Tools.isUndefined(undefined)).toEqual(true)

        expect(Tools.isNull(null)).toEqual(true)

        expect(Tools.isExist(null)).toEqual(false)
        expect(Tools.isExist(undefined)).toEqual(false)
        expect(Tools.isExist('')).toEqual(true)
        expect(Tools.isExist(0)).toEqual(true)

        expect(Tools.isSymbol(Symbol('test'))).toEqual(true)
        
        expect(Tools.isObject({})).toEqual(true)
        expect(Tools.isEmptyObject({})).toEqual(true)
        expect(Tools.isEmptyObject({test:1})).toEqual(false)
        expect(Tools.isEmptyArray([])).toEqual(true)
        expect(Tools.isEmptyArray([1])).toEqual(false)

        var fun = function(){return null};
        expect(Tools.isFunction(fun)).toEqual(true)
        expect(Tools.isElement(document.body)).toEqual(true)
        expect(Tools.isWindow(window)).toEqual(true)

        expect(Tools.isPlainObject(window)).toEqual(false)
        expect(Tools.isPlainObject({test:11})).toEqual(true)
    })
});



