describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
    var mod = new Module(),
        request;

    Module.prototype.request = function (callback) {
      return callback(this);
    }

    function Module () {
      this.foo = 'bar';
    }

    Module.prototype.method = function(obj) {
      return obj.foo;
    };

    Module.prototype.req = function() {
      return this.request(this.method);
    };

    expect(mod.req()).toBe('bar');
  });
});
