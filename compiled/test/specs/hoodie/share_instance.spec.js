// Generated by CoffeeScript 1.3.3

describe("Hoodie.ShareInstance", function() {
  beforeEach(function() {
    return this.hoodie = new Mocks.Hoodie;
  });
  return describe("constructor", function() {
    it("should set id from options.id", function() {
      var share;
      share = new Hoodie.ShareInstance(this.hoodie, {
        id: 'id123'
      });
      return expect(share.id).toBe('id123');
    });
    it("shoudl set name from id", function() {
      var share;
      share = new Hoodie.ShareInstance(this.hoodie, {
        id: 'id123'
      });
      return expect(share.name).toBe('share/id123');
    });
    return it("should generate an id if options.id wasn't passed", function() {
      var share;
      share = new Hoodie.ShareInstance(this.hoodie);
      return expect(share.id).toBe('uuid');
    });
  });
});
