describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });
  
    it('Add a curPayment object to allPayments, update html and reset input values', function () {
      submitPaymentInfo();
      expect(summaryTds[2].innerHTML).toEqual("20%");
      expect(summaryTds[0].innerHTML).toEqual("$100");
      expect(summaryTds[1].innerHTML).toEqual("$20");
      expect(billAmtInput.value).toEqual('');
    });

    it('createCurPayment() will return undefined with negative or empty inputs', function() {
        expect(createCurPayment().billAmt).toBeInstanceOf(String);
        expect(createCurPayment().tipAmt).toBeInstanceOf(String);
        expect(createCurPayment().billAmt).toBeGreaterThan(0);
        expect(createCurPayment().tipAmt).toBeGreaterThan(0);
        billAmtInput.value = -1;
        expect(createCurPayment()).toBeUndefined();
        billAmtInput.value = 100;
        tipAmtInput.value = -1;
        expect(createCurPayment()).toBeUndefined();
        tipAmtInput.value = '';
        billAmtInput.value = '';
    });

    it('Create table row element and pass to appendTd with input value', function() {
        appendPaymentTable(createCurPayment());
        expect(paymentTbody.firstChild.firstChild.innerText).toEqual('$100');
        expect(paymentTbody.firstChild.firstChild.nextSibling.innerText).toEqual('$20');
        expect(paymentTbody.firstChild.firstChild.nextSibling.nextSibling.innerText).toEqual("20%");
    });

    it('Create table row element and pass to appendTd with calculated sum of all payment', function() {
        submitPaymentInfo();
        expect(summaryTds[0].innerHTML).toEqual("$100");
        expect(summaryTds[1].innerHTML).toEqual("$20");
        expect(summaryTds[2].innerHTML).toEqual("20%");
    });

    afterEach(function() {
      //paymentTbody.firstChild.remove();
      allPayments = {};
      paymentId = 0;
      paymentTbody.innerHTML = '';
      for (let item of summaryTds) {
        item.innerHTML = '';
      }
    });
  });
  
  