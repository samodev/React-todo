var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('Should exist', () => {
    expect(AddTodo).toBeTruthy();
  });

  // it('Should call onAddTodo prop with valid date', () => {
  //   var spy = expect.createSpy();
  //   var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
  //   var $el = $(ReactDOM.findDOMNode(addTodo));
  //
  //   addTodo.refs.todoText.value = 'check mail';
  //   testUtils.Simulate.submit($el.find('form')[0]);
  //
  //   expect(spy).toHaveBeenCalledWith('check mail');
  // });
});
