suite('basic', function() {

  //this.timeout(2000);

  var container = document.getElementById('container');
  var items = document.getElementById('items').innerHTML;

  teardown(function () {
    container.innerHTML = '';
  });

  test('default generic', function(done) {
    var fixture = document.createElement('basic-list-box');
    container.appendChild(fixture);
    fixture.innerHTML = items;
    flush(function() {
      assert.equal(fixture.generic, true);
      done();
    });
  });

  test('default prefixNavigation', function(done) {
    var fixture = document.createElement('basic-list-box');
    container.appendChild(fixture);
    fixture.innerHTML = items;
    flush(function() {
      assert.equal(fixture.prefixNavigation.value, true);
      done();
    });
  });

  test('default selection', function(done) {
    var fixture = document.createElement('basic-list-box');
    container.appendChild(fixture);
    fixture.innerHTML = items;
    flush(function() {
      assert.equal(fixture.selected, null);
      done();
    });
  });

  test('selectItemWithTextPrefix', function(done) {
    var fixture = document.createElement('basic-list-box');
    container.appendChild(fixture);
    fixture.innerHTML = items;
    flush(function() {
      fixture.selectItemWithTextPrefix('item 3');
      flush(function() {
        assert.equal(fixture.selected, 2);
        done();
      });
    });
  });

  test('selectLastItem', function(done) {
    var fixture = document.createElement('basic-list-box');
    container.appendChild(fixture);
    fixture.innerHTML = items;
    flush(function() {
      fixture.selectLastItem();
      flush(function() {
        assert.equal(fixture.selected, 29);
        done();
      });
    });
  });

  test('selectFirstItem', function(done) {
    var fixture = document.createElement('basic-list-box');
    container.appendChild(fixture);
    fixture.innerHTML = items;
    flush(function() {
      fixture.selectLastItem();
      flush(function() {
        assert.equal(fixture.selected, 29);
        fixture.selectFirstItem();
        flush(function() {
          assert.equal(fixture.selected, 0);
          done();
        });
      });
    });
  });

  test('selectNextItem', function(done) {
    var fixture = document.createElement('basic-list-box');
    container.appendChild(fixture);
    fixture.innerHTML = items;
    fixture.selectedIndex = 0;
    flush(function() {
      assert(fixture.items);
      assert.equal(fixture.items.length, 30);
      assert.equal(fixture.selectedIndex, 0);
      fixture.selectNextItem();
      flush(function() {
        assert.equal(fixture.selected, 1);
        fixture.selectNextItem();
        flush(function() {
          assert.equal(fixture.selected, 2);
          done();
        });
      });
    });
  });

  test('selectPreviousItem', function(done) {
    var fixture = document.createElement('basic-list-box');
    container.appendChild(fixture);
    fixture.innerHTML = items;
    fixture.selectedIndex = 9;
    flush(function() {
      assert(fixture.items);
      assert.equal(fixture.items.length, 30);
      assert.equal(fixture.selectedIndex, 9);
      fixture.selectPreviousItem();
      flush(function() {
        assert.equal(fixture.selected, 8);
        fixture.selectPreviousItem();
        flush(function() {
          assert.equal(fixture.selected, 7);
          done();
        });
      });
    });
  });

  // BUGBUG - selectedItemChanged not being called?
  test.skip('scroll item into view', function(done) {
    var fixture = document.createElement('basic-list-box');
    container.appendChild(fixture);
    fixture.innerHTML = items;
    flush(function() {
      //fixture.selectItemWithTextPrefix('item 28');
      fixture.selected = 27;
      flush(function() {
        assert.equal(fixture.selected, 27);
        assert.equal(fixture._selectedItemIsInline(), true);
        done();
      });
    });
  });

  // BUGBUG TODO: Much more!

});

