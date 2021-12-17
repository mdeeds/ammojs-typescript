import AmmoModule from "ammojs-typed";

AmmoModule().then((lib) => {
  const cfg = new lib.btDefaultCollisionConfiguration();
  console.log('Success!');
  console.log(cfg);
});

