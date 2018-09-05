/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var arr1 = [];
  var arr2 = [];
  while(l1 || l2){
    v1 = l1 ? l1.val : 0; arr1.push(v1);
    v2 = l2 ? l2.val : 0; arr2.push(v2);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  var num1 = parseInt(arr1.reverse().join(''));
  var num2 = parseInt(arr2.reverse().join(''));

  var numre = (num1+num2).toString().split('').reverse();
  
  var result, lastitem = null;

  
  for(var i= numre.length-1; i>-1; i -- ){
    var item = new ListNode(parseInt(numre[i]));
    if(i<numre.length){
      item.next = lastitem;
    }
    if(i == 0 ){
      console.log(item);
      result = item
    }else{
      lastitem = item;
    }
  }

  return result
};
