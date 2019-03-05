// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list, ca = []) {
    const c = ca

    if (list.hasOwnProperty('head')) {
        return circular(list.head)
    }

    if (list.hasOwnProperty('next') && !c.includes(list.data)) {
        c.push(list.data)
        return list.next !== null ? circular(list.next, c) : false
    }

    return true
}

module.exports = circular;
