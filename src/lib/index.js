const ACCEPTABLE_PROPS = ['escape'];

const rebuilder = new Proxy({}, {
    get(target, propName) {
        if (ACCEPTABLE_PROPS.includes(propName)){
            return 'test_value'
        }
        else{
            console.error(`Unknown property: ${propName}`)
        }
    }
});

module.exports = rebuilder;
