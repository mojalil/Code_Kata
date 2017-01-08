// Q3. Create a bucketlist object. Things you want to do before DYING. With 3 functions (list, add and remove). List should list all items. Add should add items and remove should remove items from the list.
// A3. In progress
var bucketList = {
  list : ['learn to code'],
  printList : function() {
    return this.list;
  },
  add : function(item){
    return this.list.push(item);
  },
  remove: function(){
    return this.list.pop(item);
  }
}

// console.log(bucketList.list);
console.log(bucketList.printList());
console.log(bucketList.add('be awesome'));
console.log(bucketList.printList());
