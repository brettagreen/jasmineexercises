describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    submitServerInfo();
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a row to the servers table based on serverNameInput.value', function() {
    expect((serverTbody.firstChild.firstChild).innerText).toEqual('Alice');
  });

  afterEach(function() {
    allServers = {};
    serverId = 0;
    allPayments = {};
    paymentId = 0;
    serverTbody.innerHTML = '';
    for (let item of summaryTds) {
      item.innerHTML = '';
    }
  });
});

