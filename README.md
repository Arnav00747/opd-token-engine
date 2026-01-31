Features:
- Fixed time-slot based OPD scheduling
- Priority handling for Emergency patients
- Slot capacity enforcement
- Simple OPD day simulation using console logs

Approach:
The system assigns tokens to patients based on priority.
If an emergency patient arrives, they are placed at the top
of the queue while respecting slot capacity constraints.

Limitations:
This is an in-memory simulation and does not persist data.
