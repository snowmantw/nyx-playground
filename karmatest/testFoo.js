describe("Hello world", function() {
    var helloWorld;
    beforeEach(function() {
      helloWorld = () => {
        return 'Hello world!';
      };
    });
    it("says hello", function() {
        expect(helloWorld()).toEqual("Hello world!");
    });
});
