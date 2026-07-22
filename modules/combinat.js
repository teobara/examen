(function() {
  var all = [];
  var sources = ["cap1","cap2","cap3","cap4","cap5","cap6","cap7","cap8","cap9","cap10","cap11"];
  for (var i = 0; i < sources.length; i++) {
    var mod = MODULES[sources[i]];
    if (mod && mod.questions) {
      for (var j = 0; j < mod.questions.length; j++) {
        var q = JSON.parse(JSON.stringify(mod.questions[j]));
        q.id = all.length + 1;
        all.push(q);
      }
    }
  }
  registerModule("combinat", "Combinat — Toate capitolele", "Întrebări din toate cele 11 capitole", all);
})();
