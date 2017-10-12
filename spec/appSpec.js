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
      it("should return an error if 0 decimal is entered", function() {
        var result = convBin(0);
        expect(result).toBeGreaterThan("".length);
      });
      it("should return an error if type is not number", function() {
        number = "9ff";
        expect(typeof(number)).toEqual('number');
      });
    });
  });
  