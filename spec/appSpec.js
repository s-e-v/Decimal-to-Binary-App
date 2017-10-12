describe("Decimal to Binary Converter", function() {
  
    describe("Covenrsions tests", function() {
      it("255 decimal return test", function() {
        var result = convBin(255);
        expect(result).toEqual("11111111");
      });
      it("2222 decimal return test", function() {
        var result = convBin(2222);
        expect(result).toEqual("100010101110");
      });
      it("999,999 decimal return test", function() {
        var result = convBin(999999);
        expect(result).toEqual("11110100001000111111");
      });
    });

    describe("Input tests", function() {
      it("returns a empty result when input is 0", function() {
        var result = convBin(0);
        expect(result).toEqual("");
      });
      it("return a number as input", function() {
        number = 123;
        expect(typeof(number)).toEqual('number');
      });
    });
  });
  