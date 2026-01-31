class TokenEngine {
  constructor() {
    this.slots = {};
  }

  createSlot(slotId, capacity) {
    this.slots[slotId] = {
      capacity: capacity,
      tokens: []
    };
  }

  addToken(slotId, patientId, type) {
    this.slots[slotId].tokens.push({
      patientId: patientId,
      type: type
    });
  }

  showQueue(slotId) {
    console.log(this.slots[slotId].tokens);
  }
}

const engine = new TokenEngine();
engine.createSlot("9-10", 2);
engine.addToken("9-10", "P1", "REGULAR");
engine.addToken("9-10", "P2", "EMERGENCY");
engine.showQueue("9-10");
