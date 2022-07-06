describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });
  
    it('sumPaymentTotal() accepts \'tipAmt\', \'billAmt\', \'tipPercent\' and sums total from allPayments objects', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
      expect(sumPaymentTotal('billAmt')).toEqual(100);
      expect(sumPaymentTotal('tipAmt')).toEqual(20); 
    });

    it('converts the bill and tip amount into a tip percent', function() {
        expect(calculateTipPercent(50, 25)).toEqual(50);
        expect(calculateTipPercent(50, 15)).toEqual(30);
        expect(calculateTipPercent(0, 0)).toBeNaN();
    });

    it('expects a table row element, appends a newly created td element from the value', function() {
        expect(paymentTbody.firstChild.firstChild.innerText).toEqual("$100");
        let tr = document.createElement("tr");
        const VALUE = "let's go nutz";
        appendTd(tr, VALUE);
        expect(tr.innerText).toEqual(VALUE);
    });

    it('appends delete/X button at end of server and payment table rows', function() {
        let tr = document.createElement("tr");
        appendDeleteBtn(tr);
        tr.id = 'testDelete';
        expect(tr.innerText).toEqual('X');

        expect(paymentTbody.firstChild.lastChild.innerText).toEqual('X');
    });

    afterEach(function() {
      allPayments = {};
      paymentId = 0;
      paymentTbody.innerHTML = '';
      for (let item of summaryTds) {
        item.innerHTML = '';
      }
    });
  });
  
  