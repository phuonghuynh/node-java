require('find-java-home')(function(err, home){
  // if(err){
  //   console.error("[node-java] "+err);
  //   process.exit(1);
  // }
  // process.stdout.write(home);
  process.stdout.write('../jdk/jre-9.0.4.jre/Contents/Home');
});

// process.stdout.write('jdk/jre-9.0.4.jre/Contents/Home');