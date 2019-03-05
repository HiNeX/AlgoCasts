// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.c = []
  }
  // Register an event handler
  on(eventName, callback) {
    this.c.push({ eventName, callback })
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const eventsList = this.c.filter(e => e.eventName === eventName)

    for (const e of eventsList) {
        e.callback()
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.c = this.c.filter(e => e.eventName !== eventName)
  }
}

module.exports = Events;
