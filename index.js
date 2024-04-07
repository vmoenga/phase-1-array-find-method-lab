// code your solution here
function superbowlWin(record) {
    const win = record.find(r => r.result === 'W');
    return win ? win.year : undefined;
  }
  